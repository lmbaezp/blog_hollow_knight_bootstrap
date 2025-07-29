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
  <div class="contenido-izquierda">
    <h3>🗺️ Mapas de Hallownest</h3><br>
    <p><strong>Hollow Knight</strong> es un juego de exploración que premia la curiosidad. No hay marcadores de misión ni flechas que te guíen: debes construir tu propio camino.</p>
    
    <p>Los mapas se desbloquean parcialmente cuando encuentras a <strong>Cornifer</strong>, el simpático cartógrafo que canta mientras trabaja. Luego puedes mejorar ese mapa comprando la pluma en la tienda de <strong>Iselda</strong>.</p>
    <br>
    <h3>🎮 Estilo Metroidvania:</h3><br>
    <ul>
      <li>Exploración no lineal.</li>
      <li>Habilidades como el doble salto o el dash desbloquean nuevos caminos 🌀.</li>
      <li>Tu progreso depende de observar, recordar y atreverte a volver sobre tus pasos 🧠.</li>
    </ul>
    
    <h3>🌍 Zonas destacadas de Hallownest:</h3><br>
    <ul>
      <li><strong>Greenpath:</strong> vegetación salvaje, agua ácida y enemigos que explotan 🍃.</li>
      <li><strong>Deepnest:</strong> un laberinto oscuro, con criaturas que se arrastran 🕷️.</li>
      <li><strong>City of Tears:</strong> una ciudad antigua que llora eternamente 🌧️.</li>
      <li><strong>Crystal Peak:</strong> cristales rosados, plataformas traicioneras y rayos láser 💎⚡.</li>
      <li><strong>Queen's Gardens:</strong> naturaleza salvaje y guardianes sigilosos 🌸.</li>
      <li><strong>Kingdom's Edge:</strong> borde del reino, lleno de cenizas y desafíos 🏔️.</li>
    </ul>
<br>
    <h3>📌 Tipos de mapas:</h3><br>
    <ul>
      <li><strong>Mapas regionales:</strong> se obtienen de Cornifer en cada área 🗺️.</li>
      <li><strong>Mapa completo:</strong> se va armando explorando bancos y salas visitadas 🪑.</li>
      <li><strong>Mapa de sueños:</strong> revela zonas oníricas e interiores escondidos 🌙.</li>
    </ul>
<br>
    <h3>🔍 Al explorar puedes encontrar:</h3><br>
    <ul>
      <li>Fragmentos de máscara ❤️ y recipiente de alma ✨ para mejorar tu resistencia.</li>
      <li>Amuletos con efectos únicos como doble curación o detección de enemigos 🔮.</li>
      <li>Jefes opcionales que dan acceso a finales secretos 🕵️‍♂️.</li>
      <li>NPCs que completan la historia y te ofrecen misiones escondidas 📖.</li>
    </ul>
<br>
    <p><strong>🧭 Recomendación:</strong> compra marcadores en la tienda de Iselda para señalar en tu mapa lugares importantes: bancos, capullos de larvas, entradas bloqueadas o zonas aún sin explorar.</p>
<br>
    <p>💡 <em>Explorar Hallownest es como armar un rompecabezas gigante:</em> cada rincón está conectado, y regresar a zonas antiguas con nuevas habilidades revela secretos escondidos. ¡Atrévete a perderte! 🌌</p>
    
    <div class="info-img">
      <img src="Mapa.jpg" alt="Mapa de Hallownest">
    </div>
    </div>
  `;
  modalImagen.style.display = "none";
  break;
    case 'personajes':
  contenido = `
    <h3>Personajes de Hollow Knight</h3>
<p>El mundo de <strong>Hollow Knight</strong> está habitado por misteriosos personajes que enriquecen la historia sin necesidad de largos diálogos. Cada encuentro revela pistas sobre el pasado de Hallownest y su caída.</p>
<br>

<!-- El Caballero -->
<div style="display: flex; align-items: center; gap: 20px; margin-bottom: 25px;">
  <div style="flex: 1;">
    <h4>🦗 El Caballero (The Knight)</h4>
    <p>Es el protagonista silencioso del juego. Sin nombre ni voz, su historia se revela a medida que exploras. Porta un aguijón afilado (nail) y puede adquirir poderes mágicos y habilidades especiales. Su origen está ligado a los secretos más profundos del reino ⚔️.</p>
  </div>
  <img src="ElCaballero.jpg" alt="El Caballero" style="width: 150px; border-radius: 12px;">
</div>

<!-- Quirrel -->
<div style="display: flex; align-items: center; gap: 20px; margin-bottom: 25px;">
  <div style="flex: 1;">
    <h4>🧢 Quirrel</h4>
    <p>Un viajero amable y curioso. A menudo lo encontrarás explorando ruinas o admirando paisajes. Aunque parece despreocupado, su historia está conectada con el pasado trágico de Hallownest y un antiguo maestro llamado Monomon la Sabia 🐚.</p>
  </div>
  <img src="Quirrel.jpg" alt="Quirrel" style="width: 150px; border-radius: 12px;">
</div>

<!-- Cornifer -->
<div style="display: flex; align-items: center; gap: 20px; margin-bottom: 25px;">
  <div style="flex: 1;">
    <h4>🗺️ Cornifer</h4>
    <p>El cartógrafo alegre que silba mientras trabaja. Lo encontrarás en varias zonas vendiendo mapas que son esenciales para no perderte. Su esposa, Iselda, también tiene una tienda de mapas en Dirtmouth 📜.</p>
  </div>
  <img src="Cornifer.png" alt="Cornifer" style="width: 150px; border-radius: 12px;">
</div>

<!-- Bretta -->
<div style="display: flex; align-items: center; gap: 20px; margin-bottom: 25px;">
  <div style="flex: 1;">
    <h4>🐞 Bretta</h4>
    <p>Una pequeña escarabajo tímida que admira al Caballero. La encontrarás atrapada en Fungal Wastes. Si la rescatas, regresa a Dirtmouth con una historia graciosa y una actitud muy peculiar sobre su "héroe" 💌.</p>
  </div>
  <img src="Bretta.jpg" alt="Bretta" style="width: 150px; border-radius: 12px;">
</div>

<!-- Chamán del Caracol -->
<div style="display: flex; align-items: center; gap: 20px; margin-bottom: 25px;">
  <div style="flex: 1;">
    <h4>🧙‍♂️ Chamán del Caracol (Snail Shaman)</h4>
    <p>Un personaje excéntrico que otorga al Caballero su primer hechizo. Vive en una cueva oculta y tiene un conocimiento profundo de la magia de alma 🔮.</p>
  </div>
  <img src="Chaman.png" alt="Snail Shaman" style="width: 150px; border-radius: 12px;">
</div>

<p style="margin-top: 30px;">💬 <em>Estos personajes no solo ayudan en tu aventura, también ofrecen momentos emocionales, misteriosos y hasta divertidos. Interactuar con ellos es clave para entender la historia y sentirte parte del mundo de Hallownest 🌌.</em></p>
  `;
  modalImagen.style.display = "none";
  break;
    case 'jefes':
      contenido = `
    <div class="info-section">
      <div class="info-text">
        <h3>Falso Caballero</h3>
        <p><strong>Descripción:</strong> Uno de los primeros Jefes de Hollow Knight. Tiene el Emblema de la Ciudad, necesario para abrir la Ciudad de Lágrimas. Su forma Onírica es Campeón Fallido.</p>
        <p><strong>Ubicación:</strong> Cruces Olvidados, Hogar de Dioses</p>
      </div>
      <div class="info-img">
        <img src="Falso_Caballero.png" alt="Falso Caballero">
      </div>
    </div>

    <div class="info-section">
      <div class="info-text">
        <h3>Gran Sabio del Aguijón Sly</h3>
        <p><strong>Descripción:</strong> Introducido en el DLC Buscador de Dioses. Te espera en el Panteón del Sabio.</p>
        <p><strong>Ubicación:</strong> Hogar de Dioses</p>
      </div>
      <div class="info-img">
        <img src="Gran_Sabio.png" alt="Sly">
      </div>
    </div>

    <div class="info-section">
      <div class="info-text">
        <h3>Grimm</h3>
        <p><strong>Descripción:</strong> Jefe y NPC principal del DLC "La Compañía de Grimm".</p>
        <p><strong>Ubicación:</strong> Bocasucia, Hogar de Dioses</p>
      </div>
      <div class="info-img">
        <img src="Grimm.png" alt="Grimm">
      </div>
    </div>

        <div class="info-section">
      <div class="info-text">
        <h3>Hornet</h3>
        <p><strong>Descripción:</strong> Es un personaje que se encontrará seis veces, cinco de ellas en la historia del juego y la última en el jefe final.</p>
        <p><strong>Ubicación:</strong> Greenpath
			City of Tears
			Kingdom's Edge
			Deepnest
			Ancient Basin
			Forgotten Crosssroads</p>
      </div>
      <div class="info-img">
        <img src="Hornet.png" alt="Grimm">
      </div>
    </div>

        <div class="info-section">
      <div class="info-text">
        <h3>Señores Mantis</h3>
        <p><strong>Descripción:</strong>Los Señores Mantis son un jefe opcional en Hollow Knight. Derrotarlos garantiza un paso seguro por la Aldea Mantis. Las  Hermanas de Batalla son su forma más fuerte.</p>
        <p><strong>Ubicación:</strong> Greenpath
Aldea Mantis</p>
      </div>
      <div class="info-img">
        <img src="Señores_Mantis.png" alt="Grimm">
      </div>
    </div>

        <div class="info-section">
      <div class="info-text">
        <h3>Hollow Knight</h3>
        <p><strong>Descripción:</strong>El Hollow Knight es uno de los Jefes principales de Hollow Knight. Es el centro (por decirlo de alguna forma) del viaje del Caballero y la historia de Hallownest. Vasija Pura es su forma no infectada.</p>
        <p><strong>Ubicación:</strong> Greenpath
Templo del Huevo Negro</p>
      </div>
      <div class="info-img">
        <img src="Hollow_Knight.png" alt="Grimm">
      </div>
    </div>

         <div class="info-section">
      <div class="info-text">
        <h3>Destello</h3>
        <p><strong>Descripción:</strong>El Destello es el jefe final secreto de Hollow Knight. Absoluto Destello es su forma perfecta.</p>
        <p><strong>Ubicación:</strong> Greenpath
Templo del Huevo Negro</p>
      </div>
      <div class="info-img">
        <img src="Destello.png" alt="Grimm">
      </div>
    </div>

        <div class="info-section">
      <div class="info-text">
        <h3>Zote el Todopoderoso</h3>
        <p><strong>Descripción:</strong>Zote es un viajero de las afueras de Hallownest. Él vino al reino para cumplir una promesa; después se revela que fue una promesa de gloria para si mismo. Tiene cinco apariciones en la historia.</p>
        <p><strong>Ubicación:</strong> Greenpath
			Sendero Verde
			Bocasucia
			Ciudad de lágrimas
			Nido Profundo
			Coliseo de los insensatos</p>
      </div>
      <div class="info-img">
        <img src="Zote.png" alt="Grimm">
      </div>
    </div>
  `;
  modalImagen.style.display = "none";
  break;
  }

  modalTexto.innerHTML = contenido;
  modalImagen.src = imagen;
  modal.style.display = "block";
}

function cerrarModal() {
  document.getElementById("modal").style.display = "none";
}