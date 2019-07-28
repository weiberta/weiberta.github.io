const werte = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];                                        // Kartenwert Deklaraztion
const farben = ["karo", "herz", "pik", "kreuz"];                                                                         // Kartenfarben Deklaration

let stapel: any = [];                                                                                                    // Kartenstapel Array
let spielerHand: any = [];                                                                                               // Spieler Hand Array
let computerHand: any = [];                                                                                              // Computer Hand Array
let ablage: any = [];                                                                                                    // Kartenablage Array

let spielbareKarte: any;                                                                                                 // Buffer für spielbare Karte des Computers
let gezogeneKarte;                                                                                                       // Buffer für gezogene Karte des Spielers
let gewonnen = false;                                                                                                    // If true -> Spieler hat gewonnen
let verloren = false;                                                                                                    // If true -> Spieler hat verloren


/**
 * Start Funktion wird nach Laden der Seite ausgeführt.
 * Ruft nacheinander Funktionen des Spiels auf.
 */

function start() {
    stapel = erzeugeStapel();                                                                                            // Stapel Array wird mit Rückgabewert der "erzeugeStapel" Funktion befüllt
    mischen();                                                                                                           // Kartenstapel wird gemischt
    austeilen();                                                                                                         // Karten werden verteilt
    startKarte();                                                                                                        // Startkarte wird auf Ablage gelegt
    computerHandAnzeigen();                                                                                              // Hand des Computers wird in html erzeugt
    spielerHandAnzeigen();                                                                                               // Hand des Spielers wird in html erzeugt
    ablageAnzeigen();                                                                                                    // Ablage wird in html erzeugt
}

/**
 * Kartenstapel mit insgesamt 52 verschiedenen Karten generierieren
 */

function erzeugeStapel() {
    let stapel = [];                                                                                                     // Stapel Array

    for (let i = 0; i < farben.length; i++) {                                                                            // Schleife durchläuft alle Farben
        for (let x = 0; x < werte.length; x++) {                                                                         // Schleife durchläuft alle Werte
            let karte = {Wert: werte[x], Farbe: farben[i]};                                                              // Karte mit Farbe & Wert wird erzeugt
            stapel.push(karte);                                                                                          // Karte wird in Stapel gepusht
        }
    }
    return stapel;                                                                                                       // Stapel wird an auslösende Funktion zurück gegeben
}

/**
 * Alle gelegte Karten außer der obersten in Stapel mischen
 */

function neuerStapel() {
    stapel = ablage;                                                                                                     // Kartenstapel mit den Karten der Ablage befüllen
    ablage.length = 0;                                                                                                   // Ablage Array entleeren
    ablage.push(stapel.pop());                                                                                           // Oberste Karte des Stapels auf Ablage legen -> letzte gelegte Karte bleibt liegen
    mischen();                                                                                                           // Kartenstapel mischen
}

/**
 * Kartenstapel mischen indem die Werte von 2 Karten zufälliger Position getauscht werden
 */

function mischen() {
    for (let i = 0; i < 1000; i++) {                                                                                     // 1000 Durchläufe
        let position1 = Math.floor((Math.random() * stapel.length));                                                     // zufällige Position von 1 - 52
        let position2 = Math.floor((Math.random() * stapel.length));                                                     // zufällige Position von 1 - 52
        let tmp = stapel[position1];                                                                                     // Temporärer Speicher für  Wert der Karte an der Position 1
        stapel[position1] = stapel[position2];                                                                           // Karte der Position 1 wird mit dem Wert der Karte der Position 2 ersetzt
        stapel[position2] = tmp;                                                                                         // Karte der Position 2 wird mit dem Wert der Karte der Position 1 ersetzt
    }
}

/**
 * Teile dem Spieler und dem Computer jeweils 5 Karten aus
 */

function austeilen() {
    for (let i = 1; i < 6; i++) {                                                                                        // 5 Durchläufe
        spielerHand.push(stapel.pop());                                                                                  // Dem Stapel 1 Karte entnehmen und Spieler geben
        computerHand.push(stapel.pop());                                                                                 // Dem Stapel 1 Karte entnehmen und Computer geben
    }
}

/**
 * Lege Startkarte auf den Ablagestapel
 */

function startKarte() {
    ablage.push(stapel.pop());                                                                                           // Startkarte aus Stapel entnehmen und auf Ablage legen
}

/**
 * Spieler - Karte vom Stapel ziehen und in Hand aufnehmen
 */

function spielerZiehen() {
    spielerHand.push(stapel.pop());                                                                                      // Karte aus Stapel entnehmen und in Hand aufnehmen
    spielerHandAnzeigen();                                                                                               // Spieler Hand Grafik aktualisieren
    gezogeneKarte = spielerHand[spielerHand.length - 1];                                                                 // Gezogene Karte in variable kopieren
    if (spielbar(gezogeneKarte) === false) {                                                                             // Abfrage mit Überprüfung ob gezogene Karte spielbar ist
        spielzugComputer();                                                                                              // Falls nein -> Computer beginnt seinen Spielzug
    }

}

/**
 * Computer - Karte vom Stapel ziehen und in Hand aufnehmen
 */

function computerZiehen() {
    computerHand.push(stapel.pop());                                                                                     // Karte aus Stapel entnehmen und in Hand aufnehmen
    computerHandAnzeigen();                                                                                              // Computer Hand Grafik aktualisieren
}

/**
 * Spielzug des Spielers -> Karte legen
 */

function spielzugSpieler() {

    if (stapel.length === 0) {                                                                                           // Abfrage ob Stapel leer ist
        neuerStapel();                                                                                                   // Falls Abfrage true -> neuen Stapel erzeugen
    }

    let id = this.id;                                                                                                    // ID der angeklickten Karte abfragen

    if (spielbar(spielerHand[id])) {                                                                                     // Abfrage ob angeklickte Karte spielbar, ist mit Hilfe der "spielbar()" Funktion
        ablage.push(spielerHand[id]);                                                                                    // Falls Karte spielbar -> Angeklickte Karte in Ablage Array kopieren
        spielerHand.splice(id, 1);                                                                                       // Angeklickte Karte aus "spielerHand" Array entfernen
        spielerHandAnzeigen();                                                                                           // Spielerhand in html generieren
        ablageAnzeigen();                                                                                                // Ablage in html generieren
    } else {
        alert("Diese Karte kann nicht gelegt werden");                                                                   // Falls Karte nicht spielbar -> Popup mit Hinweis an den Spieler
        return;                                                                                                          // Aus Funktion ausbrechen
    }

    if (spielerHand.length === 0) {                                                                                      // Abfrage ob Spieler noch Karten in der Hand hat
        gewonnen = true;                                                                                                 // Falls keine Karten mehr in der Hand -> gewonnen Variable wird auf true gesetzt
    } else {
        spielzugComputer();                                                                                              // Falls nicht gewonnen -> Gegner ist dran
    }
    winLose();                                                                                                           // Überprüfen ob Spieler gewonnen oder verloren hat
}

/**
 * Spielzug des Gegners
 * -> Prüfen ob legbare Karte in Hand
 * -> Karte legen oder Karte ziehen
 */

function spielzugComputer() {
    let kannSpielen = false;                                                                                             // kannSpielen variable -> kann COM eine Karte legen? Default = false
    for (let i = 0; i < computerHand.length && !kannSpielen; i++) {                                                      // Durchlauf aller Karten bis spielbare Karte gewonnen oder alle Karten gecheckt
        if (spielbar(computerHand[i])) {                                                                                 // Abfrage ob Karte spielbar
            kannSpielen = true;                                                                                          // Falls spielbare Karte gefunden -> kannSpielen wird auf true gesetzt
            spielbareKarte = i;                                                                                          // id der spielbaren Karte in "spielbareKarte" variable speichern
        }
    }

    if (kannSpielen) {                                                                                                   // Abfrage ob Computer Karte legen kann
        ablage.push(computerHand[spielbareKarte]);                                                                       // Falls ja -> spielbare Karte aus Hand auf Stapel legen
        computerHand.splice(spielbareKarte, 1);                                                                          // gelegte Karte aus Hand des Computers entfernen
        computerHandAnzeigen();                                                                                          // Hand des Computers in html generieren
        ablageAnzeigen();                                                                                                // Ablage in html generieren
    } else {
        if (stapel.length === 0) {                                                                                       // Falls keine Karte spielbar -> Abfrage ob noch Karten im Stapel vorhanden
            neuerStapel();                                                                                               // Falls Stapel leer -> Karten aus Ablage in Stapel legen
        }
        computerZiehen();                                                                                                // Computer zieht Karte
        computerHandAnzeigen();
    }

    if (computerHand.length === 0) {                                                                                     // Abfrage ob Computer noch Karten in der Hand hat
        verloren = true;                                                                                                 // Falls keine Karten mehr in der Hand -> verloren Variable wird auf true gesetzt
    }
    winLose();
}

/**
 * Prüfen ob Spieler gewonnen oder verloren hat
 */

function winLose() {
    if (gewonnen) {                                                                                                      // Abfrage ob "gewonnen" variable auf true gesetzt ist
        window.alert("WINNER, WINNER, CHICKEN DINNER");                                                                  // Falls ja-> Popup mit Siegesnachricht
        location.reload();                                                                                               // Seite neu laden -> spiel beginnt von vorne
    } else if (verloren) {                                                                                               // Abfrage ob "veroren" variable auf true gesetzt ist
        window.alert("THIS WAS A BIG L");                                                                                // Falls ja -> Popup mit Nachricht über Niederlage
        location.reload();                                                                                               // Seite neu laden -> Spiel beginnt von vorne
    }
}

/**
 * Prüfen ob Karte gelegt werden kann.
 * (Wert oder Farbe gleich).
 */

function spielbar(gelegteKarte: any) {                                                                                        // Kartenobjekt Parameterübergabe
    let obersteKarte = ablage[ablage.length - 1];                                                                        // "obersteKarte" Variable mit Karte welche oben auf Stapel liegt befüllen
    return (gelegteKarte.Farbe === obersteKarte.Farbe) || (gelegteKarte.Wert === obersteKarte.Wert);                     // Prüfung ob Farbe oder Wert übereinstimmen -> Rückgabewert true oder false;
}

/**
 * Spieler Hand in html anzeigen
 */

function spielerHandAnzeigen() {
    let zaehler = 0;                                                                                                     // Zähler für Karten ID's
    document.getElementById('spielerHand').innerHTML = '';                                                     // Inhalt des "spielerHand" div entleeren
    for (let i = 0; i < spielerHand.length; i++) {                                                                       // Durchläufe in Höhe der Anzahl an Karten in der Hand
        let karte = document.createElement("div");                                                              // Karte Element erzeugen
        let wert = document.createElement("div");                                                               // Kartenwert Element erzeugen
        let farbe = document.createElement("div");                                                              // Kartenfarbe Element erzeugen

        karte.className = "karte";                                                                                       // Karte Klasse setzen
        wert.className = "wert";                                                                                         // Wert Klasse setzen
        farbe.className = "farbe " + spielerHand[i].Farbe;                                                               // Farbe Klasse setzen
        karte.id = zaehler.toString();                                                                                   // Karte ID setzen

        wert.innerHTML = spielerHand[i].Wert;                                                                            // div mit Kartenwert aus spielerHand Array an Position "i" befüllen
        karte.appendChild(wert);                                                                                         // Wert an Karte div anhängen
        karte.appendChild(farbe);                                                                                        // Farbe an Karte div anhängen
        karte.addEventListener("click", spielzugSpieler);                                                          // click EventListener erzeugen -> klick auf karte löst Spielzug Funktion aus
        document.getElementById("spielerHand").appendChild(karte);                                             // Karte an "spielerHand" div in html Dokument anhängen
        zaehler++;                                                                                                       // Zähler + 1

    }
}

/**
 * Computer Hand in html anzeigen
 */

function computerHandAnzeigen() {
    document.getElementById('computerHand').innerHTML = '';                                                    // Inhalt des "computerHand" div entleeren

    for (let i = 0; i < computerHand.length; i++) {                                                                      // Durchläufe in Höhe der Anzahl an Karten in der Hand
        let karte = document.createElement("div");                                                              // Karte Element erzeugen
        let wert = document.createElement("div");                                                               // Kartenwert Element erzeugen
        let farbe = document.createElement("div");                                                              // Kartenfarbe Element erzeugen

        karte.className = "karte";                                                                                       // Karte Klasse setzen
        wert.className = "wert";                                                                                         // Wert Klasse setzen
        farbe.className = "farbe " + computerHand[i].Farbe;                                                              // Farbe Klasse setzen

        wert.innerHTML = computerHand[i].Wert;                                                                           // div mit Kartenwert aus "computerHand" Array an Position "i" befüllen

        karte.appendChild(wert);                                                                                         // Wert an Karte div anhängen
        karte.appendChild(farbe);                                                                                        // Farbe an Karte div anhängen
        document.getElementById("computerHand").appendChild(karte);                                            // Karte an "computerHand" div in html Dokument anhängen
    }
}

/**
 * Kartenablage in html anzeigen
 */

function ablageAnzeigen() {
    document.getElementById('ablage').innerHTML = '';                                                          // Inhalt des "ablage" div entleeren

    let karte = document.createElement("div");                                                                  // Karte Element erzeugen
    let wert = document.createElement("div");                                                                   // Kartenwert Element erzeugen
    let farbe = document.createElement("div");                                                                  // Kartenfarbe Element erzeugen

    karte.className = "karte";                                                                                           // Karte Klasse setzen
    wert.className = "wert";                                                                                             // Wert Klasse setzen
    farbe.className = "farbe " + ablage[ablage.length - 1].Farbe;                                                        // Farbe Klasse setzen

    wert.innerHTML = ablage[ablage.length - 1].Wert;                                                                     // div mit Kartenwert aus "ablage" Array an Position "i" befüllen
    karte.appendChild(wert);                                                                                             // Wert an Karte div anhängen
    karte.appendChild(farbe);                                                                                            // Karte an "ablage" div in html Dokument anhängen
    document.getElementById("ablage").appendChild(karte);

}

window.onload = start;                                                                                                   // start Funktion wird nach dem Laden der Seite ausgeführt