import { describe, expect, test } from "@jest/globals";
import { generateMock } from '@anatine/zod-mock'
import { User } from "../entities";
import { userController } from "../controllers";

describe('User Controller', () => {
    let result: User | null = null

    test('create return user', async () => {
        const user = generateMock(User)

        result = await userController.create(user)

        expect(!!User.parse(result)).toBe(true)
    })

    test('find return user created', async () => {
        const users = await userController.find({
            by: {
                username: result!.username
            }
        })

        expect(users.length == 1).toBe(true)
        expect(users[0].id == result!.id).toBe(true)
    })

    test('get return user created', async () => {
        const user = await userController.get(result!.id!)

        expect(!!User.parse(user)).toBe(true)
        expect(user.id == result!.id).toBe(true)
    })
})