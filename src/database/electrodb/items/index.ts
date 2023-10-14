import { Service } from 'electrodb'
import { users } from './user'
import { table, client } from '../common'

export const projectmanager = new Service(
    {
        user: users,
    },
    { table, client },
)
