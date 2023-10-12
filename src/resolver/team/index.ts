import { addMember, createTeam, changeLeader } from './mutation'
import { getTeamById, getTeamByProject, getTeamsByLeader } from './query'
import {
  updateTeamMemberOptions,
  createTeamOptions,
  getTeamByIdOptions,
} from './types'

export const teamResolver = {
  Query: {
    getTeamById: (_: unknown, options: getTeamByIdOptions) => getTeamById(options),
    getTeamByProject: (_: unknown, options: { project: string }) => getTeamByProject(options),
    getTeamsByLeader: (_: unknown, options: { user: string }) => getTeamsByLeader(options),
  },
  Mutation: {
    createTeam: (_: unknown, options: createTeamOptions) => createTeam(options),
    addMember: (_: unknown, options: updateTeamMemberOptions) => addMember(options),
    changeLeader: (_: unknown, options: updateTeamMemberOptions) => changeLeader(options)
  },
}
