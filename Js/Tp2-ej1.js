var edad = prompt("Ingresa tu edad:");

if (isNaN(edad)) {
  alert("Introduce un número válido.");
} else {
  if (edad > 18) {
    alert("Ya puedes conducir.");
  }
}