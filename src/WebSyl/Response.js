export default class Response {
    constructor(path) {
        this.route = path;
        this.message = "Successful!";

        this.setResponse = (message) => {
            this.message = message;
        }
    }
}
