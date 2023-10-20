export default class ConsoleLogger implements CustomLogger {
    public log(message: string) {
        console.log(message)
    }

    public debug(message: string) {
        console.debug(message)
    }

    public warn(message: string) {
        console.warn(message)
    }

    public error(message: string) {
        console.error(message)
    }
}
