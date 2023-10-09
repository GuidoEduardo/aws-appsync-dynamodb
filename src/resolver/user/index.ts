import { createUser } from './mutation'
import { getUserById } from './query'
import { createUserOptions, getUserByIdOptions } from './types'

export const userResolver = {
    Query: {
        getUserById: (_: unknown, options: getUserByIdOptions) => getUserById(options)
    },
    Mutation: {
        createUser: (_: unknown, options: createUserOptions) => createUser(options)
    }
}