import { AppDatabase } from './app_database'
import { DatabasePort } from 'data'
import { UserCheckModal } from 'packages/shared/src/shared'
import { UserModel } from './model/user_model'

class DatabaseAdapter implements DatabasePort {
  readonly databases: AppDatabase

  constructor(params: { databases: AppDatabase }) {
    this.databases = params.databases
  }
  async userDatabaseCall(userData: UserCheckModal): Promise<UserModel> {
    try {
      return await this.databases.userDao.addUserData({
        email: userData.email,
        password: userData.password,
        token: userData.token
      })
    } catch (e) {
      console.log(e)
    }
  }
}
export default DatabaseAdapter
