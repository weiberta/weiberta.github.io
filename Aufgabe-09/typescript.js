window.addEventListener("load", handleLoad);
var crc2 = canvas.getContext("2d");
// hinzugefügt für das Haus
var crc2haus = canvas.getContext("2d");
var crc2dach = canvas.getContext("2d");
var crc2sonne = canvas.getContext("2d");
var crc2lift = canvas.getContext("2d");
var crc2wolke = canvas.getContext("2d");
var crc2huegel = canvas.getContext("2d");
var crc2besucher = canvas.getContext("2d");
var crc2schnee = canvas.getContext("2d");
// später irgendwie zusammenfassen
// let[crc2haus,crc2dach,crc2sonne,crc2lift,crc2wolke,crc2huegel,crc2besucher,crc2schnee] = canvas.getContext("2d");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth; //tutorial https://www.youtube.com/watch?v=EO6OkltgudE
canvas.height = window.innerHeight;
crc2 = canvas.getContext("2d");
var gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
gradient.addColorStop(0, "#fcfffe");
gradient.addColorStop(0.3, "#a2b5ff");
gradient.addColorStop(0.75, "#000e72"); // sieht man nicht, ugh
crc2.fillStyle = gradient;
crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
function handleLoad(_event) {
    var canvas = document.querySelector("canvas");
    if (!canvas)
        return;
    console.log("canvas wurde erfolgreich geladen.");
}
// Dicke linie überall außer Haus
crc2.lineWidth = 4;
// SCHNEEHÜGEL Nr. 1 (großer Hügel)
crc2huegel.beginPath();
crc2huegel.fillStyle = ("#ffffff");
crc2huegel.arc(1000, 1150, 900, 0.75 * Math.PI, 0.25 * Math.PI, false);
// vorheriges:   crc2haus.arc(1000,1150,900,0,2 *Math.PI, true);
crc2huegel.fill();
crc2huegel.stroke();
crc2huegel.closePath();
// SCHNEEHÜGEL Nr.2 (kleiner Hügel)
crc2huegel.beginPath();
crc2huegel.arc(350, 950, 600, 0.5 * Math.PI, 1.70 * Math.PI);
// vorheriges:  crc2haus.arc(350,950,600,0,0.5 *Math.PI, true);
crc2huegel.fill();
crc2huegel.stroke();
crc2huegel.closePath();
/*     // secret Schneehügel um die anderen zu verdecken
       // gelöst in dem ich die Hügel-Kreise nicht durchgehend gemacht habe
        crc2haus.beginPath();
        crc2haus.arc(700,850,420,0,0.5 *Math.PI, true);
        crc2haus.fill();
        crc2haus.closePath();
        console.log("Hügel geladen.");
*/
// >>>>> Häuschen
// kleines Dach
crc2dach.beginPath();
crc2dach.moveTo(320, 480);
crc2dach.lineTo(395, 415);
crc2dach.lineTo(470, 480);
crc2dach.fillStyle = "#a21616";
crc2dach.fill();
crc2dach.stroke();
// kleines Häuschen
crc2haus.fillStyle = ("#454545");
crc2haus.fillRect(320, 480, 150, 130);
// großes Häuschen
crc2haus.fillStyle = ("#212121");
crc2haus.fillRect(150, 450, 200, 200);
crc2haus.fillStyle = ("#706467"); //Türchen
crc2haus.fillRect(250, 570, 60, 80);
console.log("Das Häuschen wurde geladen.");
// Dach GROßES Häuschen
crc2dach.beginPath();
crc2dach.moveTo(150, 450); //start, Koordinaten beim großen Häuschen
crc2dach.lineTo(250, 350); // mitte, w:2+x, h:2-y
crc2dach.lineTo(350, 450);
crc2dach.lineTo(150, 450);
crc2dach.fillStyle = "#cf1616";
crc2dach.fill();
crc2dach.stroke();
crc2dach.closePath();
// >>>>> SONNE
var r1 = 200;
var r2 = 200;
var gradient = crc2sonne.createRadialGradient(500, 0, r1, 100, 0, r2);
gradient.addColorStop(0, "#ffe25a"); //#ffc800
gradient.addColorStop(1, "#ffffff"); //#6e0000
crc2sonne.beginPath();
crc2sonne.fillStyle = gradient;
crc2sonne.arc(400, 0, r2, 0, 2 * Math.PI);
crc2sonne.fill();
crc2sonne.stroke();
crc2sonne.closePath();
// >>>>> LIFT
// vorderer Pfosten
crc2lift.beginPath();
crc2lift.lineWidth = "3";
crc2lift.strokeStyle = "black";
crc2lift.fillStyle = "#452008";
crc2lift.rect(718, 200, 15, 350);
crc2lift.fill();
crc2lift.stroke();
// mittlerer Pfosten
crc2lift.beginPath();
crc2lift.lineWidth = "3";
crc2lift.strokeStyle = "black";
crc2lift.fillStyle = "#452008";
crc2lift.rect(1050, 155, 10, 200);
crc2lift.fill();
crc2lift.stroke();
// hintester Pfosten
crc2lift.beginPath();
crc2lift.lineWidth = "3";
crc2lift.strokeStyle = "black";
crc2lift.fillStyle = "#452008";
crc2lift.rect(1300, 80, 5, 250);
crc2lift.fill();
crc2lift.stroke();
// Lift-Seile
crc2lift.beginPath(); // 1. SEIL
crc2lift.arc(390, 30, 450, 0.6 * Math.PI, 0.23 * Math.PI, true);
crc2lift.stroke();
crc2lift.closePath();
crc2lift.beginPath(); // 2. SEIL
crc2lift.arc(825, 20, 325, 0.6 * Math.PI, 0.25 * Math.PI, true); //0.613*Math.PI, 0.23*Math.PI
crc2lift.stroke();
crc2lift.closePath();
crc2lift.beginPath(); // 3. SEIL
crc2lift.arc(1130, 12, 250, 0.6 * Math.PI, 0.25 * Math.PI, true); //0.635*Math.PI, 0.25*Math.PI
crc2lift.stroke();
crc2lift.closePath();
crc2lift.beginPath(); // 4. SEIL
crc2lift.arc(1360, 22, 175, 0.6 * Math.PI, 0.25 * Math.PI, true); //0.635*Math.PI, 0.25*Math.PI
crc2lift.stroke();
crc2lift.closePath();
// Seil: gerade
crc2lift.beginPath();
crc2lift.lineWidth = 7;
crc2lift.moveTo(250, 450);
crc2lift.lineTo(1500, 50);
crc2lift.stroke();
crc2lift.closePath();
// >>>>> WOLKEN
// Füllung Wolken, bis lösung gefunden wurde
crc2wolke.beginPath();
crc2wolke.fillStyle = ("#ffffff");
crc2wolke.fillRect(40, 127, 250, 47);
crc2wolke.fillRect(50, 103, 200, 35);
// kleine Wölkchen
crc2wolke.beginPath();
crc2wolke.moveTo(290, 175);
crc2wolke.fillStyle = ("#ffffff");
crc2wolke.arc(30, 150, 25, 0.5 * Math.PI, 1.6 * Math.PI); //endAngle 1.6
crc2wolke.fill();
crc2wolke.stroke();
crc2wolke.beginPath();
crc2wolke.arc(290, 150, 25, 1.4 * Math.PI, 0.5 * Math.PI);
crc2wolke.fill();
crc2wolke.stroke();
// mittlgroße Wölkchen
crc2wolke.beginPath(); // linke Wolke
crc2wolke.arc(77, 130, 40, 0.9 * Math.PI, 1.75 * Math.PI);
crc2wolke.fill();
crc2wolke.stroke();
crc2wolke.beginPath(); // rechte Wolke
crc2wolke.arc(243, 130, 40, 1.25 * Math.PI, 0.1 * Math.PI);
crc2wolke.fill();
crc2wolke.stroke();
// große, zentrale Wolke
crc2wolke.beginPath();
crc2wolke.arc(160, 100, 55, 0.9 * Math.PI, 0.1 * Math.PI);
crc2wolke.fill();
crc2wolke.stroke();
crc2besucher.closePath();
// >>>>> SKIPISTE BESUCHER (SPÄTER IN FUNKTION GEFASST MIT RANDOM)
// Kopf
crc2besucher.beginPath();
crc2besucher.lineWidth = "3";
crc2besucher.fillStyle = "#000000";
crc2besucher.arc(500, 675, 10, 0, 2 * Math.PI);
crc2besucher.fill();
crc2besucher.stroke();
crc2besucher.closePath();
// Körper
crc2besucher.beginPath();
crc2besucher.lineWidth = "3";
crc2besucher.fillStyle = "#7c0909";
crc2besucher.rect(490, 688, 20, 50);
crc2besucher.fill();
crc2besucher.stroke();
// Arme und Beine
// linker Arm
crc2besucher.beginPath();
crc2besucher.moveTo(490, 690);
crc2besucher.lineTo(475, 715);
crc2besucher.stroke();
// rechter Arm
crc2besucher.moveTo(510, 690);
crc2besucher.lineTo(525, 715);
crc2besucher.stroke();
crc2besucher.closePath();
// SKIZUBEHÖR
// linker Ski-er
crc2besucher.beginPath();
crc2besucher.moveTo(475, 755);
crc2besucher.lineTo(530, 795);
// rechter Ski-er
crc2besucher.moveTo(495, 755);
crc2besucher.lineTo(550, 795);
crc2besucher.lineWidth = 6;
crc2besucher.strokeStyle = "#8f8f8f";
crc2besucher.stroke();
crc2besucher.closePath();
// linkes Bein
crc2besucher.beginPath();
crc2besucher.lineWidth = 4;
crc2besucher.moveTo(495, 740);
crc2besucher.lineTo(495, 770);
crc2besucher.strokeStyle = "#000000";
crc2besucher.stroke();
// rechtes Bein
crc2besucher.moveTo(505, 737);
crc2besucher.lineTo(505, 765);
crc2besucher.strokeStyle = "#000000";
crc2besucher.stroke();
crc2besucher.closePath();
// >>>>>  NUMMER 2 ---- WEITERE  ----   SKIPISTE BESUCHER (SPÄTER IN FUNKTION GEFASST MIT RANDOM)
// Kopf
crc2besucher.beginPath();
crc2besucher.lineWidth = "3";
crc2besucher.fillStyle = "#000000";
crc2besucher.arc(900, 675, 10, 0, 2 * Math.PI);
crc2besucher.fill();
crc2besucher.stroke();
crc2besucher.closePath();
// Körper
crc2besucher.beginPath();
crc2besucher.lineWidth = "3";
crc2besucher.fillStyle = "#0c1f86";
crc2besucher.rect(890, 688, 20, 50);
crc2besucher.fill();
crc2besucher.stroke();
// Arme und Beine
// linker Arm
crc2besucher.beginPath();
crc2besucher.moveTo(890, 690);
crc2besucher.lineTo(875, 715);
crc2besucher.stroke();
// rechter Arm
crc2besucher.moveTo(910, 690);
crc2besucher.lineTo(925, 715);
crc2besucher.stroke();
crc2besucher.closePath();
// SKIZUBEHÖR
// linker Ski-er
crc2besucher.beginPath();
crc2besucher.moveTo(875, 755);
crc2besucher.lineTo(930, 795);
// rechter Ski-er
crc2besucher.moveTo(895, 755);
crc2besucher.lineTo(950, 795);
crc2besucher.lineWidth = 6;
crc2besucher.strokeStyle = "#797979";
crc2besucher.stroke();
crc2besucher.closePath();
// linkes Bein
crc2besucher.beginPath();
crc2besucher.lineWidth = 4;
crc2besucher.moveTo(895, 740);
crc2besucher.lineTo(895, 770);
crc2besucher.strokeStyle = "#000000";
crc2besucher.stroke();
// rechtes Bein
crc2besucher.moveTo(905, 737);
crc2besucher.lineTo(905, 765);
crc2besucher.strokeStyle = "#000000";
crc2besucher.stroke();
crc2besucher.closePath();
// >>>>>   WEITERE  ----   SKIPISTE BESUCHER (SPÄTER IN FUNKTION GEFASST MIT RANDOM)
// Kopf
crc2besucher.beginPath();
crc2besucher.lineWidth = "3";
crc2besucher.fillStyle = "#000000";
crc2besucher.arc(700, 575, 10, 0, 2 * Math.PI);
crc2besucher.fill();
crc2besucher.stroke();
crc2besucher.closePath();
// Körper
crc2besucher.beginPath();
crc2besucher.lineWidth = "3";
crc2besucher.fillStyle = "#2e6e09";
crc2besucher.rect(690, 588, 20, 50);
crc2besucher.fill();
crc2besucher.stroke();
// Arme und Beine
// linker Arm
crc2besucher.beginPath();
crc2besucher.moveTo(690, 590);
crc2besucher.lineTo(675, 615);
crc2besucher.stroke();
// rechter Arm
crc2besucher.moveTo(710, 590);
crc2besucher.lineTo(725, 615);
crc2besucher.stroke();
crc2besucher.closePath();
// SKIZUBEHÖR
// linker Ski-er
crc2besucher.beginPath();
crc2besucher.moveTo(700, 655); // 675    655
crc2besucher.lineTo(645, 695); // 730    695
// rechter Ski-er
crc2besucher.moveTo(665, 695); // 695    655
crc2besucher.lineTo(720, 655); // 750    695
crc2besucher.lineWidth = 6;
crc2besucher.strokeStyle = "#5d5d5d";
crc2besucher.stroke();
crc2besucher.closePath();
// linkes Bein
crc2besucher.beginPath();
crc2besucher.lineWidth = 4;
crc2besucher.moveTo(695, 640);
crc2besucher.lineTo(695, 660);
crc2besucher.strokeStyle = "#000000";
crc2besucher.stroke();
// rechtes Bein
crc2besucher.moveTo(705, 637);
crc2besucher.lineTo(705, 665);
crc2besucher.strokeStyle = "#000000";
crc2besucher.stroke();
crc2besucher.closePath();
// >>>>> SCHNEE-PARTIKEL  (später Funktion mit random)
crc2schnee.beginPath();
crc2schnee.strokeStyle = "#ffffff";
crc2schnee.fillStyle = "#ffffff";
crc2schnee.arc(400, 150, 4, 0, 2 * Math.PI);
crc2schnee.fill();
crc2schnee.stroke();
crc2schnee.beginPath();
crc2schnee.arc(600, 300, 5, 0, 2 * Math.PI);
crc2schnee.fill();
crc2schnee.stroke();
crc2schnee.beginPath();
crc2schnee.arc(800, 200, 4, 0, 2 * Math.PI);
crc2schnee.fill();
crc2schnee.stroke();
crc2schnee.beginPath();
crc2schnee.arc(1000, 150, 5, 0, 2 * Math.PI);
crc2schnee.fill();
crc2schnee.stroke();
crc2schnee.beginPath();
crc2schnee.arc(100, 275, 5, 0, 2 * Math.PI);
crc2schnee.fill();
crc2schnee.stroke();
crc2schnee.beginPath();
crc2schnee.arc(200, 250, 5, 0, 2 * Math.PI);
crc2schnee.fill();
crc2schnee.stroke();
crc2schnee.beginPath();
crc2schnee.arc(700, 75, 3, 0, 2 * Math.PI);
crc2schnee.fill();
crc2schnee.stroke();
crc2schnee.beginPath();
crc2schnee.arc(750, 250, 4, 0, 2 * Math.PI);
crc2schnee.fill();
crc2schnee.stroke();
crc2schnee.beginPath();
crc2schnee.beginPath();
crc2schnee.arc(900, 150, 2, 0, 2 * Math.PI);
crc2schnee.fill();
crc2schnee.stroke();
//# sourceMappingURL=typescript.js.map