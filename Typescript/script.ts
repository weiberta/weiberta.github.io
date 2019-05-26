


console.log("Test1");
// Dies ist ein Kommentar

window.onload = function () {
    console.log("Objekte wurden geladen");
    document.getElementById("id1").addEventListener("click", DoStuff1);
    document.getElementById("erbwb").addEventListener("click", DoStuff2);
}
function DoStuff1()
{
    console.log("clicked on button 1");
    console.log("I LOVE U")
    
}

function DoStuff2()
{
    alert("meow");
}



