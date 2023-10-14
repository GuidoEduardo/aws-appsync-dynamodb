export class NotFoundError extends Error {
    constructor() {
        super('Not found error')

        Object.setPrototypeOf(this, NotFoundError.prototype)
    }
}
