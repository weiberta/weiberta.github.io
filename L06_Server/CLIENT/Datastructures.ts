namespace L06_Server {
    window.addEventListener("load", handleLoad);

    let form: HTMLFormElement;
    let url: string = "http://localhost:5001";

    // >>>>>>>>>>>>>>>>> HANDLE LOAD <<<<<<<<<<<<<<<<<<<

    async function handleLoad(_event: Event): Promise<void> {
        console.log("Willkommen");


       let response: Response = await fetch("Data.json"); // fetch soll nicht sofort "reinspringen",
       let selection: string = await response.text(); // (bei ihm offer) deswegen await! bis Daten geladen sind > asynchronisieren + promise
       let data: Data = JSON.parse(selection);

        generateContent(data);

        // >>>>>>>>>>>>><<<<<<<<<<<<<

        let form: HTMLFormElement = <HTMLFormElement>document.querySelector("form");
        let slider: HTMLInputElement = <HTMLInputElement>document.querySelector("input#amount");

        let buttonloeschen: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#buttonloeschen"); // DELETE
        let buttonspeichern: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#buttonspeichern");

        // <<<< ÖHRCHEN >>>>

        form.addEventListener("change", handleChange);
        slider.addEventListener("input", displayAmount);

        buttonloeschen.addEventListener("click", deleteData); // DELETE
        buttonspeichern.addEventListener("click", submitData);

    }

    // >>>>>>>>>>>>>>>>> HANDLE CHANGE <<<<<<<<<<<<<<<<<<<

    function handleChange(_event: Event): void {
        let order: HTMLDivElement = <HTMLDivElement>document.querySelector("div#order"); // div mit id-Attribut order
        order.innerHTML = " "; // leeres order-Feld beim Start (" " = leerer String)

        let formData: FormData = new FormData(document.forms[0]); // formData: (vom Typen) FormData
        for (let entry of formData) {
            console.log(entry[0] + ": " + entry[1]);
            let item: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" +  entry[1] + "']");

           // let value: string = String(item.getAttribute("value"));
            //    order.innerHTML += item.name + ":  " + item.value + "  ";
            order.innerHTML += "<br> <strong>" + entry[0] +": </strong> " + item.value + "<br>";
        }
    }

    // >>>>>>>>>>>>>>>>> DISPLAY AMOUNT <<<<<<<<<<<<<<<<<<<

    function displayAmount(_event: Event): void {
        let progress: HTMLProgressElement = <HTMLProgressElement>document.querySelector("progress");
        let amount: string = (<HTMLInputElement>_event.target).value;
        progress.value = parseFloat(amount);
    }

    // >>>>>>>>>>>>>>>>> BUTTONS <<<<<<<<<<<<<<<<<<<

    // DELETE DATA
    function deleteData(): void {
       let order: HTMLDivElement = <HTMLDivElement>document.querySelector("div#order");
        order.innerHTML = "";
        console.log("Deine Auswahl wurde zurückgesetzt.");
    }

    // SAVE DATA
    async function submitData (_event: Event): Promise<void> {      // funktion wegen await asynchron, gibt einen promise vom typen void zurück
       // alert("Dein Feuerwerk wurde in der Datenbank gespeichert");
        console.log("Dein Feuerwerk wurde in der Datenbank gespeichert");

        let formData: FormData = new FormData(form);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let response: Response = await fetch(url + "?" + query.toString());
        //await fetch(url + "?" + query.toString());
        let responseText: string = await response.text();
        alert(responseText);
    }
}
