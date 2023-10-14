import { ZodError } from 'zod'
import { userController } from 'controllers'
import { User } from 'entities/user'
import { NotFoundError } from 'errors'

export async function findUser(options: { search: SearchOptions<User> }) {
    try {
        const users = await userController.find(options.search)

        return {
            __typename: 'Users',
            users,
        }
    } catch (err: any) {
        if (err instanceof ZodError) {
            return {
                __typename: 'InvalidInputError',
                message: err.message,
                fields: err.issues,
            }
        }

        if (err instanceof Error) {
            return {
                __typename: 'DatabaseError',
                message: err.message,
            }
        }

        return {
            __typename: 'UnknownError',
            message: `Unknown error: ${err}`,
        }
    }
}

export async function getUser(id: string) {
    try {
        const user = await userController.get(id)

        return {
            __typename: 'User',
            ...user,
        }
    } catch (err: any) {
        if (err instanceof ZodError) {
            return {
                __typename: 'InvalidInputError',
                message: err.message,
                fields: err.issues,
            }
        }

        if (err instanceof NotFoundError) {
            return {
                __typename: 'NotFoundError',
                message: err.message,
            }
        }

        if (err instanceof Error) {
            return {
                __typename: 'DatabaseError',
                message: err.message,
            }
        }

        return {
            __typename: 'UnknownError',
            message: `Unknown error: ${err}`,
        }
    }
}
