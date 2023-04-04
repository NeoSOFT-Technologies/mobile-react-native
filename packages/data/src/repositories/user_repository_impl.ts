import { NetworkPort } from './../out/network_port'
import { UserRepository } from './../../../domain/src/repository/user_repository'
import { DatabasePort } from '../out/database_port'
import { UserModel } from 'shared'

export class UserRepositoryImpl implements UserRepository {
  readonly database: DatabasePort
  readonly network: NetworkPort

  constructor(params: { databasePort?: DatabasePort; networkPort: NetworkPort }) {
    this.database = params.databasePort
    this.network = params.networkPort
  }

  async loginCheck(params?: { email: string; password: string }): Promise<boolean> {
    const usermodel: any = await this.network.loginCall({ email: params.email, password: params.password })
    if (usermodel == 'Request failed with status code 403') {
      return usermodel
    } else {
      const databaseResponse = await this.database.userDatabaseCall({
        email: params.email,
        password: params.password,
        token: usermodel
      })
      return databaseResponse
    }
  }
  async getuserdata(params?: { email: string }): Promise<UserModel> {
    return await this.database.getUserDetails({
      email: params.email
    })
  }
}
