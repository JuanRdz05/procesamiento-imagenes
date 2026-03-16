const datosPaises = {
	sudafrica: {
		titulo: "Sudáfrica",
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

function mostrarInfoYTrivia(paisKey) {
	const info = datosPaises[paisKey];
	if (!info) return;

	Swal.fire({
		title: `<strong>${info.titulo}</strong>`,
		html: `<p style="text-align: justify; font-size: 1.1rem;">${info.historia}</p>`,
		icon: "info",
		showCancelButton: true,
		confirmButtonText: "¡Hacer Trivia!",
		cancelButtonText: "Cerrar",
		confirmButtonColor: "#006847",
	}).then((result) => {
		if (result.isConfirmed) {
			lanzarTrivia(info.trivia);
		}
	});
}

async function lanzarTrivia(preguntas) {
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
			confirmButtonColor: "#006847",
		});

		// Verificación inmediata
		if (respuestaUsuario === preguntas[i].a) {
			aciertos++;
			await Swal.fire({
				title: "¡Correcto!",
				icon: "success",
				timer: 1500,
				showConfirmButton: false,
			});
		} else {
			await Swal.fire({
				title: "Incorrecto",
				text: `La respuesta correcta era: ${preguntas[i].a}`,
				icon: "error",
				timer: 2000,
				showConfirmButton: false,
			});
		}
	}

	// Resultado final
	Swal.fire({
		title:
			aciertos === preguntas.length ? "¡Eres un experto!" : "Trivia finalizada",
		text: `Has conseguido ${aciertos} de ${preguntas.length} puntos.`,
		icon: aciertos >= 2 ? "success" : "warning",
		confirmButtonText: "Genial",
		confirmButtonColor: "#006847",
	});
}

// Vinculación automática a los botones
document.querySelectorAll(".boton-informacion button").forEach((btn) => {
	btn.onclick = (e) => {
		const tarjeta = e.target.closest(".pais-tarjeta");
		const nombrePais = tarjeta
			.querySelector(".pais-nombre")
			.innerText.toLowerCase();

		const keys = {
			sudáfrica: "sudafrica",
			"corea del sur": "corea",
			colombia: "colombia",
			españa: "espana",
			japón: "japon",
			túnez: "tunez",
			uruguay: "uruguay",
			uzbekistán: "uzbekistan",
		};

		mostrarInfoYTrivia(keys[nombrePais]);
	};
});
