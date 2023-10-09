import { Service } from 'electrodb'
import { User } from './user'
import { table, client } from '../common'

export const projectmanager = new Service(
    {
        user: User,
    },
    { table, client },
)

export { User }