// Da ich Katzen (= Kisjas) sehr mag, werden alle zukünftigen Aufgaben
// mit einem Kisja-orientierten Theme erstellt
// Konsolenausgabe nach Start
console.log("Hi na");
console.log(" :3 ");
// Berechnungen
// number + number
console.log("_______________________________________________________________________");
let NR1 = 8;
let NR2 = 2;
NR1 = 1; // Neuer Wert
console.log(" number + number] ");
console.log("1 + 2 = ");
console.log(NR1 + NR2);
// sting + string
console.log("_______________________________________________________________________");
let vK1 = " ฅ^•ﻌ•^ฅ";
let vK2 = " ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡";
console.log("string + string ] ");
console.log(vK1 + vK2);
// string + number
console.log("_______________________________________________________________________");
let Ask = "In einer Skala von 0-10, wie toll sind Kisjas?  -  ";
let Scale = 3.141592653589793238462643383279502884197169399375105820974944592307816406286208998628034825342117067;
console.log("string + number ] ");
console.log(Ask + Scale);
console.log("_______________________________________________________________________");
let hungry = Boolean(true);
let count = 0;
let text = " Fische hat die Kisja gesanckt";
window.onload = function () {
    // Skript soll mehrere Funktionen enthalten
    // DoStuff1, mouseOver, mouseOut, feedTheCat
    document.getElementById("1").addEventListener("click", DoStuff1);
    document.getElementById("2").addEventListener("mouseover", mouseOver);
    document.getElementById("2").addEventListener("mouseout", mouseOut);
    document.getElementById("button").addEventListener("click", changeClass);
};
function DoStuff1() {
    console.log("Glückwunsch, du hast das obere Fenster gedrückt!");
    console.log("Was wohl passiert, wenn du das zweite drückst?");
    console.log("find's doch raus! trau dich!");
    alert("Ich liebe es, wenn sich neue Fenster öffnen, das ist so aufregend!");
}
function mouseOver() {
    document.getElementById('2').innerHTML = "ฅ^•ﻌ•^ฅ<br>gefangen! <br> <h5> ↑ klick mich zum füttern ↑ </h5>";
    document.getElementById('2').addEventListener("click", feedTheCat);
}
function mouseOut() {
    // Event-Listener soll bei einem "click" seinen Inhalt verändern
    document.getElementById('2').innerHTML = "Schwimm hier her!";
    if (hungry != false) {
        document.getElementById("claim").innerHTML = "HUUUUNGRY";
    }
    else {
        document.getElementById("claim").innerHTML = "nom nom nom";
    }
}
function feedTheCat() {
    hungry = false;
    document.getElementById("claim").innerHTML = "schmaaaatz";
    console.log(count.valueOf());
    document.getElementById('fish').innerHTML += "<img src=fisch.png>";
    count++;
    document.getElementById("zahl").innerHTML = count.toString() + text;
}
function changeClass() {
    if (document.getElementById("button").className == 'button1') {
        this.className = 'button2';
    }
    else {
        this.className = 'button1';
    }
}

//# sourceMappingURL=script.js.map