import { UserModel } from 'packages/shared/src/shared'
import { AppDatabase } from './app_database'
import { DatabasePort } from 'data'

class DatabaseAdapter implements DatabasePort {
  readonly databases: AppDatabase

  constructor(params: { databases: AppDatabase }) {
    this.databases = params.databases
  }

  async addUser(params?: { email: string; password: string; token: string }): Promise<boolean> {
    const response = await this.databases.userDao.insertOrUpdate({
      email: params.email,
      password: params.password,
      token: params.token
    })
    if (response) return true
  }

  async userDetails(data: UserModel): Promise<UserModel> {
    return await this.databases.userDao.getUser({
      email: data.email
    })
  }
  async getuserPresentData(data: UserModel): Promise<boolean> {
    return await this.databases.userDao.userPresentData({
      email: data.email
    })
  }
}
export default DatabaseAdapter
