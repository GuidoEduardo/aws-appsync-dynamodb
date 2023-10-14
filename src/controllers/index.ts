import { UserController } from './user'
import { ElectroUserRepository } from '../database/electrodb/items/user'

const userController = new UserController(new ElectroUserRepository())

export { userController }
