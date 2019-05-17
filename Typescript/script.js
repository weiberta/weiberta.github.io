console.log("Test1");
// Dies ist ein Kommentar
window.onload = function () {
    console.log("Objekte wurden geladen");
    document.getElementById("id1").addEventListener("click", DoStuff1);
    document.getElementById("erbwb").addEventListener("click", DoStuff2);
};
function DoStuff1() {
    console.log("clicked on button 1");
}
function DoStuff2() {
    console.log("button 2 was clicked");
}
//# sourceMappingURL=script.js.map