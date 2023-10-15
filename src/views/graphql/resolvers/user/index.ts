import { User, UserInput } from '../../../../entities/user'
import { createUser } from './mutation'
import { findUser, getUser } from './query'

export const userResolver = {
    Query: {
        getUser: (_: unknown, input: { id: string }) => getUser(input.id),
        findUser: (_: unknown, options: { search: SearchOptions<User> }) =>
            findUser(options),
    },
    Mutation: {
        createUser: (_: unknown, options: { input: UserInput }) =>
            createUser(options),
    },
}
