// GESAMTE FEHLER ANZAHL : 6



//          I N T E R F A C E S

// Ein interface erlaubt das erstellen von einem ungefährem Haupt-Objekt.
// Object = Komplexer Datentyp auf Grundlage primitiver Datentypen (string, number, array)

interface Monster {
    monsterName : string; // Name des Monsters
    monsterHealthPoints : number; // Lebenspunkte
    monsterExperience : number; // Erfahrungspunkte bei besiegen des Monsters
    monsterModifier : string []; // Monster-Verstärker. Diese sind in diesem Fall nur Text! (Da hier einfacher Zufall für die Auswahl genutzt wird, kann der gleiche Eintrag auch doppelt vorkommen)
    Bildpfad : string []  ;
}

//          V A R I A B E L N
// INSGESAMT EINGEBAUTE FEHLER bei den Variablen: I (1 / einer) -


let saveImageSrc: string;
let monsterHolder ="monsterHoldingCell";                                  // ID für das Haupt-Element, in welchem die Monster sich befinden werden. Wird vielleicht mehrfach in dem Skript gebraucht, deshalb einmalig definitiert.
// sting muss nicht extra deklariert werde > "    "
let playerName : string = "Spielername";                                            // Ein paar globale Variablen, welche den Spieler darstellen.
let playerXP = 0;                                                          // Stellt die gesammelte Erfahrung des Spielers dar.
let playerXPperLevel = 500;                                                // Da es nur einen Spieler gibt, ergibt sich noch nicht viel Sinn darin, für den Spieler ein interface (im Sinne der Programmierung) zu erstellen.
// FEHLER - Nullsetzen für addition der Punkte

let prefix : string[] = ["Sumpf-", "Riesen-", "Arbeitssuchendes ", "Gift-", "Brennende(s) ", "Kniescheibenzertrümmernde(s) "]; // length = 6, da 6 Einträge. Von 0-5.
let monsterName : string[] = ["Dämon", "Lustmolch", "Ungeziefer"]; // length = 3, da 3 Einträge. Von 0-2.
let suffix : string[] = [" des Verderbens", " aus der Hölle", " der Lethalität", " mit Rheuma", " der Weiber", " der Zerberstung"]; // length = 6, da hier 6 Einträge sind. Von 0-5.
let monsterModifers : string[] = ["schreit nur rum", "hat nichts zu sagen", "voller Komplexe", "ohne Rücksicht", "ist Ematrikuliert", "hat 10 Anzeigen", "Verwirrt", "Wasserscheu", "Bipolar", "Hat Schnupfen", "Verläuft sich oft"]; // Eine Reihe von zufälligen "Verstärkern" für das Monster.
let Bildquellen: string[] = ["p1.png", "g5.gif", "g3.gif","g2.gif","g7.gif"]


// -- Initialisierung für viele/variable Anzahl an Monster --

let monsterArray: Monster[] = []; // Das Haupt-Array wurde erstellt und initialisiert!
console.log(monsterArray); // Gebe das Monster-Array einmal zu beginn aus. Es sollte leer sein.


//          F U N K T I O N E N
// INSGESAMT EINGEBAUTE FEHLER bei den Funktionen: IIIII (5 / fünf)

// Generelle onload-funktion um Event-Listener zum Dokument hinzuzufügen
window.onload = function () {
    document.getElementById("monsterSpawner").addEventListener("click", generateMonster, false);

    function updatePlayerLevel() {

    }

    updatePlayerLevel();                                // Zu Anfang wird durch eine Funktion ein HTML-Element mit Inhalt befüllt.
    console.log(document.getElementById("monsterSpawner").innerHTML);
    // 1. FEHLER - Element muss erst erstellt werden

    // . FEHLER - muss in die Funktion, sonst wird es nicht gleichzeitig geladen
};  // FEHLER ;




// Die Hauptfunktion, um ein Monster zu erstellen. Wird von einem Button ausgerufen.
// Generiert ein neues Monster. Dieses wird zu dem Monster-Array hinzugefügt.
// Ruft eine Funktion auf, welche dann das entsprechende HTML erzeugt.

let generateMonster: () => void;
generateMonster = () => {
    let tempRandom = getRNGNumber({_maxNumber: 3}) + 1;
    if (tempRandom == 1) {
        console.log("Sieh mal! es ist ein neues Monster gespawnt!");
    } else {
        console.log("Sieh mal! es sind " + tempRandom + " neue Monster gespawnt!");
    }
    for (let i = 0; i < tempRandom; i++) {
        let newMonsterName = generateMonsterName();                // Eigens-gebaute Funktion, welche einen string zurück gibt.
        let newMonsterHP = generateMonsterHitPoints();             // Eigens-gebaute Funktion, welche eine Zahl zurück gibt.
        let newMonsterXP = generateMonsterXP();                    // Eigens-gebaute Funktion, welche eine Zahl zurück gibt.
        let newMonsterModifier = generateMonsterModifer();       // Eigens-gebaute Funktion, welche ein string-Array zurück gibt.
        let newImageSource: string = saveImageSrc;

//KORREKTUR  Datentypen muss man nicht erneut deklarieren, wenn sie schon deklariert wurden

        let newMonster = {                                        // Monster wird erstellt.
            // let newMonster : Monster, "Monster" gibt es nicht
            monsterName: newMonsterName,
            monsterHealthPoints: newMonsterHP,
            monsterExperience: newMonsterXP,
            monsterModifier: newMonsterModifier,
            // monsterMoney : 0,
            // 2. FEHLER - undeklarierte Variable
            Bildpfad: newImageSource,
        };
        generateMonsterXP()
        monsterArray.push(newMonster);                                      // Monster wird erst in diesem Schritt zu dem Array hinzugefügt
        console.log(monsterArray[monsterArray.length - 1].monsterExperience);                    // Man kann nur auf Array-Teile zugreifen, welche definiert sind. -1 ist nicht definitiert (und wird es auch nie sein).
        // FEHLER - Array musste definiert werden, -1 da von 0 gezählt wird
        monsterGenerateHTML(monsterArray.length);

        // Triggere die Generierung von HTML
    }

// Generiert HTML-Elemente, welche dann einem Element untergeordnet werden. Erzeugt ebenfalls einen Event-Listener auf dem Button.
    function monsterGenerateHTML(count: number) {
        let holdingDiv: HTMLElement = document.createElement("div");       // Erstelle ein neues HTML-Element vom typ <div>. Es ist jedoch noch nicht zu sehen!
        holdingDiv.setAttribute("id", "monster" + count);     // Die ID jedes neu-erstellten Monsters entspricht der aktuellen Array-Länge.
        holdingDiv.setAttribute("class", "monster");                        // Klasse für Visuals.
        document.getElementById(monsterHolder).appendChild(holdingDiv);     // Das HTML-Element muss erst noch zu einem Objekt hinzugefügt werden, in diesem Fall mit der id "monsterHoldingCell"


        let monsterName: HTMLElement = document.createElement("p");        // Generiere einen <p>
        monsterName.innerHTML = monsterArray[count - 1].monsterName;                     // Inhalt des <p>: Monster-Name des letzten Monsters im Array.
        holdingDiv.appendChild(monsterName);                                // Füge das <p> zum HTML-Dokument hinzu, indem es dem holding-Div angefügt wird.


        let monsterMod: HTMLElement = document.createElement("p");        // Generiere einen <p>
        monsterMod.innerHTML = monsterArray[count - 1].monsterModifier[0] + " & " + monsterArray[count - 1].monsterModifier[1]; // Inhalt des <p>: Monster-Modifizierer null und eins
        holdingDiv.appendChild(monsterMod);                                // FÃ¼ge das <p> zum HTML-Dokument hinzu, indem es dem holding-Div angefÃ¼gt wird.


        let monsterImg: HTMLElement = document.createElement("img");       // Erstelle ein <img>-Element
        monsterImg.setAttribute("src", monsterArray[count -1].Bildpfad);                 // Der Pfad fÃ¼r das Bild muss Ã¼ber setAttribute festgelegt werden. Der Bildpfad kann natÃ¼rlich auch anders aussehen.
        monsterImg.setAttribute("alt", "Schreckliches Monster");            // Das alt fÃ¼r das Bild wird hier festgelegt.
        holdingDiv.appendChild(monsterImg);                                 // FÃ¼ge das Bild zu dem holding-div hinzu (<div>, welche ein paar Zeilen zuvor erstellt worden ist)


        let monsterBtn: HTMLElement = document.createElement("BUTTON");    // Erstelle ein <button>-Element
        monsterBtn.innerHTML = "Monster bekämpfen!";                        // Verändere den Inhalt des HTML-Elementes. Der genaue Text ist dabei euch überlassen.
        holdingDiv.appendChild(monsterBtn);                                 // Füge den Button zu dem holding-div hinzu.


        let monsterCount: number = count;                    // Die aktuelle Anzahl vorhandener Monster, zudem auch die neue Zahl fÃ¼r das Monster-Array.
        console.log("Aktuelle Anzahl an Monstern: " + monsterCount);


        monsterBtn.addEventListener(                                        // Füge dem Monster eine Funktion hinzu.
            'click', function () {                                           // Wird bei Maus-Click ausgelöst.
                fightMonster({_index: monsterCount});                                 // Wenn das Monster erstellt wird erhält die Funktion einen Parameter, welcher der aktuellen Anzahl entspricht.
            }, false);                                                      // Ignoriert das false.
    }


// Wird für den Zugriff auf eine zufällige Stelle in einem Array aufgerufen.
// [ ] Optionale Aufgabe: verkleinere diesen Code auf eine Zeile mit nur einem Semikolon!
// Muss mit einer Zahl aufgerufen werden: getRNGNumber(5); // Liefert eine ganze Zahl zwischen 0 bis 4 zurück.
    function getRNGNumber({_maxNumber}: { _maxNumber: any }) {
        /*  let rngNumber : number = Math.random();                             // Macht folgendes: Generiere eine zufällige Komma-Zahl zwischen 0 - 1.
          rngNumber = rngNumber * _maxNumber;                                 // Multipliziere diese Zahl mit der Länge des entsprechenden Array (hier: _maxNumber, ein Parameter, siehe in der runden Klammer der Funktion).
          rngNumber = Math.floor(rngNumber);                                  // Floore diese Zahl, damit diese nun Ganzzahlig ist.
          rngNumber = 0;                                                     // Diese Zeile ist einer der drei Fehler in den Funktionen. Ich bin mal so frei und vermerke das hier. Einfach löschen und alles wird besser.
          return rngNumber;  */                                                 // Gebe diese Zahl zurück, Funktion kann ähnlich einer Variable in Rechnungen genutzt werden.

        return Math.floor(Math.random() * _maxNumber);
    }


// Diese Funktion gibt einen zusammengewürfelten Namen zurück.
// Wird für die Monster-generierung verwendet!
// Liefert einen zusammengesetzten String zurück.
    function generateMonsterName(): string {
        let generatedMonsterName: string = ""; // Erstelle einen leeren String für das Monster

        // Monster-Vorname
        // Mathematik! Hier wird eine zufällig-generierte Zahl benötigt.
        let rngNumber: number = getRNGNumber({_maxNumber: prefix.length});               // Der Rückgabewert der Funktion wird hier verwendet um den entsprechenden Teil des Namens (hier: Anfang) zu generieren.
        generatedMonsterName = prefix[rngNumber];                           // Füge den Monsternamen zusammen: nimm aus dem entsprechenden Array mit der zufallsgenerierten Zahl den entsprechenden Eintrag.

        // Monster-Mittelname
        rngNumber = getRNGNumber({_maxNumber: monsterName.length});                       // Der Rückgabewert der Funktion wird hier verwendet um den entsprechenden Teil des Namens (hier: Mitte) zu generieren.
        generatedMonsterName += monsterName[rngNumber];                             // Füge den Monsternamen zusammen: nimm aus dem entsprechenden Array mit der zufallsgenerierten Zahl den entsprechenden Eintrag.
        // 3. FEHLER - Rangnummer kann nicht 0 sein, muss der RNG-NR entsprechen
        generateNewImageSource(rngNumber);

        // Monster-Titel
        rngNumber = getRNGNumber({_maxNumber: suffix.length});                            // Der Rückgabewert der Funktion wird hier verwendet um den entsprechenden Teil des Namens (hier: Ende) zu generieren.
        generatedMonsterName += suffix[rngNumber];                          // Füge den Monsternamen zusammen: nimm aus dem entsprechenden Array mit der zufallsgenerierten Zahl den entsprechenden Eintrag.

        return generatedMonsterName;
    }

    function generateNewImageSource(MonsterName: number) {
        if (Bildquellen.length >= monsterName.length) {
            saveImageSrc = "imgs/" + Bildquellen[MonsterName];
        } else {
            saveImageSrc = "imgs/stink.png";
        }

    }

// Wird für die Monster-Lebenspunkte aufgerufen.
// Liefert eine variierende Zahl zurück.
    function generateMonsterHitPoints(): number {
        // Diese Funktion gibt eine zufällige ganze Zahl (zwischen 0 und 10) + 1 zurück.
        let tempMonsterHP: number = 1 + getRNGNumber({_maxNumber: 10});
        return tempMonsterHP;
    }


// Wird für die Erstellung der Monster-Lebenspunkte aufgerufen.
// Liefert eine variierende Zahl zurück.
    function generateMonsterXP(): number {
        // Diese Funktion gibt eine zufällige ganze Zahl (zwischen 0 und 350) + 100 zurück.
        let tempMonsterXP: number = 100 + getRNGNumber({_maxNumber: 350});
        return tempMonsterXP;
    }


// Wird für die Erstellung der Monster-Modifizierer aufgerufen.
// Liefert ein Array mit zwei Einträgen zurück.
    function generateMonsterModifer(): string[] {
        let tempMonsterMod: string[] = [];                                         // Initialisiere ein leeres Array (verhindert Folge-Fehler)
        tempMonsterMod[0] = monsterModifers[getRNGNumber({_maxNumber: monsterModifers.length})];  // Setze Schublade 0 des Arrays auf einen Wert.
        tempMonsterMod[1] = monsterModifers[getRNGNumber({_maxNumber: monsterModifers.length})];  // Setze Schublade 1 des Arrays auf einen Wert.
        return tempMonsterMod;                                                      // Gebe das hier zusammengesetzte Array wieder zurück.
    }


// Aufgerufen, wenn man auf den Button klickt.
// Der Spieler kämpft gegen das entsprechende Monster. Er erhält dann Erfahrungspunkte.
    function fightMonster({_index}: { _index: any }) {
        console.log("Spieler kämpft gegen Monster und gewinnt!"); // Ohne Logik mit if/else ist so etwas wie ein Kampf nicht leicht umzusetzen.
        console.log("Das Monster und alle Anderen Monster die sehen was passiert verschwinden"); // Wird nächste Stunde erweitert.
        console.log("Du bekommst des Monsters ITEM! -> " + monsterArray[_index - 1].Item);
        playerXP += monsterArray[_index - 1].monsterExperience; // _index ist in diesem Fall die Länge des Arrays - allerdings zählt der Computer beginnend von null, nicht eins! Deshalb _index-1.
        updatePlayerLevel(monsterArray[_index - 1]);
        removeMonsters({_index: _index});
    }

    function removeMonsters({_index}: { _index: any }) {
        //let tempMonsterArray: Monster[] = [];
        //document.getElementById(monsterHolder).innerHTML = "";
        //monsterArray = tempMonsterArray;
        //console.log("so viel is noch im array" + monsterArray.length);
        document.getElementById(monsterHolder).innerHTML = "";
        let tempMonsterArray = [];
        let count = 0;
        while (count < _index - 1) {
            tempMonsterArray[count] = monsterArray[count];
            console.log("das Temporäre Array ist  " + tempMonsterArray[count].monsterName);
            count++;
        }
        while (count < monsterArray.length - 1) {
            tempMonsterArray[count] = monsterArray[count + 1];
            console.log("das Temporäre Array ist  " + tempMonsterArray[count].monsterName);
            count++;
        }
        count = 1;
        monsterArray = [];
        monsterArray = tempMonsterArray;
        while (count <= monsterArray.length) {
            monsterGenerateHTML(count);
            count++;
        }
    }


// Aufgerufen, um das HTML-Element, welches das Spieler-Level darstellt, zu erneuern.
    function updatePlayerLevel() {
        let tempLevel = Math.floor(playerXP / playerXPperLevel);

        document.getElementById("xpCounter").innerHTML = "Player-Level: " + tempLevel + " (XP: " + playerXP + " / " + playerXPperLevel * (tempLevel + 1) + ")";       // Baue den String für die Spieler-Info zusammen
        console.log("Spieler " + playerName + " hat nun Level " + tempLevel + " mit " + playerXP + " (" + playerXPperLevel + " pro Level)");        // Spieler-Level in der Konsole.
    }



};