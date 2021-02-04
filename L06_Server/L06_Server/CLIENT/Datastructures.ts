namespace L06_Server {
    window.addEventListener("load", handleLoad);

    let form: HTMLFormElement;
    let url: string = "https://kisjasserver.herokuapp.com/";

    // >>>>>>>>>>>>>>>>> HANDLE LOAD <<<<<<<<<<<<<<<<<<<

    async function handleLoad(_event: Event): Promise<void> {
        console.log("————————————〈  W i l l k o m m e n  〉————————————"
                    + "\n" + "     " );


        let response: Response = await fetch("Data.json"); // fetch soll nicht sofort "reinspringen",
        let selection: string = await response.text(); // (bei ihm offer) deswegen await! bis Daten geladen sind > asynchronisieren + promise
        let data: Data = JSON.parse(selection);

        generateContent(data);

        // >>>>>>>>>>>>><<<<<<<<<<<<<

        form = <HTMLFormElement>document.querySelector("form");
        let slider: HTMLInputElement = <HTMLInputElement>document.querySelector("input#amount");

        let buttonloeschen: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#buttonloeschen"); // DELETE
/*NEU*/ let buttonspeichern: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#buttonspeichern");

        let buttonsenden: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#buttonsenden");
        // <<<< ÖHRCHEN >>>>

        form.addEventListener("change", handleChange);
        slider.addEventListener("input", displayAmount);

        buttonloeschen.addEventListener("click", deleteData); // DELETE
        buttonspeichern.addEventListener("click", saveData);
        buttonsenden.addEventListener("click",submitData);

    }

    // >>>>>>>>>>>>>>>>> HANDLE CHANGE <<<<<<<<<<<<<<<<<<<

    function handleChange(_event: Event): void {
        let order: HTMLDivElement = <HTMLDivElement>document.querySelector("div#order"); // div mit id-Attribut order
        order.innerHTML = " "; // leeres order-Feld beim Start (" " = leerer String)

        let formData: FormData = new FormData(document.forms[0]); // formData: (vom Typen) FormData
        for (let entry of formData) {
           // console.log(entry[0] + ": " + entry[1]); //grau: während Auswahl nichts anzeigt
            let item: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" + entry[1] + "']");

            // let value: string = String(item.getAttribute("value"));
            //    order.innerHTML += item.name + ":  " + item.value + "  ";
            order.innerHTML += "<br> <strong>" + entry[0] + ": </strong> " + item.value + "<br>";
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
        order.innerHTML = "Deine Zusammenstellung ...";

        console.log("\n" + "    ♦—◊——◊——◊—〈 AUSWAHL GELÖSCHT 〉—◊——◊——◊—♦" + "\n" + "    " );
    }

    // SAVE DATA
   export async function saveData(_event: Event): Promise<void> {      // funktion wegen await asynchron, gibt einen promise vom typen void zurück
        console.log("   " + "\n" + "⌈———————————————————————————————————————————————————⌉ " + "\n" +
                                   "| DEIN FEUERWERK WURDE IN DER DATENBANK aufgenommen |" +"\n" +
                                   "⌊———————————————————————————————————————————————————⌋ "
                              + "\n"  + "  " + "\n");

        let formData: FormData = new FormData(form);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let response: Response = await fetch(url + "?" + query.toString());
        await fetch(url + "?" + query.toString());
        let responseText: string = await response.text();

        console.log(responseText);
        alert(responseText);
    }


    // SUBMIT DATA TO CONSOLE
    async function submitData(_event: Event): Promise<void>{
        let formData: FormData = new FormData(document.forms[0]);

            let query: URLSearchParams = new URLSearchParams(<any>formData);
            let response: Response = await fetch(url + "?" + query.toString());
            await fetch(url + "?" + query.toString());
            let responseText: string = await response.text();

            console.log("\n" + "   ♦—◊——◊——◊—〈 AUSWAHL ÜBERMITTELT 〉—◊——◊——◊—♦" + "\n" + "   " );
            console.log(responseText + "\n" + "   ");
           // console.log("\n" + "♦———————————————————————————————————————————————♦"   );
    }

}
