import { ZodError } from 'zod'
import { userController } from '../../../../controllers'
import { UserRoles } from '../../../../entities/user'

export type createOptions = {
  input: {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    role: UserRoles;
  }
}

export async function createUser(options: createOptions) {
  try {
    const user = await userController.create(options.input)

    return {
      __typename: "User",
      ...user
    }
  }
  catch (err: any) {
    if (err instanceof ZodError) {
      return {
        __typename: "InvalidInputError",
        fields: err.issues
      }
    }

    if (err instanceof Error) {
      return {
        __typename: "DatabaseError",
        message: err.message
      }
    }

    return {
      __typename: "UnknownError",
      message: `Unknown error: ${err}`
    }
  }
}
