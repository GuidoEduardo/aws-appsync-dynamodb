export type createTeamOptions = {
  input: {
    name: string
    leader: string
  }
}

export type updateTeamMemberOptions = {
  input: {
    user: string
    team: string
  }
}

export type getTeamByIdOptions = {
  team: string
}
