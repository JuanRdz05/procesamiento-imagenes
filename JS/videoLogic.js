// ============================================
// LÓGICA DEL VIDEO CON FILTROS - MEJORADA
// ============================================

// Variables globales
let paisActual = "";
let videoElement = null;
let isPlaying = false;
let animationFrame = null;
let isMuted = false;
let currentVolume = 100;

// Mapeo de países a nombres de archivo
const videoMapping = {
	sudafrica: "sudafrica",
	corea: "corea",
	colombia: "colombia",
	espana: "españa",
	japon: "japon",
	tunez: "tunez",
	uruguay: "uruguay",
	uzbekistan: "uzbekistan",
};

// Variables para los filtros
let filtrosActuales = {
	brillo: 100,
	contraste: 100,
	saturacion: 100,
	blur: 0,
	grayscale: 0,
	sepia: 0,
	invert: 0,
	hueRotate: 0,
};

// ============================================
// PRECARGA DE VIDEO
// FIX: precargamos los metadatos del video en cuanto
// el usuario selecciona un país, ANTES de abrir el modal.
// Así cuando el usuario pulsa "Ver video" el buffer ya
// tiene datos y la reproducción empieza casi al instante.
// ============================================
let preloadedSrc = "";
let preloadBuffer = null;

function precargarVideo(nombrePais) {
	const nombreArchivo = videoMapping[nombrePais] || nombrePais;
	const rutaVideo = `../VIDEO/${nombreArchivo}.mp4`;

	// Evitar precargar el mismo video dos veces
	if (preloadedSrc === rutaVideo) return;
	preloadedSrc = rutaVideo;

	// Usamos un elemento oculto solo para buffering
	if (!preloadBuffer) {
		preloadBuffer = document.createElement("video");
		preloadBuffer.style.display = "none";
		preloadBuffer.muted = true;
		document.body.appendChild(preloadBuffer);
	}

	// preload="metadata" descarga solo cabecera + duración (liviano)
	// pero inicia la conexión HTTP para que el buffer empiece antes
	preloadBuffer.preload = "metadata";
	preloadBuffer.src = rutaVideo;
	preloadBuffer.load();

	console.log("🔄 Precargando metadatos de:", rutaVideo);
}

// ============================================
// FUNCIONES PRINCIPALES
// ============================================

function inicializarVideo(nombrePais) {
	paisActual = nombrePais;
	console.log("🎬 Inicializando video para:", nombrePais);

	// Iniciar precarga inmediatamente al seleccionar país
	precargarVideo(nombrePais);

	const botonesContainer = document.getElementById("botones-container");
	if (botonesContainer) {
		botonesContainer.classList.add("visible");
	}

	const btnVideo = document.getElementById("btn-video-pais");
	if (btnVideo) {
		btnVideo.onclick = function (e) {
			e.preventDefault();
			e.stopPropagation();
			abrirVideoModal();
			return false;
		};
	}
}

function abrirVideoModal() {
	if (!paisActual) return;

	const modal = document.getElementById("video-modal");
	const loadingIndicator = document.getElementById("loadingIndicator");
	const loadingProgress = document.getElementById("loadingProgress");
	videoElement = document.getElementById("videoInteractivo");

	const nombreArchivo = videoMapping[paisActual] || paisActual;
	const rutaVideo = `../VIDEO/${nombreArchivo}.mp4`;

	console.log("📹 Abriendo video:", rutaVideo);

	// FIX: limpiar src anterior correctamente antes de asignar uno nuevo
	// Sin esto el navegador puede mezclar buffers de videos distintos
	videoElement.pause();
	videoElement.removeAttribute("src");
	videoElement.load();

	// FIX: usar preload="auto" al abrir el modal para que el navegador
	// descargue agresivamente. El preload anterior con "metadata" ya
	// calentó la conexión, así que el buffer estará más adelantado.
	videoElement.preload = "auto";
	videoElement.src = rutaVideo;

	// Mostrar indicador solo si el video no puede reproducirse aún
	// FIX: esperamos el evento "canplay" (no canplaythrough) que es
	// el primero disponible y suficiente para iniciar sin tener todo listo
	let loadingTimeout = setTimeout(() => {
		if (loadingIndicator) loadingIndicator.classList.add("visible");
	}, 300); // solo mostramos spinner si tarda más de 300ms

	videoElement.oncanplay = function () {
		clearTimeout(loadingTimeout);
		if (loadingIndicator) loadingIndicator.classList.remove("visible");
		updateDuration();
		console.log("✅ Video listo para reproducir");
	};

	// FIX: progreso de descarga visible al usuario
	videoElement.onprogress = function () {
		if (!videoElement.buffered.length || !loadingProgress) return;
		const bufferedEnd = videoElement.buffered.end(
			videoElement.buffered.length - 1,
		);
		const duration = videoElement.duration;
		if (duration > 0) {
			const pct = Math.round((bufferedEnd / duration) * 100);
			loadingProgress.textContent = `${pct}%`;
		}
	};

	videoElement.onwaiting = function () {
		if (loadingIndicator) loadingIndicator.classList.add("visible");
	};

	videoElement.onplaying = function () {
		if (loadingIndicator) loadingIndicator.classList.remove("visible");
	};

	videoElement.onerror = function () {
		clearTimeout(loadingTimeout);
		if (loadingIndicator) loadingIndicator.classList.remove("visible");
		console.error("❌ Error cargando el video:", rutaVideo);
	};

	// Mostrar modal antes de cargar para que el usuario vea el spinner
	modal.classList.add("visible");

	// FIX: llamamos load() después de asignar src para asegurar
	// que el navegador empiece la descarga desde cero limpiamente
	videoElement.load();

	videoElement
		.play()
		.then(() => {
			clearTimeout(loadingTimeout);
			isPlaying = true;
			updatePlayButton();
		})
		.catch(() => {
			// Autoplay bloqueado — normal en móviles, el usuario toca play
			isPlaying = false;
			updatePlayButton();
		});

	startProgressUpdate();
	resetearFiltros();
	mostrarControlesTemporalmente();
	setupProgressEvents();
}

function cerrarVideoModal() {
	const modal = document.getElementById("video-modal");

	if (videoElement) {
		videoElement.pause();
		videoElement.currentTime = 0;
		// FIX: removeAttribute + load() es la forma correcta de liberar
		// el buffer y la conexión HTTP completamente
		videoElement.removeAttribute("src");
		videoElement.load();
		videoElement.oncanplay = null;
		videoElement.onprogress = null;
		videoElement.onwaiting = null;
		videoElement.onplaying = null;
		videoElement.onerror = null;
	}

	isPlaying = false;
	modal.classList.remove("visible");

	if (animationFrame) {
		cancelAnimationFrame(animationFrame);
		animationFrame = null;
	}
}

function togglePlayPause() {
	if (!videoElement) return;

	if (isPlaying) {
		videoElement.pause();
	} else {
		videoElement.play();
	}

	isPlaying = !isPlaying;
	updatePlayButton();
}

function updatePlayButton() {
	const btn = document.getElementById("btnPlayPause");
	if (btn) {
		btn.innerHTML = isPlaying ? "⏸" : "▶";
	}
}

function updateDuration() {
	if (!videoElement) return;
	const durationEl = document.getElementById("duration");
	if (durationEl && !isNaN(videoElement.duration)) {
		durationEl.textContent = formatTime(videoElement.duration);
	}
}

function updateCurrentTime() {
	if (!videoElement) return;
	const currentTimeEl = document.getElementById("currentTime");
	if (currentTimeEl) {
		currentTimeEl.textContent = formatTime(videoElement.currentTime);
	}
}

function formatTime(seconds) {
	if (isNaN(seconds)) return "0:00";
	const mins = Math.floor(seconds / 60);
	const secs = Math.floor(seconds % 60);
	return `${mins}:${secs.toString().padStart(2, "0")}`;
}

function updateProgress() {
	if (!videoElement) return;

	const progressBar = document.getElementById("progressBar");
	const porcentaje = (videoElement.currentTime / videoElement.duration) * 100;
	if (progressBar && !isNaN(porcentaje)) {
		progressBar.style.width = porcentaje + "%";
	}

	updateCurrentTime();
}

function startProgressUpdate() {
	// FIX: cancelar el frame anterior si existe para evitar loops duplicados
	if (animationFrame) {
		cancelAnimationFrame(animationFrame);
	}

	const update = () => {
		updateProgress();
		animationFrame = requestAnimationFrame(update);
	};
	update();
}

function setupProgressEvents() {
	const progressContainer = document.getElementById("progressContainer");
	if (!progressContainer || !videoElement) return;

	// FIX: clonar el nodo para limpiar listeners anteriores
	// sin esto cada vez que se abre el modal se acumulan listeners duplicados
	const nuevoContainer = progressContainer.cloneNode(true);
	progressContainer.parentNode.replaceChild(nuevoContainer, progressContainer);

	nuevoContainer.addEventListener("click", (e) => {
		const rect = nuevoContainer.getBoundingClientRect();
		const pos = (e.clientX - rect.left) / rect.width;
		const newTime = pos * videoElement.duration;
		if (!isNaN(newTime) && isFinite(newTime)) {
			videoElement.currentTime = newTime;
		}
	});

	let isDragging = false;

	nuevoContainer.addEventListener("mousedown", () => {
		isDragging = true;
	});
	document.addEventListener("mousemove", (e) => {
		if (!isDragging || !videoElement) return;
		const rect = nuevoContainer.getBoundingClientRect();
		const pos = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
		const newTime = pos * videoElement.duration;
		if (!isNaN(newTime) && isFinite(newTime)) {
			videoElement.currentTime = newTime;
		}
	});
	document.addEventListener("mouseup", () => {
		isDragging = false;
	});

	nuevoContainer.addEventListener("touchstart", (e) => {
		isDragging = true;
		handleTouchSeek(e, nuevoContainer);
	});
	nuevoContainer.addEventListener("touchmove", (e) => {
		if (isDragging) {
			e.preventDefault();
			handleTouchSeek(e, nuevoContainer);
		}
	});
	nuevoContainer.addEventListener("touchend", () => {
		isDragging = false;
	});
}

function handleTouchSeek(e, container) {
	if (!videoElement) return;
	const touch = e.touches[0];
	const rect = container.getBoundingClientRect();
	const pos = Math.max(
		0,
		Math.min(1, (touch.clientX - rect.left) / rect.width),
	);
	const newTime = pos * videoElement.duration;
	if (!isNaN(newTime) && isFinite(newTime)) {
		videoElement.currentTime = newTime;
	}
}

function mostrarControlesTemporalmente() {
	const controls = document.getElementById("videoControls");
	if (!controls) return;
	controls.classList.add("show");
	setTimeout(() => {
		if (isPlaying) {
			controls.classList.remove("show");
		}
	}, 3000);
}

// ============================================
// CONTROLES DE VOLUMEN
// ============================================

function cambiarVolumen(valor) {
	if (!videoElement) return;
	currentVolume = parseInt(valor);
	videoElement.volume = currentVolume / 100;
	updateVolumeIcon();
}

function toggleMute() {
	if (!videoElement) return;
	if (isMuted) {
		videoElement.muted = false;
		videoElement.volume = currentVolume / 100;
		isMuted = false;
	} else {
		videoElement.muted = true;
		isMuted = true;
	}
	updateVolumeIcon();
}

function updateVolumeIcon() {
	const icon = document.getElementById("volumeIcon");
	const slider = document.getElementById("volumeSlider");
	if (!icon || !videoElement) return;

	if (isMuted || videoElement.volume === 0) {
		icon.textContent = "🔇";
		if (slider) slider.value = isMuted ? currentVolume : 0;
	} else if (videoElement.volume < 0.5) {
		icon.textContent = "🔉";
		if (slider) slider.value = currentVolume;
	} else {
		icon.textContent = "🔊";
		if (slider) slider.value = currentVolume;
	}
}

// ============================================
// SISTEMA DE FILTROS
// ============================================

function aplicarFiltro(tipo) {
	const botones = document.querySelectorAll(".btn-filtro");
	botones.forEach((btn) => btn.classList.remove("active"));
	event.target.classList.add("active");

	resetearValores();

	switch (tipo) {
		case "blancoNegro":
			filtrosActuales.grayscale = 100;
			break;
		case "sepia":
			filtrosActuales.sepia = 100;
			filtrosActuales.contraste = 110;
			break;
		case "invertido":
			filtrosActuales.invert = 100;
			break;
		case "vintage":
			filtrosActuales.sepia = 50;
			filtrosActuales.contraste = 110;
			filtrosActuales.saturacion = 80;
			break;
		case "normal":
		default:
			break;
	}

	aplicarFiltrosAlVideo();
}

function actualizarFiltros() {
	filtrosActuales.brillo = document.getElementById("brillo").value;
	document.getElementById("valorBrillo").textContent =
		filtrosActuales.brillo + "%";

	const botones = document.querySelectorAll(".btn-filtro");
	botones.forEach((btn) => btn.classList.remove("active"));

	filtrosActuales.grayscale = 0;
	filtrosActuales.sepia = 0;
	filtrosActuales.invert = 0;

	aplicarFiltrosAlVideo();
}

function aplicarFiltrosAlVideo() {
	if (!videoElement) return;

	const filtroCSS = `
		brightness(${filtrosActuales.brillo}%)
		contrast(${filtrosActuales.contraste}%)
		saturate(${filtrosActuales.saturacion}%)
		blur(${filtrosActuales.blur}px)
		grayscale(${filtrosActuales.grayscale}%)
		sepia(${filtrosActuales.sepia}%)
		invert(${filtrosActuales.invert}%)
		hue-rotate(${filtrosActuales.hueRotate}deg)
	`;

	videoElement.style.filter = filtroCSS;
}

function resetearValores() {
	filtrosActuales = {
		brillo: 100,
		contraste: 100,
		saturacion: 100,
		blur: 0,
		grayscale: 0,
		sepia: 0,
		invert: 0,
		hueRotate: 0,
	};

	const slider = document.getElementById("brillo");
	if (slider) slider.value = 100;

	const valor = document.getElementById("valorBrillo");
	if (valor) valor.textContent = "100%";
}

function resetearFiltros() {
	resetearValores();
	aplicarFiltrosAlVideo();

	const botones = document.querySelectorAll(".btn-filtro");
	botones.forEach((btn) => btn.classList.remove("active"));
	if (botones[0]) botones[0].classList.add("active");
}

// ============================================
// EVENT LISTENERS
// ============================================

document.addEventListener("DOMContentLoaded", () => {
	const modal = document.getElementById("video-modal");

	if (modal) {
		modal.addEventListener("click", (e) => {
			if (e.target === modal) {
				cerrarVideoModal();
			}
		});
	}

	document.addEventListener("keydown", (e) => {
		if (e.key === "Escape" && modal?.classList.contains("visible")) {
			cerrarVideoModal();
		}
		if (e.key === " " && modal?.classList.contains("visible")) {
			e.preventDefault();
			togglePlayPause();
		}
		if (e.key === "m" && modal?.classList.contains("visible")) {
			e.preventDefault();
			toggleMute();
		}
	});

	const videoEl = document.getElementById("videoInteractivo");
	const controls = document.getElementById("videoControls");

	if (videoEl && controls) {
		videoEl.addEventListener("click", () => {
			mostrarControlesTemporalmente();
		});

		controls.addEventListener("mouseenter", () => {
			controls.classList.add("always-visible");
		});

		controls.addEventListener("mouseleave", () => {
			controls.classList.remove("always-visible");
			if (isPlaying) {
				setTimeout(() => {
					controls.classList.remove("show");
				}, 1000);
			}
		});
	}

	const volumeSlider = document.getElementById("volumeSlider");
	if (volumeSlider) {
		volumeSlider.value = 100;
	}
});

window.addEventListener("load", () => {
	console.log("✅ videoLogic.js cargado correctamente");
});
