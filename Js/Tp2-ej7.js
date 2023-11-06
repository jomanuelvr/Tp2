var numeroMaximo = parseInt(prompt("Ingresa el número máximo para la pirámide (no mayor de 50):"));

if (isNaN(numeroMaximo) || numeroMaximo <= 0 || numeroMaximo > 50) {
  alert("Número no válido. Debe ser un número entre 1 y 50.");
} else {
  for (var i = numeroMaximo; i >= 1; i--) {
    var linea = "";
    for (var j = 1; j <= i; j++) {
      linea += i;
    }
    console.log(linea);
  }
}