import { UserCheckModal, UserDetailsModel } from 'shared'
import { NetworkPort } from './../out/network_port'
import { UserRepository } from './../../../domain/src/repository/user_repository'
import { DatabasePort } from '../out/database_port'

export class UserRepositoryImpl implements UserRepository {
  readonly database: DatabasePort
  readonly network: NetworkPort

  constructor(params: { databasePort?: DatabasePort; networkPort: NetworkPort }) {
    this.database = params.databasePort
    this.network = params.networkPort
  }

  async loginCheck(params?: { username: string; password: string }): Promise<UserCheckModal> {
    const message = 'Request failed with status code 403'
    const loginResponse: any = await this.network.loginCall({ email: params.username, password: params.password })
    if (loginResponse == message) {
      return loginResponse
    } else {
      await this.database.userDatabaseCall({
        email: params.username,
        password: params.password,
        token: loginResponse
      })
      return loginResponse
    }
  }
  async getuserdata(params?: { email: string }): Promise<boolean> {
    return await this.database.getUserDetails({
      email: params.email
    })
  }
}
