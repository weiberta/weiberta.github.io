import * as Http from "http";
import * as Url from "url";

// SERVER
export namespace L06_Server {
    let server: Http.Server = Http.createServer();
    console.log(server);

    //
    let port: number | string | undefined = process.env.PORT;
    if (port == undefined)
        port = 5001;

    console.log("Server starting on port: " + port);

    server.listen(port);
    server.addListener("request", handleRequest);


    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {

        console.log("MROW.");
        console.log(_request.url);

        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*"); //sicherheitsmechanismus (Browser) wird ausgeschaltet

        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);

            for (let key in url.query) {
                _response.write(key + ":  " + url.query[key] + "\n"); // kann reinschreiben was ich will, auch umbrüche
            }

            let jsonString: string = JSON.stringify(url.query);
            _response.write(jsonString);
        }

        _response.end();

    }
}