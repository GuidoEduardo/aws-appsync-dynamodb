import { Project, User } from '../../model'
import { Team } from '../../model/team'
import { getTeamByIdOptions } from './types'

export async function getTeamById(options: getTeamByIdOptions) {
  const team = await Team.get(options).go()

  return team.data
}

export async function getTeamByProject(options: { project: string }) {
  const projectData = await Project.get(options).go()
  const team = await Team.get({ team: projectData.data!.team! }).go()

  return team.data
}

export async function getTeamsByLeader(options: { user: string }) {
  const { user } = options;

  const teams = await Team.find({ leader: user }).go()

  return teams.data
}
