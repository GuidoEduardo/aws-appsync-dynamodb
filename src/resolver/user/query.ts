import { User } from '../../model'
import { getUserByIdOptions } from './types'

export async function getUserById(options: getUserByIdOptions) {
    const user = await User.get(options).go()

    return user.data
}
