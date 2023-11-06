var texto = prompt("Ingresa una cadena de texto:");
var primeraVocal = null;

for (var i = 0; i < texto.length; i++) {
  var caracter = texto[i].toLowerCase(); // Convertir a minúsculas para comparar

  if ("aeiou".includes(caracter)) {
    primeraVocal = caracter;
    break;
  }
}

if (primeraVocal !== null) {
  var posicion = texto.indexOf(primeraVocal) + 1; // Agregar 1 para mostrar la posición correcta
  alert("La primera vocal '" + primeraVocal + "' está en la posición " + posicion);
} else {
  alert("No se encontraron vocales en el texto.");
}
