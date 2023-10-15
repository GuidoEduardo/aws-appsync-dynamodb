import { logger } from '.'

export function execMethod(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
) {
    const method = descriptor.value

    descriptor.value = async function (...args: any[]) {
        logger.debug(`Calling ${target.constructor.name}->${propertyKey}`)

        return await method.apply(this, args)
    }

    return descriptor
}
