var texto = prompt("Ingresa una cadena de texto:");
var textoConGuiones = "";

for (var i = 0; i < texto.length; i++) {
  textoConGuiones += texto[i] + "-";
}

textoConGuiones = textoConGuiones.slice(0, -1); // Eliminar el último guión

alert("Texto con guiones: " + textoConGuiones);