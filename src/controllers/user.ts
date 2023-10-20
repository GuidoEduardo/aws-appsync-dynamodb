import { User } from '../entities'
import { randomUUID } from 'crypto'
import { defaultOptions } from '.'
import { decorateAll, logMethodCall } from '../loggers'

@decorateAll(logMethodCall)
export class UserController {
    constructor(private readonly userRepository: RepositoryInterface<User>) { }

    public async create(userInput: User): Promise<User> {
        userInput.id = randomUUID()
        const user = User.parse({ ...userInput })

        return this.userRepository.create(user)
    }

    public async get(id: string): Promise<User> {
        return this.userRepository.get(id)
    }

    public async find(search: SearchOptions<User>): Promise<User[]> {
        search.options ||= defaultOptions
        search.options.offset ||= 0
        search.options.limit ||= 10

        return this.userRepository.find(search)
    }
}
