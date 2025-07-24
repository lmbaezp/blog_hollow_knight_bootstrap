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