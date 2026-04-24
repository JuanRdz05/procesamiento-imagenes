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
			{
				q: "¿Qué país se coronó campeón en el Mundial de Sudáfrica 2010?",
				opciones: ["Holanda", "Alemania", "España"],
				a: "España",
			},
			{
				q: "¿Cómo se llamaba la mascota oficial del Mundial 2010?",
				opciones: ["Fuleco", "Zakumi", "Pique"],
				a: "Zakumi",
			},
			{
				q: "¿En qué ciudad se jugó la final del Mundial de Sudáfrica 2010?",
				opciones: ["Ciudad del Cabo", "Johannesburgo", "Durban"],
				a: "Johannesburgo",
			},
			{
				q: "¿Quién fue el entrenador de Sudáfrica en el Mundial 2010?",
				opciones: ["Carlos Alberto Parreira", "Joel Santana", "Gordon Igesund"],
				a: "Carlos Alberto Parreira",
			},
			{
				q: "¿Qué animal es un símbolo nacional vinculado al deporte sudafricano?",
				opciones: ["Leopardo", "Springbok (Gacela)", "León"],
				a: "Springbok (Gacela)",
			},
			{
				q: "¿Cuál fue el himno oficial del Mundial 2010 interpretado por Shakira?",
				opciones: ["Waka Waka", "La Copa de la Vida", "We Are One"],
				a: "Waka Waka",
			},
		],
	},
	corea: {
		titulo: "Corea del Sur",
		color: "#0047a0",
		imagen: "../MODELOS/bandera/textura_banderas/coreadelsur2.png",
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
			{
				q: "¿Con qué país organizó conjuntamente Corea del Sur el Mundial 2002?",
				opciones: ["China", "Japón", "Australia"],
				a: "Japón",
			},
			{
				q: "¿A qué confederación de fútbol pertenece Corea del Sur?",
				opciones: ["UEFA", "CONCACAF", "AFC (Asia)"],
				a: "AFC (Asia)",
			},
			{
				q: "¿Qué animal es el símbolo de la Asociación de Fútbol de Corea?",
				opciones: ["Tigre", "Dragón", "Oso"],
				a: "Tigre",
			},
			{
				q: "¿Qué club europeo fichó a Son Heung-min en 2015?",
				opciones: ["Bayern Munich", "Tottenham Hotspur", "Manchester United"],
				a: "Tottenham Hotspur",
			},
			{
				q: "¿Cuál es el clásico rival asiático de Corea del Sur en el fútbol?",
				opciones: ["Japón", "China", "Irán"],
				a: "Japón",
			},
			{
				q: "¿Cuántas veces seguidas ha clasificado al Mundial (1986-2022)?",
				opciones: ["10 veces", "5 veces", "7 veces"],
				a: "10 veces",
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
			{
				q: "¿Quién era el director técnico de Colombia en el Mundial 2014?",
				opciones: ["José Pékerman", "Carlos Valderrama", "Reinaldo Rueda"],
				a: "José Pékerman",
			},
			{
				q: "¿Cuál es el color principal de su camiseta titular?",
				opciones: ["Rojo", "Azul", "Amarillo"],
				a: "Amarillo",
			},
			{
				q: "¿En qué año se fundó la Federación Colombiana de Fútbol?",
				opciones: ["1910", "1924", "1950"],
				a: "1924",
			},
			{
				q: "¿Cuál fue el primer Mundial al que clasificó Colombia?",
				opciones: ["Chile 1962", "Suiza 1954", "México 1970"],
				a: "Chile 1962",
			},
			{
				q: "¿Qué jugador colombiano anotó un gol olímpico en Chile 62?",
				opciones: ["Carlos Valderrama", "Marcos Coll", "Faustino Asprilla"],
				a: "Marcos Coll",
			},
			{
				q: "¿Qué título internacional de selecciones mayores ganó Colombia en 2001?",
				opciones: ["Copa Oro", "Copa América", "Copa Confederaciones"],
				a: "Copa América",
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
			{
				q: "¿En qué año ganaron la primera Eurocopa de su época dorada?",
				opciones: ["2004", "2008", "2012"],
				a: "2008",
			},
			{
				q: "¿Quién fue el portero y capitán en el Mundial 2010?",
				opciones: ["Iker Casillas", "David de Gea", "Pepe Reina"],
				a: "Iker Casillas",
			},
			{
				q: "¿En qué año se fundó la Real Federación Española de Fútbol?",
				opciones: ["1909", "1920", "1930"],
				a: "1909",
			},
			{
				q: "¿Quién es el máximo goleador histórico de la selección española?",
				opciones: ["Fernando Torres", "David Villa", "Raúl González"],
				a: "David Villa",
			},
			{
				q: "¿En qué Juegos Olímpicos ganó España la medalla de oro en fútbol?",
				opciones: ["Barcelona 1992", "Sídney 2000", "Tokio 2020"],
				a: "Barcelona 1992",
			},
			{
				q: "¿Qué entrenador lideró a España a ganar el Mundial 2010?",
				opciones: ["Luis Aragonés", "Vicente del Bosque", "Luis Enrique"],
				a: "Vicente del Bosque",
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
			{
				q: "¿De qué color es tradicionalmente la camiseta local de Japón?",
				opciones: ["Rojo", "Blanco", "Azul"],
				a: "Azul",
			},
			{
				q: "¿Qué famosa serie animada de fútbol es originaria de Japón?",
				opciones: ["Supercampeones", "Inazuma Eleven", "Ambas son correctas"],
				a: "Ambas son correctas",
			},
			{
				q: "¿Cuál es el nombre de la liga profesional de fútbol de Japón?",
				opciones: ["J-League", "K-League", "Nippon League"],
				a: "J-League",
			},
			{
				q: "¿En qué año clasificó Japón a su primer Mundial?",
				opciones: ["1994", "1998", "2002"],
				a: "1998",
			},
			{
				q: "¿Qué animal místico aparece en el escudo de la selección japonesa?",
				opciones: ["Dragón", "Yatagarasu (Cuervo de 3 patas)", "Tigre blanco"],
				a: "Yatagarasu (Cuervo de 3 patas)",
			},
			{
				q: "¿Qué club italiano fichó a Hidetoshi Nakata, histórico jugador japonés?",
				opciones: ["Roma", "Juventus", "AC Milan"],
				a: "Roma",
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
			{
				q: "¿Qué colores predominan en su bandera y uniforme?",
				opciones: ["Verde y Blanco", "Rojo y Blanco", "Negro y Rojo"],
				a: "Rojo y Blanco",
			},
			{
				q: "¿A qué confederación pertenece la selección de Túnez?",
				opciones: ["CAF (África)", "UEFA (Europa)", "AFC (Asia)"],
				a: "CAF (África)",
			},
			{
				q: "¿En qué año ganó Túnez su única Copa Africana de Naciones?",
				opciones: ["2004", "1996", "2010"],
				a: "2004",
			},
			{
				q: "¿Cuál es el principal estadio donde juega la selección de Túnez?",
				opciones: ["Estadio de Radès", "Estadio del Cairo", "Estadio de Cartago"],
				a: "Estadio de Radès",
			},
			{
				q: "¿Qué jugador tunecino nacionalizado destacó en la Copa Africana 2004?",
				opciones: ["Wahbi Khazri", "Francileudo Santos", "Radhi Jaïdi"],
				a: "Francileudo Santos",
			},
			{
				q: "¿En qué Mundial Túnez logró su primera victoria en este siglo (2018)?",
				opciones: ["Rusia 2018", "Qatar 2022", "Brasil 2014"],
				a: "Rusia 2018",
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
			{
				q: "¿Contra qué selección jugó Uruguay la final del Mundial 1930?",
				opciones: ["Brasil", "Argentina", "Italia"],
				a: "Argentina",
			},
			{
				q: "¿Qué color le da su apodo más famoso a la selección uruguaya?",
				opciones: ["Celeste", "Blanco", "Negro"],
				a: "Celeste",
			},
			{
				q: "¿Cuántas Copas América ha ganado Uruguay en su historia?",
				opciones: ["12", "15", "14"],
				a: "15",
			},
			{
				q: "¿Quién es el máximo goleador histórico de la selección uruguaya?",
				opciones: ["Edinson Cavani", "Diego Forlán", "Luis Suárez"],
				a: "Luis Suárez",
			},
			{
				q: "¿En qué año ganó Uruguay su segunda medalla de oro olímpica?",
				opciones: ["1924", "1928", "1932"],
				a: "1928",
			},
			{
				q: "¿Qué jugador uruguayo picó el penal contra Ghana en 2010?",
				opciones: ["Diego Forlán", "Sebastián Abreu", "Luis Suárez"],
				a: "Sebastián Abreu",
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
			{
				q: "¿De qué país formaba parte Uzbekistán antes de su independencia?",
				opciones: ["Unión Soviética", "Yugoslavia", "Imperio Otomano"],
				a: "Unión Soviética",
			},
			{
				q: "¿A qué confederación pertenece para buscar su boleto al Mundial?",
				opciones: ["UEFA", "AFC (Asia)", "OFC (Oceanía)"],
				a: "AFC (Asia)",
			},
			{
				q: "¿En qué año se afilió la Federación de Uzbekistán a la FIFA?",
				opciones: ["1991", "1994", "2000"],
				a: "1994",
			},
			{
				q: "¿Quién es considerado uno de sus mejores jugadores históricos (ex Dinamo de Kiev)?",
				opciones: ["Odil Ahmedov", "Maksim Shatskikh", "Eldor Shomurodov"],
				a: "Maksim Shatskikh",
			},
			{
				q: "¿Cuál es el principal estadio de la selección de Uzbekistán?",
				opciones: ["Estadio Bunyodkor", "Estadio Central", "Estadio Olímpico"],
				a: "Estadio Bunyodkor",
			},
			{
				q: "¿Qué torneo internacional juvenil organizó Uzbekistán en 2023?",
				opciones: ["Mundial Sub-20", "Copa Asiática Sub-20", "Mundial Sub-17"],
				a: "Copa Asiática Sub-20",
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

	// Mezclar las preguntas aleatoriamente de forma segura (Fisher-Yates) y tomar solo 5
	const preguntasMezcladas = [...preguntas];
	for (let i = preguntasMezcladas.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[preguntasMezcladas[i], preguntasMezcladas[j]] = [preguntasMezcladas[j], preguntasMezcladas[i]];
	}
	const preguntasSeleccionadas = preguntasMezcladas.slice(0, 5);

	for (let i = 0; i < preguntasSeleccionadas.length; i++) {
		const opcionesObj = {};
		preguntasSeleccionadas[i].opciones.forEach((opt) => (opcionesObj[opt] = opt));

		const { value: respuestaUsuario } = await Swal.fire({
			title: `Pregunta ${i + 1} de ${preguntasSeleccionadas.length}`,
			text: preguntasSeleccionadas[i].q,
			input: "radio",
			inputOptions: opcionesObj,
			inputValidator: (value) => !value && "¡Debes elegir una opción!",
			confirmButtonText: "Responder",
			confirmButtonColor: "#006847",
		});

		// Verificación inmediata
		if (respuestaUsuario === preguntasSeleccionadas[i].a) {
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
				text: `La respuesta correcta era: ${preguntasSeleccionadas[i].a}`,
				icon: "error",
				timer: 2000,
				showConfirmButton: false,
			});
		}
	}

	// Resultado final
	Swal.fire({
		title:
			aciertos === preguntasSeleccionadas.length ? "¡Eres un experto!" : "Trivia finalizada",
		text: `Has conseguido ${aciertos} de ${preguntasSeleccionadas.length} puntos.`,
		icon: aciertos >= 3 ? "success" : "warning",
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
