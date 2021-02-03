"use strict";
var L06_Server;
(function (L06_Server) {
    window.addEventListener("load", handleLoad);
    let form;
    let url = "https://kisjasserver.herokuapp.com/";
    // >>>>>>>>>>>>>>>>> HANDLE LOAD <<<<<<<<<<<<<<<<<<<
    async function handleLoad(_event) {
        console.log("Willkommen");
        let response = await fetch("Data.json"); // fetch soll nicht sofort "reinspringen",
        let selection = await response.text(); // (bei ihm offer) deswegen await! bis Daten geladen sind > asynchronisieren + promise
        let data = JSON.parse(selection);
        L06_Server.generateContent(data);
        // >>>>>>>>>>>>><<<<<<<<<<<<<
        let form = document.querySelector("form");
        let slider = document.querySelector("input#amount");
        let buttonloeschen = document.querySelector("#buttonloeschen"); // DELETE
        let buttonspeichern = document.querySelector("#buttonspeichern");
        // <<<< ÖHRCHEN >>>>
        form.addEventListener("change", handleChange);
        slider.addEventListener("input", displayAmount);
        buttonloeschen.addEventListener("click", deleteData); // DELETE
        buttonspeichern.addEventListener("click", submitData);
    }
    // >>>>>>>>>>>>>>>>> HANDLE CHANGE <<<<<<<<<<<<<<<<<<<
    function handleChange(_event) {
        let order = document.querySelector("div#order"); // div mit id-Attribut order
        order.innerHTML = " "; // leeres order-Feld beim Start (" " = leerer String)
        let formData = new FormData(document.forms[0]); // formData: (vom Typen) FormData
        for (let entry of formData) {
            console.log(entry[0] + ": " + entry[1]);
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
        order.innerHTML = "";
        console.log("Deine Auswahl wurde zurückgesetzt.");
    }
    // SAVE DATA
    async function submitData(_event) {
        alert("Dein Feuerwerk wurde in der Datenbank gespeichert");
        console.log("Dein Feuerwerk wurde in der Datenbank gespeichert");
        let formData = new FormData(form);
        let query = new URLSearchParams(formData);
        let response = await fetch(url + "?" + query.toString());
        // await fetch(url + "?" + query.toString()); //
        let responseText = await response.text();
        alert(responseText);
    }
})(L06_Server || (L06_Server = {}));
//# sourceMappingURL=Datastructures.js.map
