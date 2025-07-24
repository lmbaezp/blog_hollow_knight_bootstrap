document.addEventListener("DOMContentLoaded", function () {
   
    var formulario = document.getElementById("formulario-contacto");
    var mensaje = document.getElementById("mensaje-confirmacion");

    // Cuando el formulario se envíe...
    formulario.addEventListener("submit", function (evento) {
      evento.preventDefault(); // No recarga pagina

      formulario.reset(); // Limpiaformulario

  
      mensaje.textContent = "¡Gracias por tu mensaje! Te responderemos pronto.";

      // Borra el mensaje 5 seg
      setTimeout(function () {
        mensaje.textContent = "";
      }, 5000);
    });
  });

function abrirModal(seccion) {
  const modal = document.getElementById("modal");
  const modalTexto = document.getElementById("modal-texto");
  const modalImagen = document.getElementById("modal-imagen");

  let contenido = "";
  let imagen = "";

  switch(seccion) {
    case 'mapas':
  contenido = `
    <h3>Mapas de Hallownest</h3>
    <p>Uno de los aspectos más destacados de <strong>Hollow Knight</strong> es su enfoque en la exploración. Hollow Knight no tiene diálogos largos ni explicaciones claras: el jugador debe interpretar lo que pasa a partir de lo que ve, los personajes que encuentra, los escenarios y los objetos.</p>
    <br>
    <p>Aunque las zonas parecen separadas (como si fueran niveles distintos), en realidad todo el mapa está unido como un gran laberinto. No hay pantallas de carga entre zonas, y el jugador puede pasar de una a otra de forma fluida.</p>
    <br>
    <p>Esto le da al juego una estructura conocida como <i>"Metroidvania"</i>, un estilo de juego en el que:</p>
    <ul>
        <li>No hay un solo camino lineal.</li>
        <li>Se puede volver a zonas anteriores con nuevas habilidades para desbloquear secretos.</li>
        <li>El progreso depende de explorar, recordar rutas y probar caminos nuevos.</li>
    </ul>
    <br>
    <p>Al inicio, el jugador no tiene un mapa completo. Para poder orientarse, debe encontrar a un personaje llamado <strong>Cornifer</strong>, un cartógrafo que está escondido en cada zona. Al encontrarlo, se puede comprar un mapa inicial del área. Luego, con una pluma (también comprable), el jugador puede ir completando el mapa mientras explora.</p>
    <br>
    <p>El mapa no se actualiza automáticamente: solo se actualiza cuando el jugador descansa en un banco, que funciona como punto de guardado.</p>
    <br>
    <p>🧭 <strong>Zonas principales de Hallownest:</strong> Cada zona tiene un ambiente único, enemigos distintos, música propia y muchos secretos. Algunas de las más conocidas son:</p>
    <ul>
        <li><strong>Greenpath</strong>: una región exuberante y verde, con vegetación espesa, agua ácida y enemigos rápidos. Es de las primeras zonas que se exploran.</li>
        <li><strong>Deepnest</strong>: un lugar oscuro, enredado como una telaraña, lleno de insectos agresivos y trampas. Es una de las zonas más inquietantes del juego.</li>
        <li><strong>City of Tears</strong>: una ciudad majestuosa donde siempre llueve. Aquí hay muchos secretos escondidos entre edificios abandonados y enemigos más fuertes.</li>
        <li><strong>Crystal Peak</strong>: una mina llena de cristales brillantes, plataformas móviles y peligros eléctricos. Su dificultad es mayor que otras zonas tempranas.</li>
        <li><strong>Fog Canyon</strong>, <strong>Fungal Wastes</strong>, <strong>Kingdom's Edge</strong>, <strong>Royal Waterways</strong> y más: cada una tiene su historia, desafíos y enemigos característicos.</li>
    </ul>
    <br>
    <p>🔍 <strong>¿Qué se encuentra al explorar?</strong> Explorar no solo permite avanzar: también se descubren cosas como:</p>
    <ul>
        <li>Fragmentos de máscara para aumentar la salud.</li>
        <li>Fragmentos de alma para mejorar la magia.</li>
        <li>Encantamientos (charms) que modifican habilidades.</li>
        <li>Jefes ocultos y finales alternativos del juego.</li>
        <li>NPCs (personajes) que revelan la historia de Hallownest.</li>
    </ul>
  `;
  imagen = "https://preview.redd.it/x428m90hsqc41.jpg?auto=webp&s=1919acd02748669b40d3ccbdf53bae6fca2489e9";
  break;
    case 'personajes':
      contenido = 
      imagen = "img/personajes-ejemplo.jpg";
      break;
    case 'jefes':
      contenido = `Falso Caballero : 
	Descripción:
			El Falso Caballero es uno de los primeros Jefes de Hollow Knight. El tiene el Emblema de la Ciudad, artefacto necesario para abrir las puertas a la 				Ciudad de Lágrimas. Campeón Fallido es su forma Onírica, más rápida y fuerte.
	Ubicación:
			Cruces Olvidados
			Hogar de Dioses

Gran Sabio del Aguijón Sly : 
	Descripción:
			El Gran Sabio del Aguijón Sly es un Jefe de misión en Hollow Knight. Introducido en el DLC Buscador de Dioses. Sly te espera en la Cima del Panteón del 			Sabio en el Hogar de Dioses.
	Ubicación:
			Hogar de Dioses

Grimm : 
	Descripción:
			Grimm es un NPC y a su vez un jefe introducido con el DLC: La Compañía de Grimm en Hollow Knight. Es el personaje principal de su misión.
	Ubicación:
			Bocasucia
			Hogar de Dioses

Hornet : 
	Descripción:
			Es un personaje que se encontrará seis veces, cinco de ellas en la historia del juego y la última en el jefe final.
	Ubicación:
			Greenpath
			City of Tears
			Kingdom's Edge
			Deepnest
			Ancient Basin
			Forgotten Crosssroads

Señores Mantis : 
	Descripción:
			Los Señores Mantis son un jefe opcional en Hollow Knight. Derrotarlos garantiza un paso seguro por la Aldea Mantis. Las  Hermanas de 					Batalla son su forma más fuerte.
	Ubicación:
			Aldea Mantis

Hollow Knight: 
	Descripción:
			El Hollow Knight es uno de los Jefes principales de Hollow Knight. Es el centro (por decirlo de alguna forma) del viaje del Caballero y la historia de 			Hallownest. Vasija Pura es su forma no infectada.
	Ubicación:
			Templo del Huevo Negro

Destello: 
	Descripción:
			El Destello es el jefe final secreto de Hollow Knight. Absoluto Destello es su forma perfecta.
	Ubicación:
			Templo del Huevo Negro

Zote el Todopoderoso: 
	Descripción:
			Zote es un viajero de las afueras de Hallownest. Él vino al reino para cumplir una promesa; después se revela que fue una promesa de gloria para si 			mismo. Tiene cinco apariciones en la historia.
	Ubicación:
			Sendero Verde
			Bocasucia
			Ciudad de lágrimas
			Nido Profundo
			Coliseo de los insensatos
      `;
      imagen = "img/jefes-ejemplo.jpg";
      break;
  }

  modalTexto.innerHTML = contenido;
  modalImagen.src = imagen;
  modal.style.display = "block";
}

function cerrarModal() {
  document.getElementById("modal").style.display = "none";
}