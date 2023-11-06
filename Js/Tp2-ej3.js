var text = "";
var input;

do {
  input = prompt("Ingresa una cadena de texto (o pulsa 'cancelar' para salir):");
  if (input !== null) {
    text += input + "-";
  }
} while (input !== null);

text = text.slice(0, -1); // Eliminar el último guión
alert(text);