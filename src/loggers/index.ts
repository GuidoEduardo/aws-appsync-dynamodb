import Logger from 'interfaces/logger'
import TSLogConsoleLogger from 'loggers/tslog'

let logger: Logger

export class LoggerFactory {
    public static getInstance(): Logger {
        if (!logger) {
            console.log('PORRA')
            logger = new TSLogConsoleLogger()
        }

        return logger
    }
}
