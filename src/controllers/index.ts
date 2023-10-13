import { UserController } from "./user"
import ElectroUserRepository from "../database/electrodb/repositories/user"

const userController = new UserController(new ElectroUserRepository())

export { userController }