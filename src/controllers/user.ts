import { User } from '../entities'
import { randomUUID } from 'crypto'
import RepositoryInterface from '../interfaces/repository'

export class UserController {
  constructor(private readonly userRepository: RepositoryInterface<User>) { }

  async create(userInput: User) {
    userInput.id = randomUUID()
    const user = User.parse({ ...userInput })

    return this.userRepository.create(user)
  }

  async get(id: string) {
    return this.userRepository.get(id)
  }

  async find(userOptions: User) {
    return this.userRepository.find(userOptions)
  }
}
