var sum = 0;
var input;

do {
  input = prompt("Ingresa un número (o pulsa 'cancelar' para salir):");
  if (input !== null) {
    var num = parseFloat(input);
    if (!isNaN(num)) {
      sum += num;
    } else {
      alert("No es un número válido.");
    }
  }
} while (input !== null);

alert("La suma total es: " + sum);