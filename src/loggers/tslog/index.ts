import Logger from 'interfaces/logger'
export { simpleLog } from './test'

export default class TSLogConsoleLogger implements Logger {
    public log(message: string): void {
        console.log(message)
    }
}
