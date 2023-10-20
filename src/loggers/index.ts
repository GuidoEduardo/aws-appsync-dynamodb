export { logMethodCall, decorateAll } from './decorators'
import TSConsoleLogger from './tslog'

export const logger: CustomLogger = new TSConsoleLogger()
