var texto = prompt("Ingresa un texto:");
var contadorVocales = 0;

for (var i = 0; i < texto.length; i++) {
  var caracter = texto[i].toLowerCase(); // Convertir a minúsculas para comparar

  if (caracter === 'a' || caracter === 'e' || caracter === 'i' || caracter === 'o' || caracter === 'u') {
    contadorVocales++;
  }
}

alert("El número de vocales en el texto es: " + contadorVocales);