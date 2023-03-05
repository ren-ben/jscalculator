var zahl = prompt("Bitte geben Sie eine Zahl ein: ");
var zahl2 = prompt("Bitte geben Sie eine Zahl ein: ");

// Funktion um String in Zahl umzuwandeln, soll ctn heißen
function ctn(x) {
  return Number(x);
}

let math_it_up = {
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

alert(result);
