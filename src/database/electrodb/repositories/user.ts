import { User } from '../../../entities'
import { UserModel } from '../models'
import { UserInput, Users } from '../../../entities/user'
import { NotFoundError } from '../../../errors'
import RepositoryInterface from '../../../repository/repositoryInterface'

export default class ElectroUserRepository
  implements RepositoryInterface<User>
{
  async create(user: UserInput): Promise<User> {
    const userData = await UserModel.create({
      id: user.id!,
      ...user,
    }).go()

    return User.parse(userData.data)
  }

  async get(id: string): Promise<User> {
    const userData = await UserModel.get({ id }).go()

    if (!userData.data) {
      throw new NotFoundError()
    }

    return User.parse(userData.data)
  }

  async find(user: UserInput): Promise<User[]> {
    const usersData = await UserModel.match(user).go()

    return Users.parse(usersData.data)
  }
}
