"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coronahilfe = void 0;
const Http = require("http");
const Url = require("url");
// SERVER
var Coronahilfe;
(function (Coronahilfe) {
    let server = Http.createServer();
    console.log(server);
    //
    let port = process.env.PORT;
    if (port == undefined)
        port = 5001;
    console.log("Server starting on port: " + port);
    server.listen(port);
    server.addListener("request", handleRequest);
    function handleRequest(_request, _response) {
        console.log("MROW.");
        console.log(_request.url);
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*"); //sicherheitsmechanismus (Browser) wird ausgeschaltet
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            for (let key in url.query) {
                _response.write(key + ":  " + url.query[key] + "\n"); // kann reinschreiben was ich will, auch umbrüche
            }
            let jsonString = JSON.stringify(url.query);
            _response.write(jsonString);
        }
        _response.end();
    }
})(Coronahilfe = exports.Coronahilfe || (exports.Coronahilfe = {}));
//# sourceMappingURL=Server.js.map