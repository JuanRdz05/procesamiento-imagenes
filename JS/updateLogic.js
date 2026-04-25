const fs = require('fs');
const file = 'd:/FCFM/OCTAVO SEMESTRE/Procesamiento de Imagenes/REPO/procesamientoImagenes/Proyecto/JS/arLogic.js';
let code = fs.readFileSync(file, 'utf8');

// 1. Update seleccionarPais
const startSel = code.indexOf('function seleccionarPais(id) {');
const endSel = code.indexOf('}', code.indexOf('if (typeof inicializarVideo === "function") {')) + 2;

const newSel = `function seleccionarPais(id) {
	console.log("🖱️ Seleccionado automáticamente:", id);
	paisSeleccionado = id;

	const datos = datosPaises[id];
	const hudTop = document.getElementById("hud-top");
	const hudPais = document.getElementById("hud-pais");

	// Actualizar HUD
	if (hudPais) {
		hudPais.textContent = datos.titulo;
		hudPais.style.color = datos.color;
	}

	// Mostrar HUD
	if (hudTop) hudTop.classList.add("visible");

	// Mostrar botón de información si no existe
	crearBotonInfo();

	// Intentar cargar modelo 3D
	cargarModelo(datos);
	
	// Inicializar el botón de video para este país
	if (typeof inicializarVideo === "function") {
		inicializarVideo(id);
	}
}
`;
code = code.slice(0, startSel) + newSel + code.slice(endSel);

// 2. Update marker events at line 1067
const startEvt1 = code.indexOf('window.addEventListener("load", () => {');
const endEvt1 = code.indexOf('// SISTEMA DE PARTÍCULAS');
const newEvt1 = `// ============================================
// EVENTOS DEL MARCADOR AR
// ============================================
window.addEventListener("load", () => {
	console.log("🚀 AR iniciado");

	const marcadores = document.querySelectorAll(".pais-marker");
	const dotEstado = document.getElementById("dot-estado");
	const textoEstado = document.getElementById("texto-estado");
	const modeloContainer = document.getElementById("modelo-container");
	const modeloBandera = document.getElementById("modelo-bandera");
	const planoRespaldo = document.getElementById("plano-respaldo");

	marcadores.forEach(marker => {
		marker.addEventListener("markerFound", (e) => {
			const paisId = marker.getAttribute("data-pais");
			console.log("🎯 Marcador detectado:", paisId);
			marcadorDetectado = true;
			dotEstado.style.backgroundColor = "#2ecc71";
			textoEstado.textContent = "¡Detectado!";

			// Reubicar el modelo dentro del marcador detectado
			marker.appendChild(modeloContainer);

			// Seleccionar automáticamente el país
			seleccionarPais(paisId);

			if (modeloCargado) {
				modeloContainer.setAttribute("visible", "true");
				modeloBandera.setAttribute("visible", "true");
				planoRespaldo.setAttribute("visible", "false");
				
				// Habilitar partículas si la función existe globalmente
				if(typeof actualizarEstadoBotonParticulas === 'function') {
					actualizarEstadoBotonParticulas(true);
				}
			} else {
				modeloContainer.setAttribute("visible", "true");
				modeloBandera.setAttribute("visible", "false");
				planoRespaldo.setAttribute("visible", "true");
			}
		});

		marker.addEventListener("markerLost", () => {
			console.log("❌ Marcador perdido");
			marcadorDetectado = false;
			dotEstado.style.backgroundColor = "#e74c3c";
			textoEstado.textContent = "Apunta a una bandera";

			modeloContainer.setAttribute("visible", "false");
			
			if(typeof actualizarEstadoBotonParticulas === 'function') {
				actualizarEstadoBotonParticulas(false);
			}
		});
	});
});

`;
code = code.slice(0, startEvt1) + newEvt1 + code.slice(endEvt1);

// 3. Remove the second event listener at the end
const startEvt2 = code.indexOf('// Sobrescribir eventos del marcador para controlar el botón');
if (startEvt2 > -1) {
    const newEvt2 = `// Inicializar botón de partículas al cargar
window.addEventListener("load", () => {
	if(typeof inicializarBotonParticulas === 'function') {
		inicializarBotonParticulas();
	}
});
`;
    code = code.slice(0, startEvt2) + newEvt2;
}

fs.writeFileSync(file, code, 'utf8');
console.log("arLogic updated");
