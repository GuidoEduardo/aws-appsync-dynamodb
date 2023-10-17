import { z } from 'zod'
import validator from 'validator'

const id = z.string().uuid().readonly().optional()

const firstName = z
    .string()
    .refine(arg => !validator.isEmpty(arg), { message: 'First name required' })

const lastName = z
    .string()
    .refine(arg => !validator.isEmpty(arg), { message: 'Last name required' })

const username = z
    .string()
    .refine(arg => !arg.includes(' ') && !validator.isEmpty(arg), {
        message: 'Invalid username',
    })

const email = z.string().email()

const role = z.enum(['admin', 'collaborator'], {
    required_error: 'Role is required',
    invalid_type_error: 'Role must be valid',
})

const createdAt = z.number().optional()
const updatedAt = z.number().optional()

export const User = z.object({
    id,
    firstName,
    lastName,
    username,
    email,
    role,
    createdAt,
    updatedAt,
})
export const Users = z.array(User)

export type UserRoles = z.infer<typeof role>
export type User = z.infer<typeof User>
export type UserInput = Omit<User, 'createdAt' | 'updatedAt'>
