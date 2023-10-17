export class NotFoundError extends Error {
    constructor() {
        super('NotFoundError')

        Object.setPrototypeOf(this, NotFoundError.prototype)
    }
}
