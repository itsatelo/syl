import https from "https";
import { Error } from "atils";

const invalids = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "[",
    "]",
    "{",
    "}",
    "-",
    "+",
    "=",
    "/",
    "\\",
    "|",
    "\"",
    "\'",
    "\`",
    ":",
    ";",
    "<",
    ">",
    "?",
    ".",
    ",",
]

export default class Syl {

    constructor() {
        this.token = "s-0003";
    }

    send(message) {
        if(this.token === "" || !this.token) {
            new Error("SylError", "--missingToken", { date: true, stackTrace: true, logStackTraces: false, autocatch: false }).throw();
        } else if(invalids.some(v => this.token.includes(v))) {
            new Error("SylError", "--invalidToken", { date: true, stackTrace: true, logStackTraces: false, autocatch: false }).throw();
        }

        const m = JSON.stringify({
            token: this.token,
            data: message
        });
        
        const options =  {
            hostname: "api.itsatelo.com",
            path: "/syljs",
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Length': m.length
            }
        };

        let request = https.request(options, (res) => {
            res.on('data', (d) => {
                if(d === "s-0000") {
                    new Error("SylError", "--missingToken", { date: true, stackTrace: true, logStackTraces: false, autocatch: false }).throw();
                }
            });
        });

        request.on("error", (error) => {
            console.error(error);
        });

        request.write(m);
        request.end();
    }

    read(callback) {
        this.#get(`https://api.itsatelo.com/syljs/${this.token}`, callback);
    }

    #get(url, callback) {
        "use-strict";
        https.get(url, function (result) {
            var dataQueue = "";    
            result.on("data", function (dataBuffer) {
                dataQueue += dataBuffer;
            });
            result.on("end", function () {
                callback(dataQueue);
            });
        });
    }
}
