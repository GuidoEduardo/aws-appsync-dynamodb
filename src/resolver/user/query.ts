import { User } from '../../model'
import { Team } from '../../model'

export async function getUserById(options: {
  user: string
}) {
  const user = await User.get(options).go()

  return user.data
}

export async function getUserByUsername(options: {
  username: string
}) {
  const user = await User.find(options).go()

  return user.data[0]
}

export async function getUsersByLeader(options: {
  user: string
}) {
  let users: string[] = []
  let usersData: any[] = []

  const leader = await User.get(options).go()
  const teams = await Team.find({ leader: leader.data?.user }).go()

  teams.data.forEach(team => {
    users.push(...team.members!)
  })

  users.forEach(async user => {
    let userData = await User.get({ user: user }).go()

    if (userData) {
      usersData.push(userData.data)
    }
  })

  return usersData
}