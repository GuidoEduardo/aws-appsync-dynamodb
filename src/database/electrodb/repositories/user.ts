import { User } from "../../../entities";
import { UserModel } from "../models";
import RepositoryInterface from "../../../repository/repositoryInterface"

export default class ElectroUserRepository implements RepositoryInterface<User> {
    async create(user: User): Promise<User> {
        await UserModel.create({
            id: user.id!,
            ...user
        }).go()

        return user
    }
}