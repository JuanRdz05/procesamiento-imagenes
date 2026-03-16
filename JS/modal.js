// Función para mostrar mensaje AR
function mostrarMensajeAR(event) {
	event.preventDefault();
	alert("Función AR próximamente disponible");
}

// Función para abrir modal de guía
function abrirModalGuia() {
	document.getElementById("modalGuia").classList.add("activo");
	document.body.style.overflow = "hidden"; // Evita scroll del body
}

// Función para cerrar modal de guía
function cerrarModalGuia(event) {
	// Si se hace clic en el evento (fondo oscuro) o se llama directamente
	if (!event || event.target.id === "modalGuia") {
		document.getElementById("modalGuia").classList.remove("activo");
		document.body.style.overflow = "auto"; // Restaura scroll del body
	}
}

// Cerrar modal con tecla ESC
document.addEventListener("keydown", function (event) {
	if (event.key === "Escape") {
		cerrarModalGuia();
	}
});
