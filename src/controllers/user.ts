import { ZodError } from "zod";
import { User } from "../entities";
import { randomUUID } from "crypto";
import RepositoryInterface from "../repository/repositoryInterface";

export class UserController {
    constructor(
        private readonly userRepository: RepositoryInterface<User>
    ) { }

    async create(userInput: User) {
        userInput.id = randomUUID()
        const user = User.parse({ ...userInput })

        return this.userRepository.create(user)
    }
}