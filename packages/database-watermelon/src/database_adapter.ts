import { UserModel } from 'packages/shared/src/shared'
import { AppDatabase } from './app_database'
import { DatabasePort } from 'data'

class DatabaseAdapter implements DatabasePort {
  readonly databases: AppDatabase

  constructor(params: { databases: AppDatabase }) {
    this.databases = params.databases
  }

  async adduser(params?: { email: string; password: string; token: string }): Promise<boolean> {
    const response = await this.databases.userDao.insertOrUpdate({
      email: params.email,
      password: params.password,
      token: params.token
    })
    if (response) return true
  }

  async getUserDetails(data: UserModel): Promise<UserModel> {
    return await this.databases.userDao.getUser({
      email: data.email
    })
  }
  async removeUser(params: { email: string }): Promise<boolean> {
    return await this.databases.userDao.deleteRecord({
      email: params.email
    })
  }
}
export default DatabaseAdapter
