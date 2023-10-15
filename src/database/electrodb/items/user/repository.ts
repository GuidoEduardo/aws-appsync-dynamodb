import { User } from '../../../../entities'
import { users } from './model'
import { UserInput, Users } from '../../../../entities/user'
import { NotFoundError } from '../../../../errors'
import RepositoryInterface from '../../../../interfaces/repository'
import { execMethod } from '../../../../loggers'

export class ElectroUserRepository implements RepositoryInterface<User> {
    @execMethod
    async create(user: UserInput): Promise<User> {
        const userData = await users
            .create({
                id: user.id!,
                ...user,
            })
            .go()

        return User.parse(userData.data)
    }

    @execMethod
    async get(id: string): Promise<User> {
        const userData = await users.get({ id }).go()

        if (!userData.data) {
            throw new NotFoundError()
        }

        return User.parse(userData.data)
    }

    @execMethod
    async find(search: SearchOptions<User>): Promise<User[]> {
        const { by, options } = search
        const { limit, offset } = options

        const results = await users.match(by).go({
            limit,
        })

        return Users.parse(results.data)
    }
}
