var nota = prompt("Ingresa tu nota (de 0 a 10):");
var notaNum = parseFloat(nota);

if (isNaN(notaNum) || notaNum < 0 || notaNum > 10) {
  alert("Número erróneo");
} else {
  if (notaNum >= 0 && notaNum <= 2) {
    alert("Muy deficiente");
  } else if (notaNum <= 4) {
    alert("Insuficiente");
  } else if (notaNum <= 6) {
    alert("Suficiente");
  } else if (notaNum == 7) {
    alert("Bien");
  } else if (notaNum <= 9) {
    alert("Notable");
  } else {
    alert("Sobresaliente");
  }
}