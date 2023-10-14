import { LoggerFactory } from '..'

const logger = LoggerFactory.getInstance()

export function simpleLog() {
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor,
    ) {
        logger.log(`Calling ${propertyKey}`)
    }
}
