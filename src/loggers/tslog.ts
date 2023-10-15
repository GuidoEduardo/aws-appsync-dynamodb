import CustomLogger from '../interfaces/logger'
import { Logger, ILogObj } from 'tslog'

export default class TSConsoleLogger implements CustomLogger {
    private readonly logger: Logger<ILogObj>

    public constructor() {
        this.logger = new Logger()
    }

    public log(message: string) {
        this.logger.info(message)
    }

    public debug(message: string) {
        this.logger.debug(message)
    }

    public warn(message: string) {
        this.logger.warn(message)
    }

    public error(message: string) {
        this.logger.error(message)
    }
}
