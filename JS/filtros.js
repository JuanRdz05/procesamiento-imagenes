// Variables globales para los filtros
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

// Función para aplicar filtros predefinidos
function aplicarFiltro(tipo) {
	const video = document.getElementById("videoInteractivo");
	const botones = document.querySelectorAll(".btn-filtro");

	// Remover clase active de todos los botones
	botones.forEach((btn) => btn.classList.remove("active"));

	// Activar el botón clickeado
	event.target.classList.add("active");

	// Resetear valores
	resetearValores();

	switch (tipo) {
		case "normal":
			// Ya está reseteado
			break;

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
	}

	aplicarFiltrosAlVideo();
}

// Función para actualizar filtros desde los sliders
function actualizarFiltros() {
	// Obtener valor del slider de brillo (el único que existe ahora)
	filtrosActuales.brillo = document.getElementById("brillo").value;

	// Actualizar valor mostrado
	document.getElementById("valorBrillo").textContent =
		filtrosActuales.brillo + "%";

	// Desactivar filtros predefinidos cuando se usa el slider
	const botones = document.querySelectorAll(".btn-filtro");
	botones.forEach((btn) => btn.classList.remove("active"));

	// Resetear filtros especiales al usar slider
	filtrosActuales.grayscale = 0;
	filtrosActuales.sepia = 0;
	filtrosActuales.invert = 0;

	aplicarFiltrosAlVideo();
}

// Función para aplicar todos los filtros al video
function aplicarFiltrosAlVideo() {
	const video = document.getElementById("videoInteractivo");

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

	video.style.filter = filtroCSS;
}

// Función para resetear todos los valores
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

	// Actualizar slider de brillo
	document.getElementById("brillo").value = 100;

	// Actualizar valor mostrado
	document.getElementById("valorBrillo").textContent = "100%";
}

// Función para resetear filtros completamente
function resetearFiltros() {
	resetearValores();
	aplicarFiltrosAlVideo();

	// Activar botón "Normal"
	const botones = document.querySelectorAll(".btn-filtro");
	botones.forEach((btn) => btn.classList.remove("active"));
	botones[0].classList.add("active");
}
