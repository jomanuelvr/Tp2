var texto = prompt("Ingresa una cadena de texto:");
var textoInvertido = "";

for (var i = texto.length - 1; i >= 0; i--) {
  textoInvertido += texto[i];
}

alert("Texto invertido: " + textoInvertido);