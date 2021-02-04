"use strict";
var L06_Server;
(function (L06_Server) {
    window.addEventListener("load", handleLoad);
    let form;
    let url = "https://kisjasserver.herokuapp.com/";
    // >>>>>>>>>>>>>>>>> HANDLE LOAD <<<<<<<<<<<<<<<<<<<
    async function handleLoad(_event) {
        console.log("————————————〈  W i l l k o m m e n  〉————————————"
            + "\n" + "     ");
        let response = await fetch("Data.json"); // fetch soll nicht sofort "reinspringen",
        let selection = await response.text(); // (bei ihm offer) deswegen await! bis Daten geladen sind > asynchronisieren + promise
        let data = JSON.parse(selection);
        L06_Server.generateContent(data);
        // >>>>>>>>>>>>><<<<<<<<<<<<<
        form = document.querySelector("form");
        let slider = document.querySelector("input#amount");
        let buttonloeschen = document.querySelector("#buttonloeschen"); // DELETE
        /*NEU*/ let buttonspeichern = document.querySelector("#buttonspeichern");
        let buttonsenden = document.querySelector("#buttonsenden");
        // <<<< ÖHRCHEN >>>>
        form.addEventListener("change", handleChange);
        slider.addEventListener("input", displayAmount);
        buttonloeschen.addEventListener("click", deleteData); // DELETE
        buttonspeichern.addEventListener("click", saveData);
        buttonsenden.addEventListener("click", submitData);
    }
    // >>>>>>>>>>>>>>>>> HANDLE CHANGE <<<<<<<<<<<<<<<<<<<
    function handleChange(_event) {
        let order = document.querySelector("div#order"); // div mit id-Attribut order
        order.innerHTML = " "; // leeres order-Feld beim Start (" " = leerer String)
        let formData = new FormData(document.forms[0]); // formData: (vom Typen) FormData
        for (let entry of formData) {
            // console.log(entry[0] + ": " + entry[1]); //grau: während Auswahl nichts anzeigt
            let item = document.querySelector("[value='" + entry[1] + "']");
            // let value: string = String(item.getAttribute("value"));
            //    order.innerHTML += item.name + ":  " + item.value + "  ";
            order.innerHTML += "<br> <strong>" + entry[0] + ": </strong> " + item.value + "<br>";
        }
    }
    // >>>>>>>>>>>>>>>>> DISPLAY AMOUNT <<<<<<<<<<<<<<<<<<<
    function displayAmount(_event) {
        let progress = document.querySelector("progress");
        let amount = _event.target.value;
        progress.value = parseFloat(amount);
    }
    // >>>>>>>>>>>>>>>>> BUTTONS <<<<<<<<<<<<<<<<<<<
    // DELETE DATA
    function deleteData() {
        let order = document.querySelector("div#order");
        order.innerHTML = "Deine Zusammenstellung ...";
        console.log("\n" + "    ♦—◊——◊——◊—〈 AUSWAHL GELÖSCHT 〉—◊——◊——◊—♦" + "\n" + "    ");
    }
    // SAVE DATA
    async function saveData(_event) {
        console.log("   " + "\n" + "⌈———————————————————————————————————————————————————⌉ " + "\n" +
            "| DEIN FEUERWERK WURDE IN DER DATENBANK aufgenommen |" + "\n" +
            "⌊———————————————————————————————————————————————————⌋ "
            + "\n" + "  " + "\n");
        let formData = new FormData(form);
        let query = new URLSearchParams(formData);
        let response = await fetch(url + "?" + query.toString());
        await fetch(url + "?" + query.toString());
        let responseText = await response.text();
        console.log(responseText);
        alert(responseText);
    }
    L06_Server.saveData = saveData;
    // SUBMIT DATA TO CONSOLE
    async function submitData(_event) {
        let formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        let response = await fetch(url + "?" + query.toString());
        await fetch(url + "?" + query.toString());
        let responseText = await response.text();
        console.log("\n" + "   ♦—◊——◊——◊—〈 AUSWAHL ÜBERMITTELT 〉—◊——◊——◊—♦" + "\n" + "   ");
        console.log(responseText + "\n" + "   ");
        // console.log("\n" + "♦———————————————————————————————————————————————♦"   );
    }
})(L06_Server || (L06_Server = {}));
//# sourceMappingURL=Datastructures.js.map