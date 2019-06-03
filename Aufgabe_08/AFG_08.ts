// Deklaration : Interfaces, Variablen, Funktionen


// EINGEBAUTE FEHLER
// Funktionen testen - jeden Button, der gefunden wurde
// Hilfe: Benutzt auf Verdacht ein Konsolen-Log oder ruft die Variable in der Konsole des Browsers auf.
// Hilfe2: Betrachtet den umliegenden Code. Trackt die Werte von Variablen, falls euch etwas komisch vorkommt!


//        V A R I A B L E N

let monsterHolder = "monsterHoldingCell";        // ID für das Haupt-Element, in welchem die Monster sich befinden werden
let playerName = "Spielername";                 // globale Variablen, stellen Spieler dar
let playerXP = 0;
//       1. Fehler: Variable deklarieren let playerXP
//       Stellt die gesammelte Erfahrung des Spielers dar

//       Aufgabe: 5.000XP

let playerXPperLevel = 5000;
let prefix = ["Wald-", "Seuchen-", "Uralte(s) ", "Gift-", "Brennende(s) ", "Kniescheibenzertrümmernde(s) ", "Meer ", "Zombie ", "Tode(s) ", "Stinkende(s) ", "Lauernde(s) "];
let monsterName = ["Ratte", "Nagetier", "Ungeziefer", "Biber", "Schlange", "Robotor", "Alien", "Sensenmann"];
let suffix = [" des Verderbens", " aus der Hölle", " der Lethalität", " mit Rheuma", " der Redundanz", " der Zerberstung", " der Liebe", " der Zersteutheit", " der Verdammnis", " des guten Geschmacks"];
let monsterModifers = ["Ist nervig", "Linkshänder", "Bier-Connoisseur", "Verfehlt häufig", "Prokrastiniert", "Müde", "Verwirrt", "Wasserscheu", "Bipolar", "Hat Schnupfen", "Verläuft sich oft"];

//////Aufgabe: Erweiterung um 2 Felder

let monsterElement = ["Feuer", "Wasser", "Luft", "Erde"];
let monsterStimmung = ["traurig", "aggressiv", "lustig", "depressiv", "melanchonisch", "zufrieden", "niedergeschlagen", "aufgewühlt"];

//////Aufgabe: Neues Arrays erstellen

let monsterBilder = ["c1.png", "c0.png", "c2.png", "c3.png", "pinguin.png", "elefant.png"];

// Initialisierung der Anzahl an Monstern

let monsterArray = [];           // Das Haupt-Array erstellt und initialisiert
console.log(monsterArray);       // Gebe das Monster-Array einmal zu beginn aus. Es sollte leer sein.

// Aufgabe: Array mit neuem Wert

let NeuerWert = [];

//          F U N K T I O N E N


window.onload = function () {
    document.getElementById("monsterSpawner").addEventListener("click", generateMonster, false);
    updatePlayerLevel(); // Zu Anfang wird durch eine Funktion ein HTML-Element mit Inhalt befüllt.
    console.log(document.getElementById("monsterSpawner"));
    //////2.Fehler : console.log(document.getElementById("monsterSpawner").innerHTML); ---> Man muss es in onload setzten und .innerHTML weggemacht.//////
    //////Aufgabe: Neues Array mit neuem Wert.//////
    NeuesArray_2(20);
    NeuesArray_2(35);
    NeuesArray_2(88);
    NeuesArray_2(167);
    NeuesArray_2(55);
};

function NeuesArray_2(zahl) {
    NeuerWert.push(zahl);
    console.log(NeuerWert);
}
// Die Hauptfunktion, um ein Monster zu erstellen. Wird von einem Button ausgerufen.
// Generiert ein neues Monster. Dieses wird zu dem Monster-Array hinzugefügt.
// Ruft eine Funktion auf, welche dann das entsprechende HTML erzeugt.

function generateMonster() {
    let newMonsterName = generateMonsterName();              // Rückgabe string
    let newMonsterHP = generateMonsterHitPoints();           // Rückgabe Zahl
    let newMonsterXP = generateMonsterXP();                  // Rückgabe Zahl
    let newMonsterModifier = generateMonsterModifer();       // Rückgabe string Array


    //////Aufgabe: Erweiterungum 2 Felder

    let newMonsterElement = generateMonsterElement();
    let newMonsterStimmung = generateMonsterStimmung();
    let newMonster = {
        monsterName: newMonsterName,
        monsterHealthPoints: newMonsterHP,
        monsterExperience: newMonsterXP,
        monsterModifier: newMonsterModifier,

        //      3.Fehler: monsterMoney : 0,
        //      4.Fehler: monsterMoney existiert nicht

        //      Aufgabe: Erweiterung Monster-Interfaces

        monsterElement: newMonsterElement,
        monsterStimmung: newMonsterStimmung
    };
    monsterArray.push(newMonster);
    //       Monster wird erst in diesem Schritt zu dem Array hinzugefügt

    console.log(monsterArray[monsterArray.length - 1].monsterExperience);

    //      Man kann nur auf Array-Teile zugreifen, welche definiert sind. -1 ist nicht definitiert (und wird es auch nie sein).
    //      5.Fehler : console.log(monsterArray[-1].monsterExperience);

    monsterGenerateHTML(); // Triggere die Generierung von HTML
}
// Generiert HTML-Elemente, welche dann einem Element untergeordnet werden. Erzeugt ebenfalls einen Event-Listener auf dem Button.

function monsterGenerateHTML() {
    let holdingDiv = document.createElement("div");
    // Erstelle ein neues HTML-Element vom typ <div>. Es ist jedoch noch nicht zu sehen

    holdingDiv.setAttribute("id", "monster" + monsterArray.length);
    // Die ID jedes neu-erstellten Monsters entspricht der aktuellen Array-Länge.

    holdingDiv.setAttribute("class", "monster"); // Klasse für Visuals
    document.getElementById(monsterHolder).appendChild(holdingDiv); // Das HTML-Element zu Objekt zufügen, id "monsterHoldingCell"
    let monsterName = document.createElement("p"); // Generiere einen <p>
    monsterName.innerHTML = monsterArray[monsterArray.length - 1].monsterName;
    // Inhalt des <p>: Monster-Name des letzten Monsters im Array.

    holdingDiv.appendChild(monsterName);  // Füge das <p> zum HTML-Dokument hinzu, indem es dem holding-Div angefügt wird.
    let monsterMod = document.createElement("p"); // Generiere einen <p>
    monsterMod.innerHTML = monsterArray[monsterArray.length - 1].monsterModifier[0] + ", " + monsterArray[monsterArray.length - 1].monsterModifier[1]; // Inhalt des <p>: Monster-Modifizierer null und eins
    holdingDiv.appendChild(monsterMod);
    // Füge das <p> zum HTML-Dokument hinzu, indem es dem holding-Div angefügt wird.


    //      Aufgabe: Monster generieren

    let monsterImg = document.createElement("img"); // Erstelle ein <img>-Element
    monsterImg.setAttribute("src", "imgs/" + monsterBilder[getRNGNumber(monsterBilder.length - 0)]); // Der Pfad für das Bild muss über setAttribute festgelegt werden. Der Bildpfad kann natürlich auch anders aussehen.
    monsterImg.setAttribute("alt", "Schreckliches Monster"); // Das alt für das Bild wird hier festgelegt.
    holdingDiv.appendChild(monsterImg); // Füge das Bild zu dem holding-div hinzu (<div>, welche ein paar Zeilen zuvor erstellt worden ist)
    let monsterBtn = document.createElement("BUTTON"); // Erstelle ein <button>-Element
    monsterBtn.innerHTML = "Monster bekämpfen!"; // Verändere den Inhalt des HTML-Elementes. Der genaue Text ist dabei euch überlassen.
    holdingDiv.appendChild(monsterBtn); // Füge den Button zu dem holding-div hinzu.
    let monsterCount = monsterArray.length; // Die aktuelle Anzahl vorhandener Monster, zudem auch die neue Zahl für das Monster-Array.
    console.log("Aktuelle Anzahl an Monstern: " + monsterCount);
    monsterBtn.addEventListener(// Füge dem Monster eine Funktion hinzu.
        'click', function () {
            fightMonster(monsterCount); // Wenn das Monster erstellt wird erhält die Funktion einen Parameter, welcher der aktuellen Anzahl entspricht.
        }, false); // Ignoriert das false.
    //////Aufgabe: Erweiterung des Monster-Interfaces um zwei weitere Felder.//////
    let monsterElement = document.createElement("p");
    monsterElement.innerHTML = monsterArray[monsterArray.length - 1].monsterElement;
    holdingDiv.appendChild(monsterElement);
    let monsterStimmung = document.createElement("p");
    monsterStimmung.innerHTML = monsterArray[monsterArray.length - 1].monsterStimmung;
    holdingDiv.appendChild(monsterStimmung);
}
// Wird für den Zugriff auf eine zufällige Stelle in einem Array aufgerufen.
// [ ] Optionale Aufgabe: verkleinere diesen Code auf eine Zeile mit nur einem Semikolon!
// Muss mit einer Zahl aufgerufen werden: getRNGNumber(5); // Liefert eine ganze Zahl zwischen 0 bis 4 zurück.
function getRNGNumber(_maxNumber) {
    let rngNumber = Math.random(); // Macht folgendes: Generiere eine zufällige Komma-Zahl zwischen 0 - 1.
    rngNumber = rngNumber * _maxNumber; // Multipliziere diese Zahl mit der Länge des entsprechenden Array (hier: _maxNumber, ein Parameter, siehe in der runden Klammer der Funktion).
    rngNumber = Math.floor(rngNumber); // Floore diese Zahl, damit diese nun Ganzzahlig ist.
    /////6.Fehler: rngNumber = 0; ---> Es gibt keinen Sinn eine random number auf 0 zu setzten, dann ist sie nicht mehr random.//////
    return rngNumber; // Gebe diese Zahl zurück, Funktion kann ähnlich einer Variable in Rechnungen genutzt werden.
}
// Diese Funktion gibt einen zusammengewürfelten Namen zurück.
// Wird für die Monster-generierung verwendet!
// Liefert einen zusammengesetzten String zurück.
function generateMonsterName() {
    let generatedMonsterName = ""; // Erstelle einen leeren String für das Monster
    // Monster-Vorname
    // Mathematik! Hier wird eine zufällig-generierte Zahl benötigt.
    let rngNumber = getRNGNumber(prefix.length); // Der Rückgabewert der Funktion wird hier verwendet um den entsprechenden Teil des Namens (hier: Anfang) zu generieren.
    generatedMonsterName = prefix[rngNumber]; // Füge den Monsternamen zusammen: nimm aus dem entsprechenden Array mit der zufallsgenerierten Zahl den entsprechenden Eintrag.
    // Monster-Mittelname
    rngNumber = getRNGNumber(monsterName.length); // Der Rückgabewert der Funktion wird hier verwendet um den entsprechenden Teil des Namens (hier: Mitte) zu generieren.
    generatedMonsterName += monsterName[rngNumber]; // Füge den Monsternamen zusammen: nimm aus dem entsprechenden Array mit der zufallsgenerierten Zahl den entsprechenden Eintrag.
    /////7.Fehler: generatedMonsterName += monsterName[0]; ---> Bei der Zahl 0 nimmt er immer "ratte" und nicht einen zufälligen Namen. Deshalb muss man sie random machen.//////
    // Monster-Titel
    rngNumber = getRNGNumber(suffix.length); // Der Rückgabewert der Funktion wird hier verwendet um den entsprechenden Teil des Namens (hier: Ende) zu generieren.
    generatedMonsterName += suffix[rngNumber]; // Füge den Monsternamen zusammen: nimm aus dem entsprechenden Array mit der zufallsgenerierten Zahl den entsprechenden Eintrag.
    return generatedMonsterName;
}
// Wird für die Monster-Lebenspunkte aufgerufen.
// Liefert eine variierende Zahl zurück.
function generateMonsterHitPoints() {
    // Diese Funktion gibt eine zufällige ganze Zahl (zwischen 0 und 10) + 1 zurück.
    let tempMonsterHP = 1 + getRNGNumber(10);
    return tempMonsterHP;
}
// Wird für die Erstellung der Monster-Lebenspunkte aufgerufen.
// Liefert eine variierende Zahl zurück.
function generateMonsterXP() {
    // Diese Funktion gibt eine zufällige ganze Zahl (zwischen 0 und 350) + 100 zurück.
    let tempMonsterXP = 100 + getRNGNumber(350);
    return tempMonsterXP;
}
// Wird für die Erstellung der Monster-Modifizierer aufgerufen.
// Liefert ein Array mit zwei Einträgen zurück.
function generateMonsterModifer() {
    let tempMonsterMod = []; // Initialisiere Array
    tempMonsterMod[0] = monsterModifers[getRNGNumber(monsterModifers.length)]; // Setze Schublade 0 des Arrays auf einen Wert
    tempMonsterMod[1] = monsterModifers[getRNGNumber(monsterModifers.length)]; // Setze Schublade 1 des Arrays auf einen Wert
    return tempMonsterMod; //Array wiedergeben
}
// Erweiterung des Monster-Interfaces

function generateMonsterElement() {
    let tempMonsterEl;
    tempMonsterEl = monsterElement[getRNGNumber(monsterElement.length)];
    return tempMonsterEl;
}
function generateMonsterStimmung() {
    let tempMonsterSt;
    tempMonsterSt = monsterStimmung[getRNGNumber(monsterStimmung.length)];
    return tempMonsterSt;
}
// Aufgerufen, wenn man auf den Button klickt.
// Der Spieler kämpft gegen das entsprechende Monster. Er erhält dann Erfahrungspunkte.

function fightMonster(_index) {
    console.log("Spieler kämpft gegen Monster und gewinnt!");        // Ohne Logik mit if/else ist so etwas wie ein Kampf nicht leicht umzusetzen.
    console.log("Das Monster weigert sich zu verschwinden.");        // Wird nächste Stunde erweitert.
    playerXP += monsterArray[_index - 1].monsterExperience;          // _index ist in diesem Fall die Länge des Arrays - allerdings zählt der Computer beginnend von null, nicht eins! Deshalb _index-1.
    updatePlayerLevel();
}


// Aufgerufen, um das HTML-Element, welches das Spieler-Level darstellt, zu erneuern.

function updatePlayerLevel() {
    let tempLevel = Math.floor(playerXP / playerXPperLevel);            // Spieler-Level = XP / XPproLevel
    document.getElementById("xpCounter").innerHTML = "Player-Level: " + tempLevel + " (XP: " + playerXP + " / " + playerXPperLevel + ")"; // Baue den String für die Spieler-Info zusammen
    console.log("Spieler " + playerName + " hat nun Level " + tempLevel + " mit " + playerXP + " (" + playerXPperLevel + " pro Level)"); // Spieler-Level in der Konsole.
}
//# sourceMappingURL=62-TS-Example.js.map
//# sourceMappingURL=62-TS-Example.js.map