"use strict";
var L06_Server;
(function (L06_Server) {
    function generateContent(_data) {
        for (let category in _data) { // for in gibt in der Variable nur die Schlüssel wieder (Schlüssel ist die Kategorie)
            let items = _data[category]; // ITEMS aus Data.json exportieren
            let group = null; // group muss 1 x deklariert werden = unklar was mit den vielen groups gemacht werden soll (zu viele Funktionsbereiche)
            switch (category) { // switch (KEY)
                case "Feuerwerkskoerper": // case "VALUE"  > sollte der Schlüssel ein fw-Körper sein SelectElement
                    group = createSingle(items, category); //  mit Optionen aufrufen + was erzeugt wurde in eine Gruppe speichern
                    break;
                case "Explosionsform":
                    group = createSingle(items, category);
                case "Explosionsradius":
                    group = createSingle(items, category);
                    break;
                case "Farbe":
                    group = createSelect(items, category);
                    break;
                default:
                    break;
            }
            let fieldset = document.querySelector("fieldset#" + category);
            if (fieldset && group)
                fieldset.appendChild(group);
        }
    }
    L06_Server.generateContent = generateContent;
    // >>>>>>>>>>>> FUNCTION CREATESELECT() <<<<<<<<<<<<<
    function createSingle(_items, _category) {
        let group = document.createElement("div");
        for (let item of _items) {
            let radio = document.createElement("input");
            radio.type = "radio";
            radio.value = item.name;
            radio.name = _category;
            radio.id = item.name;
            let br = document.createElement("br");
            let label = document.createElement("label");
            label.textContent = item.name;
            label.htmlFor = item.name;
            group.appendChild(radio);
            group.appendChild(label);
            group.appendChild(br);
        }
        return group;
    }
    function createSelect(_items, _category) {
        let group = document.createElement("select");
        group.name = _category;
        for (let item of _items) {
            let option = document.createElement("option");
            option.value = option.textContent = item.name;
            option.id = item.name;
            group.appendChild(option);
        }
        return group;
    }
})(L06_Server || (L06_Server = {}));
//# sourceMappingURL=GenerateContent.js.map