import { UserCheckModal } from './../../../shared/src/model/myusercheckmodal'
import { NetworkPort } from './../out/network_port'
import { UserRepository } from './../../../domain/src/repository/user_repository'
import { DatabasePort } from '../out/database_port'

export class UserRepositoryImpl implements UserRepository {
  readonly database: DatabasePort
  readonly network: NetworkPort

  constructor(databasePort: DatabasePort, networkPort: NetworkPort) {
    this.database = databasePort
    this.network = networkPort
  }
  loginCheck(params?: { userName: string }): Promise<boolean> {
    return this.database.userCheck({ email: params.userName })
  }
}
