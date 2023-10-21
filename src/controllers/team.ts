import { decorateAll, logMethodCall } from '../loggers'
import { Team } from '../entities/team'

@decorateAll(logMethodCall)
export class UserController {
    constructor(private readonly teamRepository: RepositoryInterface<Team>) { }

    public async create(teamInput: Team) {}
}
