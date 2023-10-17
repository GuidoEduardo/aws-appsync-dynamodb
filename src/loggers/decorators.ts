import { logger } from '.'

export function decorateAll(decorator: MethodDecorator): ClassDecorator {
    return (target: any) => {
        const descriptors = Object.getOwnPropertyDescriptors(target.prototype)

        for (const [propName, descriptor] of Object.entries(descriptors)) {
            const isMethod = typeof descriptor.value == "function" && propName != "constructor"

            if (isMethod) {
                decorator(target, propName, descriptor)
                Object.defineProperty(target.prototype, propName, descriptor)
            }
        }
    }
}

export function logMethodCall(
    target: any,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor,
) {
    const method = descriptor.value

    descriptor.value = async function (...args: any[]) {
        logger.debug(`Calling ${target.constructor.name}->${propertyKey.toString()}`)

        return await method.apply(this, args)
    }

    return descriptor
}
