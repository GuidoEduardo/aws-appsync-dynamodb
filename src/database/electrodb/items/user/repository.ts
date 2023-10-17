import { User } from '../../../../entities'
import { users } from './model'
import { UserInput, Users } from '../../../../entities/user'
import { NotFoundError } from '../../../../errors'
import RepositoryInterface from '../../../../interfaces/repository'
import { decorateAll, logMethodCall } from '../../../../loggers'

@decorateAll(logMethodCall)
export class ElectroUserRepository implements RepositoryInterface<User> {
    async create(user: UserInput): Promise<User> {
        const userData = await users
            .create({
                id: user.id!,
                ...user,
            })
            .go()

        return User.parse(userData.data)
    }

    async get(id: string): Promise<User> {
        const userData = await users.get({ id }).go()

        if (!userData.data) {
            throw new NotFoundError()
        }

        return User.parse(userData.data)
    }

    async find(search: SearchOptions<User>): Promise<User[]> {
        const { by, options } = search

        const results = await users.match(by).go({
            limit: options!.limit,
        })

        return Users.parse(results.data)
    }
}
