var nombres = [];
var edades = [];

for (var i = 1; i <= 3; i++) {
  var nombre = prompt("Ingresa el nombre " + i + ":");
  var edad = parseInt(prompt("Ingresa la edad de " + nombre + ":"));

  if (isNaN(edad)) {
    alert("Por favor, ingresa una edad válida.");
    i--; // Restar uno para volver a solicitar la misma edad
  } else {
    nombres.push(nombre);
    edades.push(edad);
  }
}

var indiceMayor = edades.indexOf(Math.max(...edades));
var nombreMayor = nombres[indiceMayor];

alert("La persona mayor es: " + nombreMayor);