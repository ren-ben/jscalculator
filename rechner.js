var zahl = prompt("Bitte geben Sie eine Zahl ein: ");
var zahl2 = prompt("Bitte geben Sie eine Zahl ein: ");

// Funktion um String in Zahl umzuwandeln, soll ctn heißen
function ctn(x) {
  return Number(x);
}

var math_it_up = {
  "+": function (x, y) {
    return ctn(x) + ctn(y);
  },
  "-": function (x, y) {
    return ctn(x) - ctn(y);
  },
  "*": function (x, y) {
    return ctn(x) * ctn(y);
  },
  "/": function (x, y) {
    return ctn(x) / ctn(y);
  },
  "%": function (x, y) {
    return ctn(x) % ctn(y);
  },
};
var operator = prompt("Bitte geben Sie einen Operator ein: ");
var result = math_it_up[operator](zahl, zahl2);

alert(result);
