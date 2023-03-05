let berechne = {
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
  e: function () {
    return "exit";
  },
};

function output() {
  let output = "";
  for (let i = 0; i < list.length; i++) {
    output +=
      list[i][0] +
      " " +
      list[i][1] +
      " " +
      list[i][2] +
      " = " +
      list[i][3] +
      "\n\n";
  }
  alert(output);
}

function ctn(wert) {
  var numwert = Number(wert);
  if (isNaN(numwert)) {
    alert(
      "Beim eingegebenen Wert handelt es sich nicht um eine Zahl oder Ziffer"
    );
  }
  return numwert;
}

function ausgabe(wert) {
  document.write("<h2>Das Ergebnis lautet:</h2>" + wert);
}

function speicherInHistoryArray(wert1, wert2, operator, ergebnis) {
  var historyArray = [wert1, operator, wert2, ergebnis];
  return historyArray;
}

function speicherInMemoryArray(wert) {
  var memoryArray = [wert];
  return memoryArray;
}

let list = [];
do {
  let zahl1 = prompt("Bitte geben Sie eine Zahl ein: ");
  let zahl2 = prompt("Bitte geben Sie eine Zahl ein: ");
  let operator = prompt("Bitte geben Sie einen Operator ein: ");
  //check zahl1 and zahl2 and operator that there is no error when the user enters a wrong operator and also things like divide by 0 and so on

  try {
    let result = berechne[operator](ctn(zahl1), ctn(zahl2));
  } catch (error) {
    let result = "Error";
    if (ctn(zahl1) / ctn(zahl2) == Infinity) {
      alert("Division durch 0 nicht möglich");
    } else {
      alert("Ein Fehler ist aufgetreten!");
    }
  }
  list.push(speicherInHistoryArray(zahl1, zahl2, operator, result));
  ausgabe(result);
  choice = prompt("Möchten Sie die Rechenoperationen aufhören? (e für ja)");
  if (choice == "o") {
    output();
  }
} while (choice != "e");
