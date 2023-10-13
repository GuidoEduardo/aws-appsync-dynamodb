import { createUser, createOptions } from './mutation'

export const userResolver = {
  Query: {
    userBy: (_: unknown, options: any) => ("Hello World!")
  },
  Mutation: {
    createUser: (_: unknown, options: createOptions) => createUser(options),
  },
}
