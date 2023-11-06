var lineaHorizontal = "---------------------------------------------------";
var multiplesDe4 = [];
var multiplesDe9 = [];

for (var i = 1; i <= 500; i++) {
  console.log(i);

  if (i % 4 === 0) {
    console.log(i + " (Múltiplo de 4)");
    multiplesDe4.push(i);
  }

  if (i % 9 === 0) {
    console.log(i + " (Múltiplo de 9)");
    multiplesDe9.push(i);
  }

  if (i % 5 === 0) {
    console.log(lineaHorizontal);
  }
}