import { Project } from '../../model'

type byTeamOptions = {
  projectId: string
  teamId: string
}

export async function getProject(options: byTeamOptions) {
  return await Project.get({ ...options }).go()
}
