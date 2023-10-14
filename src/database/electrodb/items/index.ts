import { Service } from 'electrodb'
import { UserModel } from './user'
import { table, client } from '../common'

export const projectmanager = new Service(
    {
        user: UserModel,
    },
    { table, client },
)

export { UserModel }
