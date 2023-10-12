import { createProject } from './mutation'
import { getProject } from './query'

export const projectResolver = {
  Query: {
    getProject: (teamId: string, projectId: string) => {
      getProject({ teamId, projectId })
    },
  },
  Mutation: {
    createProject: (teamId: string, name: string) => {
      createProject({ teamId, name })
    },
  },
}
