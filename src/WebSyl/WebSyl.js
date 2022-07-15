import https from "https";
import fs from "fs";

import express from "express";
import { Error } from "atils";

import RequestTypes from "./RequestType.js";
import Response from "./Response.js";

let responseMessages = {};

export default class WebSyl {
    constructor(options) {
        if(!options || options === {} || typeof options !== "object" || options === null) {
            throw new Error("WebSylError", "--invalidOptions", { date: true, stackTrace: true, logStackTraces: false, autocatch: false }).throw();
        }

        if(options.port) {
            this.app = express();
            this.app.listen(options.port ?? 80);
        }

        if(options.domain) {
            this.domain = options.domain;
            if(!this.domain.endsWith("/")) this.domain = `${this.domain}/`;
        }
    }

    setRoute(route, type, data) {
        if(!this.app) {
            throw new Error("WebSylError", "--unusable", { date: true, stackTrace: true, logStackTraces: false, autocatch: false }).throw();
        }

        if(type === RequestTypes.GET) {
            this.app.get(route, (req, res) => {
                res.send(data);
            });
        } 
        
        else if(type === RequestTypes.POST) {
            this.app.post(route, (req, res) => {
                let responseManager = new Response(route);
                data(req.body, responseManager.setResponse);
            });
        }
    }

    get(route, callback) {
        let r = route.split("");
        if(route.startsWith("/")) {
            r.shift();
            r = r.join("");
            console.log(r);
        }

        this.#get(`${this.domain}${r}`, callback);
    }

    #get(url, callback) {
        "use-strict";
        console.log(url);
        https.get(url, function (result) {
            var dataQueue = "";    
            result.on("data", function (dataBuffer) {
                dataQueue += dataBuffer;
            });
            result.on("end", function () {
                callback(JSON.parse(dataQueue));
            });
        });
    }
}
