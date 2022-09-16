export default class RequestError extends Error {
    constructor(message, status, body) {
        super(message)
        this.status = status;
        this.body = body;
    }
}