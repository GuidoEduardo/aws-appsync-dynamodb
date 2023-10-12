export type createUserOptions = {
  input: {
    firstName: string
    lastName: string
    username: string
    email: string
    role: 'admin' | 'project_lead' | 'collaborator'
  }
}