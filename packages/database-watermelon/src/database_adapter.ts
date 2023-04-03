import { AppDatabase } from './app_database'
import { DatabasePort } from 'data'
import { UserCheckModel, UserDetailsModel } from 'packages/shared/src/shared'
import { UserModel } from './model/user_model'

class DatabaseAdapter implements DatabasePort {
  readonly databases: AppDatabase

  constructor(params: { databases: AppDatabase }) {
    this.databases = params.databases
  }

  async userDatabaseCall(userData: UserCheckModel): Promise<UserCheckModel> {
    return await this.databases.userDao.addUserData({
      email: userData.email,
      password: userData.password,
      token: userData.token
    })
  }

  async getUserDetails(data: UserDetailsModel): Promise<UserDetailsModel> {
    return await this.databases.userDao.getUserDetails({
      email: data.email
    })
  }
}
export default DatabaseAdapter
