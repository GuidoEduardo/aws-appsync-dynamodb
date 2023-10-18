import { z } from "zod";
import { User } from "./user";

const id = z.string().uuid().readonly().optional()

const leader = z.string().uuid()

const members = z.set(User).optional()

const createdAt = z.number().optional()
const updatedAt = z.number().optional()

export const Team = z.object({
    id,
    leader,
    members,
    createdAt,
    updatedAt
})
export const Teams = z.array(Team)

export type Team = z.infer<typeof Team>
export type TeamInput = Omit<Team, 'createdAt' | 'updatedAt'>
