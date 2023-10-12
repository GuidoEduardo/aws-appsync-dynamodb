import { randomUUID } from 'crypto'
import { Project } from '../../model'

type createProjectOptions = {
  teamId: string
  name: string
}

type changeProjectTeamOptions = {
  teamId: string
  projectId: string
}

export async function createProject(options: createProjectOptions) {
  await Project.create({
    ...options,
    projectId: randomUUID(),
    created_at: new Date().toLocaleDateString(),
    updated_at: new Date().toLocaleDateString(),
  }).go()
}

export async function changeProjectTeam(options: changeProjectTeamOptions) {
  const { teamId, projectId } = options

  await Project.patch({
    ...options,
  }).set({ name: 'teste' })
}
