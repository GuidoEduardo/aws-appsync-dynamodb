export default interface CustomLogger {
    log(message: string): void

    debug(message: string): void

    warn(message: string): void

    error(message: string): void
}
