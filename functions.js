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

do {
  var zahl1 = prompt("Bitte geben Sie eine Zahl ein: ");
  var zahl2 = prompt("Bitte geben Sie eine Zahl ein: ");
  var operator = prompt("Bitte geben Sie einen Operator ein: ");
  var result = berechne[operator](ctn(zahl1), ctn(zahl2));
  ausgabe(result);
} while (operator != "o");

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

function speicherInHistoryArray(wert1, wert2, ergebnis) {
  var historyArray = [wert1, wert2, ergebnis];
  return historyArray;
}

function speicherInMemoryArray(wert) {
  var memoryArray = [wert];
  return memoryArray;
}

var berechne = {
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
