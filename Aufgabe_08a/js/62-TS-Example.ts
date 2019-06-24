// BEISPIEL UND AUFGABE:
// Dieses Skript soll als Beispiel dazu dienen, wie Interfaces und Arrays genutzt werden kÃ¶nnen.
// Hier wird ein ungefÃ¤hrer Aufbau eines simplen Klick-Spiels gezeigt. Der Nutzer kann dabei durch Button ein neues Monster erstellen.
// Zu beginn werden hier zuerst Interfaces, danach Variablen deklariert.
// Weiter unten kommen dann die Funktionen.

// EINGEBAUTE FEHLER: Innerhalb jedes Programmteiles wurden ein paar fiese Fehler eingebaut!
// Diese werden vermutlich erst in der Browser-Konsole angezeigt.
// Testet also alle Funktionen, jeden Button welchen ihr finden kÃ¶nnt!
// Hilfe: Benutzt auf Verdacht ein Konsolen-Log oder ruft die Variable in der Konsole des Browsers auf.
// Hilfe2: Betrachtet den umliegenden Code. Trackt die Werte von Variablen, falls euch etwas komisch vorkommt!

// ------- interfaces --------- //
// INSGESAMT EINGEBAUTE FEHLER beu den interfaces: Keine. (0 / null)

// Monster sind vielfÃ¤ltig und kÃ¶nnen sehr unterschiedlich sein. Dennoch werden sie durch allgemeine Attribute, wie Name und Lebenspunkte, vereint.
// Deshalb wird hier ein interface genutzt!
// Ein interface erlaubt das erstellen von einem ungefÃ¤hrem Haupt-Objekt.
// Object = Komplexer Datentyp auf Grundlage primitiver Datentypen

interface Monster {
    monsterName : string; // Name des Monsters
    monsterHealthPoints : number; // Lebenspunkte
    monsterExperience : number; // Erfahrungspunkte bei besiegen des Monsters
    monsterModifier : string []; // Monster-VerstÃ¤rker. Diese sind in diesem Fall nur Text! (Da hier einfacher Zufall fÃ¼r die Auswahl genutzt wird, kann der gleiche Eintrag auch doppelt vorkommen)
    monsterAge: number; //Alter des Monsters
    monsterImage: string //Aussehen des Monsters
}


// ------- Variablen -------- //
// INSGESAMT EINGEBAUTE FEHLER bei den Variablen: I (1 / einer)

let monsterHolder : string = "monsterHoldingCell";                                  // ID fÃ¼r das Haupt-Element, in welchem die Monster sich befinden werden. Wird vielleicht mehrfach in dem Skript gebraucht, deshalb einmalig definitiert.

let playerName : string = "Spielername";                                            // Ein paar globale Variablen, welche den Spieler darstellen.
let playerXP : number = 0;    //Fehler: Variable wurde nicht genauer definiert, kein eigentlicher Wert zugewiesen                                                      // Stellt die gesammelte Erfahrung des Spielers dar.
let playerXPperLevel : number = 500;                                                // Da es nur einen Spieler gibt, ergibt sich noch nicht viel Sinn darin, fÃ¼r den Spieler ein interface (im Sinne der Programmierung) zu erstellen.

// Mehrere Arrays, welche jeweils Bauteile fÃ¼r Namen oder Eigenschaften der Monster beinhalten.
let prefix = ["Sumpf-", "Riesen-", "Arbeitssuchendes ", "Gift-", "Brennende(s) ", "Kniescheibenzertrümmernde(s) "]; // length = 6, da 6 Einträge. Von 0-5.
let monsterName = ["Dämon", "Lustmolch", "Ungeziefer"]; // length = 3, da 3 Einträge. Von 0-2.
let suffix = [" des Verderbens", " aus der Hölle", " der Lethalität", " mit Rheuma", " der Weiber", " der Zerberstung"]; // length = 6, da hier 6 Einträge sind. Von 0-5.
let monsterModifers = ["schreit nur rum", "hat nichts zu sagen", "voller Komplexe", "ohne Rücksicht", "ist Ematrikuliert", "hat 10 Anzeigen", "Verwirrt", "Wasserscheu", "Bipolar", "Hat Schnupfen", "Verläuft sich oft"]; // Eine Reihe von zufälligen "Verstärkern" für das Monster.

let monsterAge: number[] = [ 1, 3, 5, 12, 6];
let monsterImage: string[] = ["p1.png", "g5.gif", "g3.gif", "g7.gif"];
let ArrayPush = []

// -- Initialisierung fÃ¼r viele/variable Anzahl an Monster --
let monsterArray : Monster[] = []; // Das Haupt-Array wurde erstellt und initialisiert!
console.log(monsterArray ); // Gebe das Monster-Array einmal zu beginn aus. Es sollte leer sein.


// ----------- Funktionen ----------- //
// INSGESAMT EINGEBAUTE FEHLER bei den Funktionen: IIIII (5 / fÃ¼nf)

// Generelle onload-funktion um Event-Listener zum Dokument hinzuzufÃ¼gen
window.onload = function () {
    document.getElementById("monsterSpawner").addEventListener("click", generateMonster, false);
    updatePlayerLevel(); // Zu Anfang wird durch eine Funktion ein HTML-Element mit Inhalt befÃ¼llt.
    console.log(document.getElementById("monsterSpawner").innerHTML); // Fehler: console.log muss in window.onload rein
    document.getElementById("Button2").addEventListener("click", push);
}

// Die Hauptfunktion, um ein Monster zu erstellen. Wird von einem Button ausgerufen.
// Generiert ein neues Monster. Dieses wird zu dem Monster-Array hinzugefÃ¼gt.
// Ruft eine Funktion auf, welche dann das entsprechende HTML erzeugt.
function generateMonster()
{
    let newMonsterName : string = generateMonsterName();                // Eigens-gebaute Funktion, welche einen string zurÃ¼ck gibt.
    let newMonsterHP : number = generateMonsterHitPoints();             // Eigens-gebaute Funktion, welche eine Zahl zurÃ¼ck gibt.
    let newMonsterXP : number = generateMonsterXP();                    // Eigens-gebaute Funktion, welche eine Zahl zurÃ¼ck gibt.
    let newMonsterModifier : string[] = generateMonsterModifer();       // Eigens-gebaute Funktion, welche ein string-Array zurÃ¼ck gibt.
    let newMonsterAge: number = generateMonsterAge(); //Funktion fÃ¼r Alter des Monster
    let newMonsterImage: string = generateMonsterImage(); //Funktion fÃ¼r Monster-Image


    let newMonster : Monster = {                                        // Monster wird erstellt.
        monsterName : newMonsterName,
        monsterHealthPoints : newMonsterHP,
        monsterExperience : newMonsterXP,
        monsterModifier : newMonsterModifier,
        monsterAge : newMonsterAge,
        monsterImage: newMonsterImage

        //monsterMoney : 0, monsterMoney wurde vorab nicht definiert
    };

    monsterArray.push(newMonster);                                      // Monster wird erst in diesem Schritt zu dem Array hinzugefÃ¼gt

    console.log(monsterArray[monsterArray.length -1].monsterExperience);                    // Man kann nur auf Array-Teile zugreifen, welche definiert sind. -1 ist nicht definitiert (und wird es auch nie sein). Fehler: Arrayname.length gibt die LÃ¤nge des Arrays aus, da aber von null an gezÃ¤hlt wird, muss 1 abgezogen werden.

    monsterGenerateHTML();                                              // Triggere die Generierung von HTML
}

// Generiert HTML-Elemente, welche dann einem Element untergeordnet werden. Erzeugt ebenfalls einen Event-Listener auf dem Button.
function monsterGenerateHTML()
{
    let holdingDiv : HTMLElement = document.createElement("div");       // Erstelle ein neues HTML-Element vom typ <div>. Es ist jedoch noch nicht zu sehen!
    holdingDiv.setAttribute("id", "monster" + monsterArray.length);     // Die ID jedes neu-erstellten Monsters entspricht der aktuellen Array-LÃ¤nge.
    holdingDiv.setAttribute("class", "monster");                        // Klasse fÃ¼r Visuals.
    document.getElementById(monsterHolder).appendChild(holdingDiv);     // Das HTML-Element muss erst noch zu einem Objekt hinzugefÃ¼gt werden, in diesem Fall mit der id "monsterHoldingCell"

    let monsterName : HTMLElement = document.createElement("p");        // Generiere einen <p>
    monsterName.innerHTML = monsterArray[monsterArray.length - 1].monsterName;                     // Inhalt des <p>: Monster-Name des letzten Monsters im Array.
    holdingDiv.appendChild(monsterName);                                // FÃ¼ge das <p> zum HTML-Dokument hinzu, indem es dem holding-Div angefÃ¼gt wird.

    let monsterMod : HTMLElement = document.createElement("p");        // Generiere einen <p>
    monsterMod.innerHTML = monsterArray[monsterArray.length - 1].monsterModifier[0] + ", " +  monsterArray[monsterArray.length -1].monsterModifier[1]; // Inhalt des <p>: Monster-Modifizierer null und eins
    holdingDiv.appendChild(monsterMod);                                // FÃ¼ge das <p> zum HTML-Dokument hinzu, indem es dem holding-Div angefÃ¼gt wird.

    let monsterImg : HTMLElement = document.createElement("img");       // Erstelle ein <img>-Element
    monsterImg.setAttribute("src", "imgs/" + monsterArray [monsterArray.length -1].monsterImage);                 // Der Pfad fÃ¼r das Bild muss Ã¼ber setAttribute festgelegt werden. Der Bildpfad kann natÃ¼rlich auch anders aussehen.
    monsterImg.setAttribute("alt", "Schreckliches Monster");            // Das alt fÃ¼r das Bild wird hier festgelegt.
    holdingDiv.appendChild(monsterImg);   // FÃ¼ge das Bild zu dem holding-div hinzu (<div>, welche ein paar Zeilen zuvor erstellt worden ist)

    let monstAge : HTMLElement = document.createElement("p");
    monstAge.innerHTML = "Alter: " + monsterArray[monsterArray.length -1].monsterAge + " Jahr(e)"
    holdingDiv.appendChild(monstAge); //Monster-Alter wird eingefÃ¼gt

    let monsterBtn : HTMLElement = document.createElement("BUTTON");    // Erstelle ein <button>-Element
    monsterBtn.innerHTML = "Monster bekÃ¤mpfen!";                        // VerÃ¤ndere den Inhalt des HTML-Elementes. Der genaue Text ist dabei euch Ã¼berlassen.
    holdingDiv.appendChild(monsterBtn);                                 // FÃ¼ge den Button zu dem holding-div hinzu.

    let monsterCount : number = monsterArray.length;                    // Die aktuelle Anzahl vorhandener Monster, zudem auch die neue Zahl fÃ¼r das Monster-Array.
    console.log("Aktuelle Anzahl an Monstern: " + monsterCount);

    monsterBtn.addEventListener(                                        // FÃ¼ge dem Monster eine Funktion hinzu.
        'click', function() {                                           // Wird bei Maus-Click ausgelÃ¶st.
            fightMonster(monsterCount);                                 // Wenn das Monster erstellt wird erhÃ¤lt die Funktion einen Parameter, welcher der aktuellen Anzahl entspricht.
        }, false);                                                      // Ignoriert das false.
}


// Wird fÃ¼r den Zugriff auf eine zufÃ¤llige Stelle in einem Array aufgerufen.
// [ ] Optionale Aufgabe: verkleinere diesen Code auf eine Zeile mit nur einem Semikolon!
// Muss mit einer Zahl aufgerufen werden: getRNGNumber(5); // Liefert eine ganze Zahl zwischen 0 bis 4 zurÃ¼ck.
function getRNGNumber(_maxNumber : number) : number
{
    let rngNumber : number = Math.random();                             // Macht folgendes: Generiere eine zufÃ¤llige Komma-Zahl zwischen 0 - 1.
    rngNumber = rngNumber * _maxNumber;                                 // Multipliziere diese Zahl mit der LÃ¤nge des entsprechenden Array (hier: _maxNumber, ein Parameter, siehe in der runden Klammer der Funktion).
    rngNumber = Math.floor(rngNumber);                                  // Floore diese Zahl, damit diese nun Ganzzahlig ist.
    // Diese Zeile ist einer der drei Fehler in den Funktionen. Ich bin mal so frei und vermerke das hier. Einfach lÃ¶schen und alles wird besser. Fehlerzeile gelÃ¶scht
    return rngNumber;                                                   // Gebe diese Zahl zurÃ¼ck, Funktion kann Ã¤hnlich einer Variable in Rechnungen genutzt werden.
}


// Diese Funktion gibt einen zusammengewÃ¼rfelten Namen zurÃ¼ck.
// Wird fÃ¼r die Monster-generierung verwendet!
// Liefert einen zusammengesetzten String zurÃ¼ck.
function generateMonsterName() : string
{
    let generatedMonsterName : string = ""; // Erstelle einen leeren String fÃ¼r das Monster

    // Monster-Vorname
    // Mathematik! Hier wird eine zufÃ¤llig-generierte Zahl benÃ¶tigt.
    let rngNumber : number = getRNGNumber(prefix.length);               // Der RÃ¼ckgabewert der Funktion wird hier verwendet um den entsprechenden Teil des Namens (hier: Anfang) zu generieren.
    generatedMonsterName = prefix[rngNumber];                           // FÃ¼ge den Monsternamen zusammen: nimm aus dem entsprechenden Array mit der zufallsgenerierten Zahl den entsprechenden Eintrag.

    // Monster-Mittelname
    rngNumber = getRNGNumber(monsterName.length);                       // Der RÃ¼ckgabewert der Funktion wird hier verwendet um den entsprechenden Teil des Namens (hier: Mitte) zu generieren.
    generatedMonsterName += monsterName[rngNumber];                             // FÃ¼ge den Monsternamen zusammen: nimm aus dem entsprechenden Array mit der zufallsgenerierten Zahl den entsprechenden Eintrag. Fehler? Es wurde immer nur 0 ausgewÃ¤hlt und keine rngNumber

    // Monster-Titel
    rngNumber = getRNGNumber(suffix.length);                            // Der RÃ¼ckgabewert der Funktion wird hier verwendet um den entsprechenden Teil des Namens (hier: Ende) zu generieren.
    generatedMonsterName += suffix[rngNumber];                          // FÃ¼ge den Monsternamen zusammen: nimm aus dem entsprechenden Array mit der zufallsgenerierten Zahl den entsprechenden Eintrag.

    return generatedMonsterName;
}


// Wird fÃ¼r die Monster-Lebenspunkte aufgerufen.
// Liefert eine variierende Zahl zurÃ¼ck.
function generateMonsterHitPoints() : number
{
    // Diese Funktion gibt eine zufÃ¤llige ganze Zahl (zwischen 0 und 10) + 1 zurÃ¼ck.
    let tempMonsterHP : number = 1 + getRNGNumber(10);
    return tempMonsterHP;
}


// Wird fÃ¼r die Erstellung der Monster-Lebenspunkte aufgerufen.
// Liefert eine variierende Zahl zurÃ¼ck.
function generateMonsterXP() : number
{
    // Diese Funktion gibt eine zufÃ¤llige ganze Zahl (zwischen 0 und 650) + 300 zurÃ¼ck.
    let tempMonsterXP : number = 300 + getRNGNumber(650);
    return tempMonsterXP;
}


// Wird fÃ¼r die Erstellung der Monster-Modifizierer aufgerufen.
// Liefert ein Array mit zwei EintrÃ¤gen zurÃ¼ck.
function generateMonsterModifer() : string[]
{
    let tempMonsterMod : string[] = [];                                         // Initialisiere ein leeres Array (verhindert Folge-Fehler)
    tempMonsterMod[0] = monsterModifers[getRNGNumber(monsterModifers.length)];  // Setze Schublade 0 des Arrays auf einen Wert.
    tempMonsterMod[1] = monsterModifers[getRNGNumber(monsterModifers.length)];  // Setze Schublade 1 des Arrays auf einen Wert.
    return tempMonsterMod;                                                      // Gebe das hier zusammengesetzte Array wieder zurÃ¼ck.
}

function generateMonsterImage()
{
    let rngNumber = getRNGNumber(monsterImage.length);
    return monsterImage[rngNumber];
}

function generateMonsterAge()
{
    let rngNumber = getRNGNumber(monsterAge.length);
    return monsterAge[rngNumber];
}


// Aufgerufen, wenn man auf den Button klickt.
// Der Spieler kÃ¤mpft gegen das entsprechende Monster. Er erhÃ¤lt dann Erfahrungspunkte.
function fightMonster(_index : number)
{

    console.log("Spieler kÃ¤mpft gegen Monster und gewinnt!");                       // Ohne Logik mit if/else ist so etwas wie ein Kampf nicht leicht umzusetzen.
    console.log("Das Monster weigert sich zu verschwinden.");                       // Wird nÃ¤chste Stunde erweitert.

    playerXP += monsterArray[_index - 1].monsterExperience;                 	    // _index ist in diesem Fall die LÃ¤nge des Arrays - allerdings zÃ¤hlt der Computer beginnend von null, nicht eins! Deshalb _index-1.

    updatePlayerLevel();
}


// Aufgerufen, um das HTML-Element, welches das Spieler-Level darstellt, zu erneuern.
function updatePlayerLevel()
{
    let tempLevel : number = Math.floor(playerXP / playerXPperLevel);    // Spieler-Level = XP / XPproLevel

    document.getElementById("xpCounter").innerHTML = "Player-Level: " + tempLevel + " (XP: " + playerXP + " / " + playerXPperLevel * /*multiplizieren statt addieren*/ (tempLevel + 1) + ")";       // Baue den String fÃ¼r die Spieler-Info zusammen
    console.log("Spieler " + playerName + " hat nun Level " + tempLevel + " mit " + playerXP + " (" + playerXPperLevel + " pro Level)");        // Spieler-Level in der Konsole.
}

let newMonsters = "New Monsters"
function push()
{
    //ArrayPush.push(newMonsters);
    //console.log(ArrayPush);
}
