/********************************************************************************/
/*
Function speicherInHistoryArray(wert1,wert2,ergebnis)
*/
/********************************************************************************/
/*
Beschreibung der Parameter:
... Hier ausfüllen ...
Beschreibung:
... Hier ausfüllen ...
*/
/********************************************************************************/

/********************************************************************************/
/*
Function speicherInMemoryArray(wert)

/********************************************************************************/
/*
Beschreibung der Parameter:
... Hier ausfüllen ...
Beschreibung:
... Hier ausfüllen ...
*/
/********************************************************************************/

/********************************************************************************/
/*
Function ausgabe(wert)
*/
/********************************************************************************/
/*
Einschränkung: Die Ausgabe kann auf viele verschiedene Arten erfolgen. 
Ihr sollt eine der 3 folgenden auswählen:

1) document.write(wert)
Beispiel: document.write("<h2>Das Ergebnis lautet:</h2>"+wert);

2) console.log(wert);
Beispiele: console.log("Das Ergebnis lautet:"+wert); 

3) alert(wert)
Beispiel: alert("Das Ergebnis lautet:"+wert);

Beschreibung der Parameter:
... Hier ausfüllen ...
Beschreibung:
... Hier ausfüllen ...

3) Anzeige der gespeicherten Rechnungen
Anschließend soll mit einer Abfrage und dem darüber eingegebenen Wert "o", eine Übersicht aller durchgeführten und gespeicherten Rechnungen angezeigt werden.

Tipp zum auslesen des Arrays – for Schleife:

let fruits = ["Banana", "Orange", "Apple", "Mango"];

let length = fruits.length;

for(i=0;i<length;i++)

{

      alert(fruits[i]);

}

//Für mehrsimensionale Arrays müsst ihr dann zwei Zählvariablen definieren ... die länge der ersten erhaltet ihr wie gewohnt mit arrayname.length, die Länge der zweiten mittels arrayname[i].length

Der Auszug aus dem Array - so soll in etwa es aussehen:

#wert1#wert2#operation#ergebnis#

#    1#    2#       plus#        3#

#    1#    2#    minus#      -1#

...
*/

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

// Make an output as an alert of all the calculations with nice formatting and make it one big alert

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
