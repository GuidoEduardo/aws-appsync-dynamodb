import { User } from '../../model'
import { UserSchema } from '../../schemas'
import { createUserOptions } from './types'
import { ZodError } from 'zod'

export async function createUser(options: createUserOptions) {
  try {
    const isValidData = UserSchema.parse(options.input)

    if (!isValidData) {
      throw new ZodError(isValidData)
    }

    const user = await User.create(options.input).go()

    return {
      __typename: "User",
      ...user.data
    }
  }
  catch (err: unknown) {
    if (err instanceof ZodError) {
      return {
        __typename: "InvalidInputError",
        message: "Invalid input",
        fields: err.issues
      }
    }

    return {
      __typename: "UnknownError",
      message: `Unknown error: ${err}`
    }
  }
}
