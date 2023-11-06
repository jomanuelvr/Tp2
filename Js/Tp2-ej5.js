var input;
do {
  input = prompt("Ingresa un número de DNI (0-99999999) o pulsa 'cancelar' para salir:");
  if (input !== null) {
    var num = parseInt(input);
    if (!isNaN(num) && num >= 0 && num <= 99999999) {
      var letras = "TRWAGMYFPDXBNJZSQVHLCKE";
      var letra = letras.charAt(num % 23);
      alert("La letra de DNI es: " + letra);
    } else {
      alert("No es un número válido.");
    }
  }
} while (input !== null);