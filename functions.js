import {
  list,
  divText,
  errText,
  ask,
  zahlText,
  opText,
  noNumber,
  ausgabeHTML,
} from "./variables.js";

//variable für die Rechenoperationen
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
  "^": function (x, y) {
    return x ** y;
  },
  sqrt: function (x, y) {
    return x ** (1 / y);
  },
};

// die ausgabe-Funktion
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
      "\n----------\n";
  }
  alert(output);
}

//Konvertierungsfunktion
function ctn(wert) {
  var numwert = Number(wert);
  if (isNaN(numwert)) {
    alert(noNumber);
  }
  return numwert;
}

//Ausgabe-Funktion für die Webseite
function ausgabe(wert) {
  document.write(ausgabeHTML + wert);
}

// Funktion für das Speichern der Rechenoperationen in einem Array
function speicherInHistoryArray(wert1, wert2, operator, ergebnis) {
  var historyArray = [wert1, operator, wert2, ergebnis];
  return historyArray;
}

// Hauptprogramm
let choice = "w";
do {
  let zahl1 = prompt(zahlText);
  let zahl2 = prompt(zahlText);
  let operator = prompt(opText);
  let result;
  try {
    result = berechne[operator](ctn(zahl1), ctn(zahl2));
  } catch (error) {
    if (ctn(zahl1) / ctn(zahl2) == Infinity) {
      alert(divText);
    } else {
      alert(errText);
    }
  }
  list.push(speicherInHistoryArray(zahl1, zahl2, operator, result));
  choice = prompt(ask);
  if (choice === "o") {
    output();
  }
} while (choice !== "e");
