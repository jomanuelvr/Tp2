var filas = parseInt(prompt("Ingresa el número de filas:"));
var columnas = parseInt(prompt("Ingresa el número de columnas:"));

if (isNaN(filas) || isNaN(columnas)) {
  alert("Por favor, ingresa números válidos para filas y columnas.");
} else {
  var tabla = "";
  var numero = filas * columnas;

  for (var i = 0; i < filas; i++) {
    tabla += "<tr>";
    for (var j = 0; j < columnas; j++) {
      tabla += "<td>" + numero + "</td>";
      numero--;
    }
    tabla += "</tr>";
  }

  var tablaHTML = "<table border='1'>" + tabla + "</table>";
  document.write(tablaHTML);
}