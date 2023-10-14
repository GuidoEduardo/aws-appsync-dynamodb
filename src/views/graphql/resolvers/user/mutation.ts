import { ZodError } from 'zod'
import { userController } from '../../../../controllers'
import { UserInput } from '../../../../entities/user'

export async function createUser(options: { input: UserInput }) {
  try {
    const user = await userController.create(options.input)

    return {
      __typename: 'User',
      ...user,
    }
  } catch (err: any) {
    if (err instanceof ZodError) {
      return {
        __typename: 'InvalidInputError',
        message: err.name,
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
