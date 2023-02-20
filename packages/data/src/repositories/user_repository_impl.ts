import { UserCheckModal } from './../../../shared/src/model/myusercheckmodal'
import { NetworkPort } from './../out/network_port'
import { UserRepository } from './../../../domain/src/repository/user_repository'
import { DatabasePort } from '../out/database_port'

export class UserRepositoryImpl implements UserRepository {
  //readonly database: DatabasePort
  readonly network: NetworkPort

  constructor(params: {databasePort?: DatabasePort, networkPort: NetworkPort}) {
    //this.database = databasePort
    this.network = params.networkPort
    console.log("user_repo_epl")
  }
  async loginCheck(params?: { userName: string }): Promise<boolean> {
    return true;
    //return this.database.userCheck({ email: params.userName })
  }
}

