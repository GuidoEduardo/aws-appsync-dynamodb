import { Service } from 'electrodb'
import { User } from './user'
import { Team } from './team'
import { Project } from './project'
import { Issue } from './issue'
import { table, client } from '../common'

export const projectmanager = new Service(
  {
    user: User,
    team: Team,
    project: Project,
    issue: Issue,
  },
  { table, client },
)

export { User, Team, Project, Issue }
