import { createUser } from './mutation'
import { getUserById, getUserByUsername, getUsersByLeader } from './query'
import { createUserOptions } from './types'

export const userResolver = {
  Query: {},
  Mutation: {
    createUser: (_: unknown, options: createUserOptions) => createUser(options),
  },
}
