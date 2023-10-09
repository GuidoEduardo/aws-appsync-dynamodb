import { User } from '../../model'
import { createUserOptions } from './types'

export async function createUser(options: createUserOptions) {
    const { username, email, role } = options.input

    const user = await User.create({ username, email, role }).go()

    return user.data
}