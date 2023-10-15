import { UserController } from './user'
import { ElectroUserRepository } from '../database/electrodb/items/user'

export const defaultOptions = {
    offset: 0,
    limit: 10,
}

const userController = new UserController(new ElectroUserRepository())

export { userController }
