export { execMethod } from './decorators'
import CustomLogger from '../interfaces/logger'
import TSConsoleLogger from './tslog'

export const logger: CustomLogger = new TSConsoleLogger()
