import { z } from "zod";
import validator from 'validator'

const firstName = z.string({
    required_error: "First name is required",
    invalid_type_error: "First name must be a string"
}).refine(
    arg => !validator.isEmpty(arg),
    { message: "First name required" }
)

const lastName = z.string({
    required_error: "Last name is required",
    invalid_type_error: "Last name must be a string"
}).refine(
    arg => !validator.isEmpty(arg),
    { message: "Last name required" }
)

const username = z.string({
    required_error: "Username is required",
    invalid_type_error: "Username must be a string"
}).refine(
    arg => !arg.includes(' '),
    { message: "Invalid username" }
)

const email = z.string({
    required_error: "Email is required",
    invalid_type_error: "Invalid email",
}).email()

const role = z.union([
    z.literal('admin'),
    z.literal('collaborator'),
    z.literal('project-lead')
], {
    required_error: "Role is required",
    invalid_type_error: "Invalid role. The role should be admin, collaborator or project-lead"
})

export const UserSchema = z.object({
    firstName,
    lastName,
    username,
    email,
    role
})