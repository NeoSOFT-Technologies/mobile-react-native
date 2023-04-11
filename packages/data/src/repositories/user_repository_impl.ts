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

  async login(params?: { email: string; password: string }): Promise<boolean> {
    const usermodel: any = await this.network.login({ email: params.email, password: params.password })
    if (usermodel == 'Request failed with status code 403') {
      return usermodel
    } else {
      const databaseResponse = await this.database.addUser({
        email: params.email,
        password: params.password,
        token: usermodel.access_token
      })
      return databaseResponse
    }
  }
  async fetchUserData(params?: { email: string }): Promise<UserModel> {
    return await this.database.fetchUserData({
      email: params.email
    })
  }

  async fetchUserExists(params?: { email: string }): Promise<boolean> {
    return await this.database.fetchUserExists({
      email: params.email
    })
  }

  async logout(params?: { email: string }): Promise<boolean> {
    return await this.database.removeUser({
      email: params.email
    })
  }
}
