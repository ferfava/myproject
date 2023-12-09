// Script.js

// Agregar tu lógica de JavaScript aquí

// Ejemplo de animación para desvanecer el mensaje de bienvenida después de 3 segundos
document.addEventListener("DOMContentLoaded", function () {
  // Selector del elemento a desvanecer
  var welcomeMessage = document.querySelector('.cover');

  // Después de 3 segundos, agrega una clase para desvanecer el mensaje
  setTimeout(function () {
    welcomeMessage.classList.add('fade-out');
  }, 3000);
});
