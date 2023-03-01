var zahl = prompt("Bitte geben Sie eine Zahl ein: ");
var zahl2 = prompt("Bitte geben Sie eine Zahl ein: ");

var math_it_up = {
  "+": function (x, y) {
    return x + y;
  },
  "-": function (x, y) {
    return x - y;
  },
  "*": function (x, y) {
    return x * y;
  },
  "/": function (x, y) {
    return x / y;
  },
  "%": function (x, y) {
    return x % y;
  },
};

var operator = prompt("Bitte geben Sie einen Operator ein: ");
var result = math_it_up[operator](zahl, zahl2);

alert(result);
