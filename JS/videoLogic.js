// ============================================
// VIDEO LOGIC UNIFICADO - PARA AR.HTML
// CON MINDAR.CSS
// ============================================

// Variables globales
let paisActual = "";
let videoElement = null;
let isPlaying = false;
let animationFrame = null;
let isMuted = false;
let currentVolume = 100;

// Estado de filtros
let estadoFiltros = {
    modo: 'normal',
    brillo: 100,
    contraste: 100,
    saturacion: 100,
    desenfoque: 0,
    pixelado: 0,
    ajusteR: 0,
    ajusteG: 0,
    ajusteB: 0
};

// Variables para Canvas
let canvasActivo = false;
let canvasElement = null;
let ctx = null;

// Mapeo de países
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

// ============================================
// PRECARGA
// ============================================
let preloadedSrc = "";
let preloadBuffer = null;

function precargarVideo(nombrePais) {
    const nombreArchivo = videoMapping[nombrePais] || nombrePais;
    const rutaVideo = `../VIDEO/${nombreArchivo}.mp4`;
    if (preloadedSrc === rutaVideo) return;
    preloadedSrc = rutaVideo;
    if (!preloadBuffer) {
        preloadBuffer = document.createElement("video");
        preloadBuffer.style.display = "none";
        preloadBuffer.muted = true;
        document.body.appendChild(preloadBuffer);
    }
    preloadBuffer.preload = "metadata";
    preloadBuffer.src = rutaVideo;
    preloadBuffer.load();
}

// ============================================
// INICIALIZACIÓN
// ============================================
function inicializarVideo(nombrePais) {
    paisActual = nombrePais;
    precargarVideo(nombrePais);
    
    // Mostrar botones container
    const botonesContainer = document.getElementById("botones-container");
    if (botonesContainer) botonesContainer.classList.add("visible");
    
    const btnVideo = document.getElementById("btn-video-pais");
    if (btnVideo) {
        btnVideo.onclick = (e) => {
            e.preventDefault();
            abrirVideoModal();
        };
    }
}

// ============================================
// ABRIR MODAL
// ============================================
function abrirVideoModal() {
    if (!paisActual) return;
    
    const modal = document.getElementById("video-modal");
    const loadingIndicator = document.getElementById("loadingIndicator");
    videoElement = document.getElementById("videoInteractivoAR");
    
    if (!videoElement) return;

    const nombreArchivo = videoMapping[paisActual] || paisActual;
    const rutaVideo = `../VIDEO/${nombreArchivo}.mp4`;

    // Limpiar estado anterior
    detenerCanvas();
    videoElement.pause();
    videoElement.removeAttribute("src");
    videoElement.load();
    videoElement.preload = "auto";
    videoElement.src = rutaVideo;

    let loadingTimeout = setTimeout(() => {
        if (loadingIndicator) loadingIndicator.classList.add("visible");
    }, 300);

    videoElement.oncanplay = () => {
        clearTimeout(loadingTimeout);
        if (loadingIndicator) loadingIndicator.classList.remove("visible");
        updateDuration();
    };

    videoElement.onerror = () => {
        clearTimeout(loadingTimeout);
        if (loadingIndicator) loadingIndicator.classList.remove("visible");
        console.error("Error cargando video");
    };

    modal.classList.add("visible");
    videoElement.load();

    videoElement.play().then(() => {
        clearTimeout(loadingTimeout);
        isPlaying = true;
        updatePlayButton();
    }).catch(() => {
        isPlaying = false;
        updatePlayButton();
    });

    startProgressUpdate();
    resetearFiltrosGeneral();
    setupProgressEvents();
}

function cerrarVideoModal() {
    const modal = document.getElementById("video-modal");
    detenerCanvas();
    if (videoElement) {
        videoElement.pause();
        videoElement.currentTime = 0;
        videoElement.removeAttribute("src");
        videoElement.load();
    }
    isPlaying = false;
    if (modal) modal.classList.remove("visible");
    if (animationFrame) {
        cancelAnimationFrame(animationFrame);
        animationFrame = null;
    }
}

// ============================================
// CONTROLES DE VIDEO
// ============================================
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
    const btn = document.getElementById("btnPlayPauseAR");
    if (btn) btn.innerHTML = isPlaying ? "⏸" : "▶";
}

function updateDuration() {
    if (!videoElement) return;
    const durationEl = document.getElementById("durationAR");
    if (durationEl && !isNaN(videoElement.duration)) {
        durationEl.textContent = formatTime(videoElement.duration);
    }
}

function updateCurrentTime() {
    if (!videoElement) return;
    const currentTimeEl = document.getElementById("currentTimeAR");
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
    const progressBar = document.getElementById("progressBarAR");
    const porcentaje = (videoElement.currentTime / videoElement.duration) * 100;
    if (progressBar && !isNaN(porcentaje)) {
        progressBar.style.width = porcentaje + "%";
    }
    updateCurrentTime();
}

function startProgressUpdate() {
    if (animationFrame) cancelAnimationFrame(animationFrame);
    const update = () => {
        updateProgress();
        animationFrame = requestAnimationFrame(update);
    };
    update();
}

function setupProgressEvents() {
    const progressContainer = document.getElementById("progressContainerAR");
    if (!progressContainer || !videoElement) return;
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
}

// ============================================
// CONTROLES DE VOLUMEN
// ============================================
function cambiarVolumenAR(valor) {
    if (!videoElement) return;
    currentVolume = parseInt(valor);
    videoElement.volume = currentVolume / 100;
    updateVolumeIconAR();
}

function toggleMuteAR() {
    if (!videoElement) return;
    if (isMuted) {
        videoElement.muted = false;
        videoElement.volume = currentVolume / 100;
        isMuted = false;
    } else {
        videoElement.muted = true;
        isMuted = true;
    }
    updateVolumeIconAR();
}

function updateVolumeIconAR() {
    const icon = document.getElementById("volumeIconAR");
    const slider = document.getElementById("volumeSliderAR");
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

function necesitaCanvasParaFiltros() {
    return estadoFiltros.pixelado > 0 || 
           estadoFiltros.modo === 'pixelado' ||
           estadoFiltros.modo === 'termica' ||
           estadoFiltros.ajusteR !== 0 ||
           estadoFiltros.ajusteG !== 0 ||
           estadoFiltros.ajusteB !== 0;
}

function detenerCanvas() {
    if (animationFrame) {
        cancelAnimationFrame(animationFrame);
        animationFrame = null;
    }
    canvasActivo = false;
    if (canvasElement) {
        canvasElement.style.display = 'none';
    }
    if (videoElement) {
        videoElement.style.display = 'block';
        videoElement.style.filter = 'none';
        videoElement.style.opacity = '1';
    }
}

function iniciarCanvas() {
    if (!videoElement || videoElement.paused || videoElement.ended) return;
    if (videoElement.videoWidth === 0 || videoElement.videoHeight === 0) return;
    
    detenerCanvas();
    
    if (!canvasElement) {
        canvasElement = document.getElementById('canvas-filtro-ar');
        if (!canvasElement) {
            canvasElement = document.createElement('canvas');
            canvasElement.id = 'canvas-filtro-ar';
            canvasElement.style.position = 'absolute';
            canvasElement.style.top = '0';
            canvasElement.style.left = '0';
            canvasElement.style.width = '100%';
            canvasElement.style.height = '100%';
            canvasElement.style.display = 'none';
            canvasElement.style.pointerEvents = 'none';
            const container = videoElement.parentNode;
            container.style.position = 'relative';
            container.appendChild(canvasElement);
        }
        ctx = canvasElement.getContext('2d');
    }
    
    const rect = videoElement.getBoundingClientRect();
    canvasElement.style.width = rect.width + 'px';
    canvasElement.style.height = rect.height + 'px';
    canvasElement.width = videoElement.videoWidth;
    canvasElement.height = videoElement.videoHeight;
    
    canvasElement.style.display = 'block';
    videoElement.style.display = 'block';
    videoElement.style.opacity = '0';
    videoElement.style.filter = 'none';
    canvasActivo = true;
    
    procesarFrameCanvas();
}

function procesarFrameCanvas() {
    if (!canvasActivo || !videoElement || videoElement.paused || videoElement.ended) {
        animationFrame = null;
        return;
    }
    
    if (videoElement.videoWidth > 0 && videoElement.videoHeight > 0) {
        try {
            if (canvasElement.width !== videoElement.videoWidth) {
                canvasElement.width = videoElement.videoWidth;
                canvasElement.height = videoElement.videoHeight;
            }
            
            ctx.drawImage(videoElement, 0, 0, canvasElement.width, canvasElement.height);
            
            // PIXELADO
            const pixelSize = estadoFiltros.pixelado > 0 ? estadoFiltros.pixelado : 
                              (estadoFiltros.modo === 'pixelado' ? 10 : 0);
            
            if (pixelSize > 0) {
                const w = canvasElement.width;
                const h = canvasElement.height;
                const smallW = Math.max(1, Math.floor(w / pixelSize));
                const smallH = Math.max(1, Math.floor(h / pixelSize));
                const tempCanvas = document.createElement('canvas');
                const tempCtx = tempCanvas.getContext('2d');
                tempCanvas.width = smallW;
                tempCanvas.height = smallH;
                tempCtx.drawImage(canvasElement, 0, 0, smallW, smallH);
                ctx.imageSmoothingEnabled = false;
                ctx.drawImage(tempCanvas, 0, 0, w, h);
            }
            
            // CÁMARA TÉRMICA
            if (estadoFiltros.modo === 'termica') {
                const imageData = ctx.getImageData(0, 0, canvasElement.width, canvasElement.height);
                const data = imageData.data;
                for (let i = 0; i < data.length; i += 4) {
                    const intensity = (data[i] + data[i+1] + data[i+2]) / 3;
                    if (intensity < 85) {
                        data[i] = 0; data[i+1] = 0; data[i+2] = 139;
                    } else if (intensity < 170) {
                        data[i] = 255; data[i+1] = 165; data[i+2] = 0;
                    } else {
                        data[i] = 255; data[i+1] = 0; data[i+2] = 0;
                    }
                }
                ctx.putImageData(imageData, 0, 0);
            }
            
            // AJUSTE RGB
            if (estadoFiltros.ajusteR !== 0 || estadoFiltros.ajusteG !== 0 || estadoFiltros.ajusteB !== 0) {
                const imageData = ctx.getImageData(0, 0, canvasElement.width, canvasElement.height);
                const data = imageData.data;
                for (let i = 0; i < data.length; i += 4) {
                    data[i] = Math.min(255, Math.max(0, data[i] + estadoFiltros.ajusteR));
                    data[i+1] = Math.min(255, Math.max(0, data[i+1] + estadoFiltros.ajusteG));
                    data[i+2] = Math.min(255, Math.max(0, data[i+2] + estadoFiltros.ajusteB));
                }
                ctx.putImageData(imageData, 0, 0);
            }
            
            // BRILLO, CONTRASTE, SATURACIÓN
            if (estadoFiltros.brillo !== 100 || estadoFiltros.contraste !== 100 || estadoFiltros.saturacion !== 100) {
                const imageData = ctx.getImageData(0, 0, canvasElement.width, canvasElement.height);
                const data = imageData.data;
                for (let i = 0; i < data.length; i += 4) {
                    let r = data[i], g = data[i+1], b = data[i+2];
                    r = r * (estadoFiltros.brillo / 100);
                    g = g * (estadoFiltros.brillo / 100);
                    b = b * (estadoFiltros.brillo / 100);
                    r = (r - 128) * (estadoFiltros.contraste / 100) + 128;
                    g = (g - 128) * (estadoFiltros.contraste / 100) + 128;
                    b = (b - 128) * (estadoFiltros.contraste / 100) + 128;
                    if (estadoFiltros.saturacion !== 100) {
                        const gray = 0.299 * r + 0.587 * g + 0.114 * b;
                        r = gray + (r - gray) * (estadoFiltros.saturacion / 100);
                        g = gray + (g - gray) * (estadoFiltros.saturacion / 100);
                        b = gray + (b - gray) * (estadoFiltros.saturacion / 100);
                    }
                    data[i] = Math.min(255, Math.max(0, r));
                    data[i+1] = Math.min(255, Math.max(0, g));
                    data[i+2] = Math.min(255, Math.max(0, b));
                }
                ctx.putImageData(imageData, 0, 0);
            }
            
            if (estadoFiltros.desenfoque > 0 && estadoFiltros.modo !== 'termica') {
                canvasElement.style.filter = `blur(${estadoFiltros.desenfoque}px)`;
            } else {
                canvasElement.style.filter = 'none';
            }
            
        } catch (error) {
            console.warn('Error en canvas:', error);
            detenerCanvas();
        }
    }
    
    if (canvasActivo) {
        animationFrame = requestAnimationFrame(procesarFrameCanvas);
    }
}

// ============================================
// FUNCIONES DE FILTRO
// ============================================

function aplicarFiltroAR(tipo) {
    detenerCanvas();
    
    estadoFiltros = {
        modo: tipo,
        brillo: 100,
        contraste: 100,
        saturacion: 100,
        desenfoque: 0,
        pixelado: 0,
        ajusteR: 0,
        ajusteG: 0,
        ajusteB: 0
    };
    
    switch(tipo) {
        case 'normal': break;
        case 'desenfoque': estadoFiltros.desenfoque = 5; break;
        case 'pixelado': estadoFiltros.pixelado = 10; break;
        case 'termica': estadoFiltros.modo = 'termica'; estadoFiltros.contraste = 150; estadoFiltros.saturacion = 200; break;
        case 'suavizado': estadoFiltros.desenfoque = 1; estadoFiltros.contraste = 95; estadoFiltros.brillo = 102; break;
        case 'pastel': estadoFiltros.saturacion = 130; estadoFiltros.contraste = 110; estadoFiltros.brillo = 105; break;
        case 'altaSaturacion': estadoFiltros.saturacion = 250; estadoFiltros.contraste = 120; break;
    }
    
    actualizarSlidersAR();
    
    if (necesitaCanvasParaFiltros() && videoElement && !videoElement.paused) {
        iniciarCanvas();
    } else {
        aplicarFiltrosCSS();
    }
    
    const botones = document.querySelectorAll(".filtros-botones .btn-filtro");
    botones.forEach(btn => btn.classList.remove("active"));
    if (event && event.target) event.target.classList.add("active");
}

function aplicarFiltrosCSS() {
    detenerCanvas();
    if (!videoElement) return;
    let filtroCSS = `brightness(${estadoFiltros.brillo}%) contrast(${estadoFiltros.contraste}%) saturate(${estadoFiltros.saturacion}%)`;
    if (estadoFiltros.desenfoque > 0) filtroCSS += ` blur(${estadoFiltros.desenfoque}px)`;
    videoElement.style.filter = filtroCSS;
    videoElement.style.opacity = '1';
    videoElement.style.display = 'block';
}

function actualizarFiltrosAR() {
    estadoFiltros.brillo = parseInt(document.getElementById('brilloAR')?.value || 100);
    estadoFiltros.contraste = parseInt(document.getElementById('contrasteAR')?.value || 100);
    estadoFiltros.saturacion = parseInt(document.getElementById('saturacionAR')?.value || 100);
    estadoFiltros.desenfoque = parseInt(document.getElementById('desenfoqueAR')?.value || 0);
    estadoFiltros.pixelado = parseInt(document.getElementById('pixeladoAR')?.value || 0);
    
    if (estadoFiltros.modo !== 'normal') {
        estadoFiltros.modo = 'custom';
        document.querySelectorAll(".filtros-botones .btn-filtro").forEach(btn => btn.classList.remove("active"));
    }
    
    actualizarValoresMostradosAR();
    
    if (necesitaCanvasParaFiltros() && videoElement && !videoElement.paused) {
        iniciarCanvas();
    } else {
        aplicarFiltrosCSS();
    }
}

function actualizarAjusteColorAR() {
    estadoFiltros.ajusteR = parseInt(document.getElementById('ajusteRAR')?.value || 0);
    estadoFiltros.ajusteG = parseInt(document.getElementById('ajusteGAR')?.value || 0);
    estadoFiltros.ajusteB = parseInt(document.getElementById('ajusteBAR')?.value || 0);
    
    actualizarValoresMostradosAR();
    
    if (estadoFiltros.modo !== 'normal') {
        estadoFiltros.modo = 'custom';
        document.querySelectorAll(".filtros-botones .btn-filtro").forEach(btn => btn.classList.remove("active"));
    }
    
    if (necesitaCanvasParaFiltros() && videoElement && !videoElement.paused) {
        iniciarCanvas();
    } else {
        aplicarFiltrosCSS();
    }
}

function actualizarSlidersAR() {
    const sliders = ['brilloAR', 'contrasteAR', 'saturacionAR', 'desenfoqueAR', 'pixeladoAR', 'ajusteRAR', 'ajusteGAR', 'ajusteBAR'];
    sliders.forEach(id => {
        const slider = document.getElementById(id);
        if (slider) {
            const key = id.replace('AR', '');
            slider.value = estadoFiltros[key] || 0;
        }
    });
    actualizarValoresMostradosAR();
}

function actualizarValoresMostradosAR() {
    const mappings = {
        'valorBrilloAR': estadoFiltros.brillo + '%',
        'valorContrasteAR': estadoFiltros.contraste + '%',
        'valorSaturacionAR': estadoFiltros.saturacion + '%',
        'valorDesenfoqueAR': estadoFiltros.desenfoque + 'px',
        'valorPixeladoAR': estadoFiltros.pixelado + 'px',
        'valorRAR': estadoFiltros.ajusteR,
        'valorGAR': estadoFiltros.ajusteG,
        'valorBAR': estadoFiltros.ajusteB
    };
    for (const [id, valor] of Object.entries(mappings)) {
        const el = document.getElementById(id);
        if (el) el.textContent = valor;
    }
}

function resetearFiltrosGeneral() {
    detenerCanvas();
    estadoFiltros = {
        modo: 'normal', brillo: 100, contraste: 100, saturacion: 100,
        desenfoque: 0, pixelado: 0, ajusteR: 0, ajusteG: 0, ajusteB: 0
    };
    actualizarSlidersAR();
    if (videoElement) {
        videoElement.style.filter = 'none';
        videoElement.style.opacity = '1';
        videoElement.style.display = 'block';
    }
    document.querySelectorAll(".filtros-botones .btn-filtro").forEach(btn => {
        btn.classList.remove("active");
        if (btn.textContent.includes('Normal')) btn.classList.add("active");
    });
}

// ============================================
// INICIALIZACIÓN
// ============================================
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("video-modal");
    if (modal) {
        modal.addEventListener("click", (e) => {
            if (e.target === modal) cerrarVideoModal();
        });
    }
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal?.classList.contains("visible")) cerrarVideoModal();
        if (e.key === " " && modal?.classList.contains("visible")) {
            e.preventDefault();
            togglePlayPause();
        }
    });
});