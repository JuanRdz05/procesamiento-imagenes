// ============================================
// DATOS DE PAÍSES - Información y Trivia
// ============================================
const datosPaises = {
	sudafrica: {
		titulo: "Sudáfrica",
		color: "#006847",
		imagen: "../MODELOS/bandera/textura_banderas/sudafrica2.png",
		modelo: "../MODELOS/bandera/bandera2.glb",
		historia:
			"Sudáfrica hizo historia al ser el primer país africano en organizar un Mundial en 2010. Su selección, los 'Bafana Bafana', es famosa por jugar al ritmo de las vuvuzelas. En ese torneo, Siphiwe Tshabalala anotó el primer gol, un momento icónico para todo el continente.",
		trivia: [
			{
				q: "¿Qué hito alcanzó Sudáfrica en 2010?",
				opciones: [
					"Ganar el Mundial",
					"Primer anfitrión africano",
					"Llegar a la final",
				],
				a: "Primer anfitrión africano",
			},
			{
				q: "¿Cómo se llama el instrumento ruidoso de su Mundial?",
				opciones: ["Vuvuzela", "Maraca", "Tamboril"],
				a: "Vuvuzela",
			},
			{
				q: "¿Cuál es el apodo de su selección?",
				opciones: ["Las Águilas", "Bafana Bafana", "Los Faraones"],
				a: "Bafana Bafana",
			},
			{
				q: "¿Quién anotó el icónico primer gol en 2010?",
				opciones: ["Pienaar", "Drogba", "Tshabalala"],
				a: "Tshabalala",
			},
		],
	},
	corea: {
		titulo: "Corea del Sur",
		color: "#0047a0",
		imagen: "../MODELOS/bandera/textura_banderas/corea2.png",
		modelo: "../MODELOS/bandera/bandera2.glb",
		historia:
			"Corea del Sur es la selección de Asia con más presencias mundialistas. Su mayor logro fue en 2002, cuando como co-anfitriones llegaron al cuarto lugar tras eliminar a Italia y España. Actualmente, su estrella es Son Heung-min, quien brilla en Europa.",
		trivia: [
			{
				q: "¿Cuál es el mejor puesto histórico de Corea del Sur?",
				opciones: ["Cuarto", "Octavo", "Sexto"],
				a: "Cuarto",
			},
			{
				q: "¿En qué año fueron co-anfitriones del Mundial?",
				opciones: ["1998", "2002", "2006"],
				a: "2002",
			},
			{
				q: "¿A qué potencias eliminaron en su gran campaña?",
				opciones: [
					"Brasil y Francia",
					"Italia y España",
					"Alemania e Inglaterra",
				],
				a: "Italia y España",
			},
			{
				q: "¿Quién es su estrella referente en la actualidad?",
				opciones: ["Park Ji-sung", "Son Heung-min", "Lee Kang-in"],
				a: "Son Heung-min",
			},
		],
	},
	colombia: {
		titulo: "Colombia",
		color: "#fcd116",
		textColor: "#333",
		imagen: "../MODELOS/bandera/textura_banderas/colombia2.png",
		modelo: "../MODELOS/bandera/bandera2.glb",
		historia:
			"La selección de Colombia, apodada 'Los Cafeteros', deslumbró en Brasil 2014 llegando a cuartos de final. En ese torneo, James Rodríguez ganó la Bota de Oro. Son recordados históricamente por el estilo de juego de los 90 y el 'Escorpión' de René Higuita.",
		trivia: [
			{
				q: "¿Qué premio ganó James Rodríguez en 2014?",
				opciones: ["Guante de Oro", "Bota de Oro", "Balón de Oro"],
				a: "Bota de Oro",
			},
			{
				q: "¿Hasta qué fase llegaron en Brasil 2014?",
				opciones: ["Octavos", "Cuartos", "Semifinal"],
				a: "Cuartos",
			},
			{
				q: "¿Qué jugada hizo famoso al portero René Higuita?",
				opciones: ["La Chilena", "El Escorpión", "La Palomita"],
				a: "El Escorpión",
			},
			{
				q: "¿Cómo apodan a la selección de Colombia?",
				opciones: ["Los Cafeteros", "La Tri", "Los Incas"],
				a: "Los Cafeteros",
			},
		],
	},
	espana: {
		titulo: "España",
		color: "#aa151b",
		imagen: "../MODELOS/bandera/textura_banderas/españa2.png",
		modelo: "../MODELOS/bandera/bandera2.glb",
		historia:
			"España vivió su época dorada entre 2008 y 2012, ganando dos Eurocopas y el Mundial 2010. El gol de Andrés Iniesta en la prórroga contra Holanda les dio su única estrella. Se les conoce como 'La Roja' por su característico uniforme.",
		trivia: [
			{
				q: "¿Quién marcó el gol de la final en 2010?",
				opciones: ["Casillas", "Xavi", "Iniesta"],
				a: "Iniesta",
			},
			{
				q: "¿Contra quién jugaron la final del Mundial 2010?",
				opciones: ["Alemania", "Holanda", "Francia"],
				a: "Holanda",
			},
			{
				q: "¿Cómo se conoce popularmente a la selección?",
				opciones: ["La Roja", "La Azul", "La Blanca"],
				a: "La Roja",
			},
			{
				q: "¿Cuántos Mundiales ha ganado España?",
				opciones: ["Ninguno", "Uno", "Dos"],
				a: "Uno",
			},
		],
	},
	japon: {
		titulo: "Japón",
		color: "#bc002d",
		imagen: "../MODELOS/bandera/textura_banderas/japon2.png",
		modelo: "../MODELOS/bandera/bandera2.glb",
		historia:
			"Los 'Samuráis Azules' son la potencia de Asia con 4 Copas Asiáticas. En Qatar 2022 sorprendieron al mundo venciendo a Alemania y España. Además de su fútbol, son admirados por su cultura de respeto y limpieza en los estadios.",
		trivia: [
			{
				q: "¿Cómo se apoda a la selección japonesa?",
				opciones: ["Samuráis Azules", "Ninjas", "Sol Naciente"],
				a: "Samuráis Azules",
			},
			{
				q: "¿A qué campeones del mundo vencieron en 2022?",
				opciones: [
					"Brasil y Argentina",
					"Alemania y España",
					"Francia e Italia",
				],
				a: "Alemania y España",
			},
			{
				q: "¿Cuántas Copas Asiáticas ha ganado Japón?",
				opciones: ["2", "4", "6"],
				a: "4",
			},
			{
				q: "¿Por qué otra razón son admirados en los estadios?",
				opciones: ["Cantar mucho", "Limpiar las gradas", "Llevar banderas"],
				a: "Limpiar las gradas",
			},
		],
	},
	tunez: {
		titulo: "Túnez",
		color: "#e70013",
		imagen: "../MODELOS/bandera/textura_banderas/tunez2.png",
		modelo: "../MODELOS/bandera/bandera2.glb",
		historia:
			"Túnez, apodado 'Las Águilas de Cartago', fue el primer equipo africano en ganar un partido en un Mundial (Argentina 1978 contra México). Son un equipo constante en representar al norte de África en el gran escenario.",
		trivia: [
			{
				q: "¿Cuál es el apodo de Túnez?",
				opciones: ["Los Leones", "Las Águilas de Cartago", "Los Halcones"],
				a: "Las Águilas de Cartago",
			},
			{
				q: "¿En qué Mundial ganaron su primer partido?",
				opciones: ["México 70", "Argentina 78", "España 82"],
				a: "Argentina 78",
			},
			{
				q: "¿A qué selección vencieron en su primera victoria?",
				opciones: ["México", "Italia", "Perú"],
				a: "México",
			},
			{
				q: "¿A qué región de África pertenecen?",
				opciones: ["Sur", "Oeste", "Norte"],
				a: "Norte",
			},
		],
	},
	uruguay: {
		titulo: "Uruguay",
		color: "#0081c9",
		imagen: "../MODELOS/bandera/textura_banderas/uruguay2.png",
		modelo: "../MODELOS/bandera/bandera2.glb",
		historia:
			"Uruguay es la cuna de los Mundiales, habiendo organizado y ganado el primero en 1930. En 1950 silenciaron al estadio Maracaná venciendo a Brasil en el famoso 'Maracanazo'. Su garra característica se conoce como 'Garra Charrúa'.",
		trivia: [
			{
				q: "¿En qué año organizó Uruguay el primer Mundial?",
				opciones: ["1920", "1930", "1950"],
				a: "1930",
			},
			{
				q: "¿Qué nombre recibió su victoria en Brasil 1950?",
				opciones: ["El Mineirazo", "El Maracanazo", "La Finalísima"],
				a: "El Maracanazo",
			},
			{
				q: "¿Cómo se llama el espíritu de lucha uruguayo?",
				opciones: ["Garra Charrúa", "Fuerza Celeste", "Poder Oriental"],
				a: "Garra Charrúa",
			},
			{
				q: "¿Cuántos Mundiales (estrellas FIFA) tiene Uruguay?",
				opciones: ["1", "2", "3"],
				a: "2",
			},
		],
	},
	uzbekistan: {
		titulo: "Uzbekistán",
		color: "#0099b5",
		imagen: "../MODELOS/bandera/textura_banderas/uzbekistan2.png",
		modelo: "../MODELOS/bandera/bandera2.glb",
		historia:
			"Uzbekistán es una potencia creciente en Asia Central. Su mayor éxito fue ganar la medalla de oro en los Juegos Asiáticos de 1994 tras su independencia. Aunque nunca han ido a un Mundial absoluto, siempre llegan a las fases finales de la clasificación.",
		trivia: [
			{
				q: "¿En qué evento ganaron la medalla de oro en 1994?",
				opciones: ["Mundial", "Juegos Asiáticos", "Copa Oro"],
				a: "Juegos Asiáticos",
			},
			{
				q: "¿En qué región de Asia se encuentra?",
				opciones: ["Asia Central", "Asia del Este", "Asia del Sur"],
				a: "Asia Central",
			},
			{
				q: "¿Han clasificado alguna vez a un Mundial absoluto?",
				opciones: ["Sí", "No", "Están clasificados ahora"],
				a: "No",
			},
			{
				q: "¿Qué tan cerca suelen estar del Mundial?",
				opciones: [
					"Nunca clasifican",
					"Llegan a fases finales",
					"No participan",
				],
				a: "Llegan a fases finales",
			},
		],
	},
};

// ============================================
// VARIABLES GLOBALES
// ============================================
let paisSeleccionado = null;
let modeloCargado = false;
let marcadorDetectado = false;

// ============================================
// FUNCIONES DE SELECCIÓN DE PAÍS
// ============================================
function seleccionarPais(id) {
	console.log("🖱️ Seleccionado:", id);
	paisSeleccionado = id;

	const datos = datosPaises[id];
	const menuOverlay = document.getElementById("menu-overlay");
	const hudTop = document.getElementById("hud-top");
	const hudPais = document.getElementById("hud-pais");

	// Actualizar HUD
	hudPais.textContent = datos.titulo;
	hudPais.style.color = datos.color;

	// Ocultar menú, mostrar HUD
	menuOverlay.classList.add("oculto");
	hudTop.classList.add("visible");

	// Mostrar botón de información si no existe
	crearBotonInfo();

	// Intentar cargar modelo 3D
	cargarModelo(datos);
	// Inicializar el botón de video para este país
	if (typeof inicializarVideo === "function") {
		inicializarVideo(id);
	}
}

// ============================================
// FUNCIONES DE CARGA DE MODELO 3D
// ============================================
function cargarModelo(datos) {
	const contenedor = document.getElementById("modelo-bandera");
	const planoRespaldo = document.getElementById("plano-respaldo");

	// Limpiar contenedor
	contenedor.innerHTML = "";

	// Crear entidad para el modelo GLB
	const modelo = document.createElement("a-entity");
	modelo.setAttribute("gltf-model", `url(${datos.modelo})`);
	modelo.setAttribute("position", "0 0 0");
	modelo.setAttribute("rotation", "0 0 0");
	modelo.setAttribute("scale", "1 1 1");

	// Evento cuando el modelo carga
	modelo.addEventListener("model-loaded", (e) => {
		console.log("✅ Modelo cargado");
		modeloCargado = true;

		// Aplicar textura al modelo con material opaco
		aplicarTextura(e.detail.model, datos.imagen);

		// Mostrar modelo solo si el marcador está detectado
		if (marcadorDetectado) {
			contenedor.setAttribute("visible", "true");
			planoRespaldo.setAttribute("visible", "false");
		}
	});

	// Evento de error
	modelo.addEventListener("model-error", (e) => {
		console.error("❌ Error modelo:", e);
		usarPlanoRespaldo(datos);
	});

	contenedor.appendChild(modelo);
}

function aplicarTextura(modelo3D, urlImagen) {
	console.log("🎨 Aplicando textura:", urlImagen);

	const loader = new THREE.TextureLoader();
	loader.setCrossOrigin("anonymous");

	loader.load(
		urlImagen,
		(textura) => {
			textura.flipY = false;

			let aplicada = false;
			modelo3D.traverse((nodo) => {
				if (nodo.isMesh && nodo.material) {
					// Crear nuevo material básico para evitar problemas de transparencia
					const nuevoMaterial = new THREE.MeshBasicMaterial({
						map: textura,
						transparent: false,
						opacity: 1.0,
						side: THREE.DoubleSide,
						depthWrite: true,
						depthTest: true,
					});

					nodo.material = nuevoMaterial;
					aplicada = true;
					console.log("✅ Textura aplicada a mesh (material opaco)");
				}
			});

			if (!aplicada) {
				console.warn("⚠️ No se encontraron meshes");
			}
		},
		undefined,
		(err) => {
			console.error("❌ Error cargando textura:", err);
		},
	);
}

function usarPlanoRespaldo(datos) {
	console.log("📄 Usando plano de respaldo");

	const contenedor = document.getElementById("modelo-bandera");
	const planoRespaldo = document.getElementById("plano-respaldo");

	// Ocultar modelo
	contenedor.setAttribute("visible", "false");

	// Configurar plano
	planoRespaldo.setAttribute("src", datos.imagen);
	planoRespaldo.setAttribute("color", datos.color);

	// Mostrar plano solo si el marcador está detectado
	if (marcadorDetectado) {
		planoRespaldo.setAttribute("visible", "true");
	}
}

// ============================================
// BOTÓN DE INFORMACIÓN Y TRIVIA
// ============================================
function crearBotonInfo() {
	const boton = document.getElementById("btn-info-pais");
	if (!boton) return;

	boton.style.display = "block";
	// Forzar reflow para activar la animación
	setTimeout(() => {
		boton.classList.add("visible");
	}, 10);

	boton.onclick = mostrarInfoYTrivia;
}

function mostrarInfoYTrivia() {
	if (!paisSeleccionado) return;

	const info = datosPaises[paisSeleccionado];
	if (!info) return;

	Swal.fire({
		title: `<strong>${info.titulo}</strong>`,
		html: `<p style="text-align: justify; font-size: 1.1rem; line-height: 1.6;">${info.historia}</p>`,
		icon: "info",
		showCancelButton: true,
		confirmButtonText: "¡Hacer Trivia! 🎯",
		cancelButtonText: "Cerrar",
		confirmButtonColor: info.color,
		cancelButtonColor: "#6c757d",
		customClass: {
			popup: "popup-pais",
			title: "titulo-pais",
		},
	}).then((result) => {
		if (result.isConfirmed) {
			lanzarTrivia(info.trivia, info.color);
		}
	});
}

async function lanzarTrivia(preguntas, colorPais) {
	let aciertos = 0;

	for (let i = 0; i < preguntas.length; i++) {
		const opcionesObj = {};
		preguntas[i].opciones.forEach((opt) => (opcionesObj[opt] = opt));

		const { value: respuestaUsuario } = await Swal.fire({
			title: `Pregunta ${i + 1} de ${preguntas.length}`,
			text: preguntas[i].q,
			input: "radio",
			inputOptions: opcionesObj,
			inputValidator: (value) => !value && "¡Debes elegir una opción!",
			confirmButtonText: "Responder",
			confirmButtonColor: colorPais,
			allowOutsideClick: false,
			customClass: {
				popup: "popup-trivia",
			},
		});

		// Verificación inmediata
		if (respuestaUsuario === preguntas[i].a) {
			aciertos++;
			await Swal.fire({
				title: "¡Correcto! ✅",
				icon: "success",
				timer: 1200,
				showConfirmButton: false,
				customClass: {
					popup: "popup-feedback",
				},
			});
		} else {
			await Swal.fire({
				title: "Incorrecto ❌",
				text: `La respuesta correcta era: ${preguntas[i].a}`,
				icon: "error",
				timer: 2000,
				showConfirmButton: false,
				customClass: {
					popup: "popup-feedback",
				},
			});
		}
	}

	// Resultado final
	const mensajeFinal =
		aciertos === preguntas.length
			? "¡Eres un experto! 🏆"
			: aciertos >= 2
				? "¡Buen trabajo! 👍"
				: "¡Sigue practicando! 📚";

	Swal.fire({
		title: mensajeFinal,
		text: `Has conseguido ${aciertos} de ${preguntas.length} puntos.`,
		icon: aciertos >= 2 ? "success" : "warning",
		confirmButtonText: "Genial",
		confirmButtonColor: colorPais,
		customClass: {
			popup: "popup-final",
		},
	});
}

// ============================================
// EVENTOS DEL MARCADOR AR
// ============================================
window.addEventListener("load", () => {
	console.log("🚀 AR iniciado");

	const marker = document.getElementById("marker-hiro");
	const dotEstado = document.getElementById("dot-estado");
	const textoEstado = document.getElementById("texto-estado");
	const contenedor = document.getElementById("modelo-bandera");
	const planoRespaldo = document.getElementById("plano-respaldo");

	marker.addEventListener("markerFound", () => {
		console.log("🎯 Marcador detectado");
		marcadorDetectado = true;
		dotEstado.style.backgroundColor = "#2ecc71";
		textoEstado.textContent = "¡Detectado!";

		if (paisSeleccionado) {
			if (modeloCargado) {
				contenedor.setAttribute("visible", "true");
				planoRespaldo.setAttribute("visible", "false");
			} else {
				contenedor.setAttribute("visible", "false");
				planoRespaldo.setAttribute("visible", "true");
			}
		}
	});

	marker.addEventListener("markerLost", () => {
		console.log("❌ Marcador perdido");
		marcadorDetectado = false;
		dotEstado.style.backgroundColor = "#e74c3c";
		textoEstado.textContent = "Apunta al marcador";

		contenedor.setAttribute("visible", "false");
		planoRespaldo.setAttribute("visible", "false");
	});
});

// ============================================
// SISTEMA DE PARTÍCULAS - EXPLOSIÓN
// ============================================

let sistemaParticulas = null;
let particulasActivas = false;

// Configuración de la explosión
const CONFIG_PARTICULAS = {
	cantidad: 150, // Número de partículas
	velocidad: 8, // Velocidad de expansión
	gravedad: 2, // Gravedad que afecta las partículas
	duracion: 2000, // Duración en ms
	tamano: 0.08, // Tamaño de cada partícula
	colores: [
		// Colores de las partículas (dorado, naranja, rojo, amarillo)
		0xffd700, 0xff6b35, 0xf7931e, 0xffff00, 0xff4500, 0xffa500, 0xff6347,
	],
};

// Inicializar botón de partículas
function inicializarBotonParticulas() {
	const btnParticulas = document.getElementById("btn-particulas");
	if (!btnParticulas) return;

	btnParticulas.addEventListener("click", crearExplosion);
	console.log("🎆 Botón de partículas inicializado");
}

// Habilitar/deshabilitar botón según estado del modelo
function actualizarEstadoBotonParticulas(activo) {
	const btnParticulas = document.getElementById("btn-particulas");
	if (!btnParticulas) return;

	btnParticulas.disabled = !activo;

	if (activo) {
		btnParticulas.style.opacity = "1";
		btnParticulas.style.pointerEvents = "all";
	} else {
		btnParticulas.style.opacity = "0.5";
		btnParticulas.style.pointerEvents = "none";
	}
}

// Crear explosión de partículas
function crearExplosion() {
	if (!marcadorDetectado || !paisSeleccionado) {
		console.warn(
			"⚠️ No se puede crear explosión: marcador no detectado o país no seleccionado",
		);
		return;
	}

	if (particulasActivas) {
		console.log("⏳ Esperando a que termine la explosión anterior...");
		return;
	}

	console.log("💥 Creando explosión de partículas...");
	particulasActivas = true;

	// Obtener la escena de Three.js desde A-Frame
	const escena = document.querySelector("a-scene").object3D;
	const marker = document.getElementById("marker-hiro").object3D;

	// === OBTENER LA BANDERA PARA ANIMARLA ===
	const contenedorBandera = document.getElementById("modelo-bandera");
	let banderaObject3D = null;
	let rotacionInicialBandera = 0;

	if (contenedorBandera && contenedorBandera.object3D) {
		banderaObject3D = contenedorBandera.object3D;
		// Guardar la rotación inicial (eje Y)
		rotacionInicialBandera = banderaObject3D.rotation.y;
		console.log("🚩 Bandera lista para animar");
	}

	// Crear grupo de partículas
	sistemaParticulas = new THREE.Group();
	marker.add(sistemaParticulas);

	// Posición de origen de la explosión (centro del marcador, ligeramente arriba)
	const origen = new THREE.Vector3(0, 0.5, 0);

	// Crear geometría base (cubo pequeño para cada partícula)
	const geometria = new THREE.BoxGeometry(
		CONFIG_PARTICULAS.tamano,
		CONFIG_PARTICULAS.tamano,
		CONFIG_PARTICULAS.tamano,
	);

	// Array para almacenar datos de cada partícula
	const particulas = [];

	// Crear partículas
	for (let i = 0; i < CONFIG_PARTICULAS.cantidad; i++) {
		// Material con color aleatorio de la paleta
		const color =
			CONFIG_PARTICULAS.colores[
				Math.floor(Math.random() * CONFIG_PARTICULAS.colores.length)
			];
		const material = new THREE.MeshBasicMaterial({
			color: color,
			transparent: true,
			opacity: 1,
		});

		const mesh = new THREE.Mesh(geometria, material);

		// Posición inicial
		mesh.position.copy(origen);

		// Dirección aleatoria en esfera
		const theta = Math.random() * Math.PI * 2; // Ángulo horizontal
		const phi = Math.acos(Math.random() * 2 - 1); // Ángulo vertical

		// Velocidad aleatoria con variación
		const velocidadBase =
			CONFIG_PARTICULAS.velocidad * (0.5 + Math.random() * 0.8);

		// Vector de velocidad
		const velocidad = new THREE.Vector3(
			Math.sin(phi) * Math.cos(theta) * velocidadBase,
			Math.sin(phi) * Math.sin(theta) * velocidadBase + 2, // Sesgo hacia arriba
			Math.cos(phi) * velocidadBase,
		);

		// Rotación aleatoria
		mesh.rotation.set(
			Math.random() * Math.PI,
			Math.random() * Math.PI,
			Math.random() * Math.PI,
		);

		// Velocidad de rotación
		const rotacionVel = new THREE.Vector3(
			(Math.random() - 0.5) * 10,
			(Math.random() - 0.5) * 10,
			(Math.random() - 0.5) * 10,
		);

		sistemaParticulas.add(mesh);

		particulas.push({
			mesh: mesh,
			velocidad: velocidad,
			rotacionVel: rotacionVel,
			vida: 1.0, // Vida de 1.0 a 0.0
			decaimiento: 1 / (CONFIG_PARTICULAS.duracion / 16), // Decaimiento por frame (aprox 60fps)
		});
	}

	// === CONFIGURACIÓN DE DURACIÓN ===
	const DURACION_PARTICULAS = CONFIG_PARTICULAS.duracion; // 2000ms
	const DURACION_BANDERA = 1500; // ← Duración del giro de la bandera (1.5 segundos)
	const DURACION_TOTAL = Math.max(DURACION_PARTICULAS, DURACION_BANDERA); // La más larga de las dos

	// Animación de la explosión
	const tiempoInicio = Date.now();
	let particulasTerminadas = false;
	let banderaTerminada = false;

	function animar() {
		const ahora = Date.now();
		const transcurrido = ahora - tiempoInicio;

		// === ACTUALIZAR PARTÍCULAS ===
		if (!particulasTerminadas) {
			let particulasVivas = false;

			particulas.forEach((p) => {
				if (p.vida > 0) {
					particulasVivas = true;

					// Actualizar posición
					p.mesh.position.add(p.velocidad.clone().multiplyScalar(0.016));

					// Aplicar gravedad
					p.velocidad.y -= CONFIG_PARTICULAS.gravedad * 0.016;

					// Actualizar rotación de partículas
					p.mesh.rotation.x += p.rotacionVel.x * 0.016;
					p.mesh.rotation.y += p.rotacionVel.y * 0.016;
					p.mesh.rotation.z += p.rotacionVel.z * 0.016;

					// Actualizar vida y opacidad
					p.vida -= p.decaimiento;
					p.mesh.material.opacity = Math.max(0, p.vida);

					// Escalar hacia el final
					const escala = Math.max(0.1, p.vida);
					p.mesh.scale.setScalar(escala);
				} else {
					p.mesh.visible = false;
				}
			});

			// Verificar si todas las partículas terminaron
			if (!particulasVivas || transcurrido >= DURACION_PARTICULAS) {
				particulasTerminadas = true;
				// Ocultar partículas pero NO limpiar todavía
				if (sistemaParticulas) {
					sistemaParticulas.visible = false;
				}
			}
		}

		// === ACTUALIZAR BANDERA ===
		if (!banderaTerminada && banderaObject3D) {
			const progresoBandera = Math.min(transcurrido / DURACION_BANDERA, 1);

			// Interpolación suave de 0 a 360 grados (2π radianes)
			const rotacionActual =
				rotacionInicialBandera + progresoBandera * Math.PI * 2;
			banderaObject3D.rotation.y = rotacionActual;

			// Verificar si la bandera completó su giro
			if (progresoBandera >= 1) {
				banderaTerminada = true;
				console.log("🚩 Bandera completó los 360°");
			}
		}

		// === VERIFICAR SI TODO TERMINÓ ===
		if (!particulasTerminadas || !banderaTerminada) {
			requestAnimationFrame(animar);
		} else {
			// === RESTAURAR ROTACIÓN DE LA BANDERA ===
			if (banderaObject3D) {
				banderaObject3D.rotation.y = rotacionInicialBandera;
				console.log("🚩 Rotación de bandera restaurada");
			}
			// Limpiar partículas
			limpiarParticulas();
			particulasActivas = false;
		}
	}

	animar();

	// Efecto de sonido opcional (vibración en móviles)
	if (navigator.vibrate) {
		navigator.vibrate(50);
	}
}

// Limpiar sistema de partículas
function limpiarParticulas() {
	if (sistemaParticulas) {
		sistemaParticulas.traverse((obj) => {
			if (obj.isMesh) {
				obj.geometry.dispose();
				obj.material.dispose();
			}
		});

		const marker = document.getElementById("marker-hiro").object3D;
		if (marker && sistemaParticulas.parent === marker) {
			marker.remove(sistemaParticulas);
		}

		sistemaParticulas = null;
	}

	particulasActivas = false;
	console.log("✨ Explosión terminada y limpiada");
}

// ============================================
// MODIFICACIONES A FUNCIONES EXISTENTES
// ============================================

// Sobrescribir función de carga de modelo para habilitar botón
const cargarModeloOriginal = cargarModelo;
cargarModelo = function (datos) {
	cargarModeloOriginal(datos);

	// El botón se habilitará cuando el modelo termine de cargar
	// y cuando el marcador esté detectado
	actualizarEstadoBotonParticulas(false);
};

// Sobrescribir evento de modelo cargado
const aplicarTexturaOriginal = aplicarTextura;
aplicarTextura = function (modelo3D, urlImagen) {
	aplicarTexturaOriginal(modelo3D, urlImagen);

	// Habilitar botón si el marcador está detectado
	if (marcadorDetectado) {
		actualizarEstadoBotonParticulas(true);
	}
};

// Sobrescribir eventos del marcador para controlar el botón
window.addEventListener("load", () => {
	// Inicializar botón de partículas
	inicializarBotonParticulas();

	const marker = document.getElementById("marker-hiro");

	// Sobrescribir eventos existentes
	marker.addEventListener("markerFound", () => {
		// Habilitar botón solo si el modelo está cargado
		if (modeloCargado && paisSeleccionado) {
			actualizarEstadoBotonParticulas(true);
		}
	});

	marker.addEventListener("markerLost", () => {
		actualizarEstadoBotonParticulas(false);
	});
});
