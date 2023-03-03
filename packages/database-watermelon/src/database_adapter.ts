import { AppDatabase } from './app_database'
import { MyDatabaseModel } from './../../shared/src/model/mydatabasemodel'
import { DatabasePort } from 'data'
import { User } from 'packages/shared/src/shared'

class DatabaseAdapter implements DatabasePort {
  readonly databases: AppDatabase

  constructor(params: { databases: AppDatabase }) {
    this.databases = params.databases
  }
  userCheck(user: User): Promise<boolean> {
    console.log('database adapter')
    return this.databases.userDao.checkIfUserLoggedIn({ email: user.email })
  }
  yourFirstDatabaseCall(domain: MyDatabaseModel): Promise<MyDatabaseModel> {
    return this.databases.myModelDao.add(domain)
  }
}
export default DatabaseAdapter
