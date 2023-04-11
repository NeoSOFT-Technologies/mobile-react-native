import { FirstModel } from 'packages/shared/src/shared';
import { AppDatabase } from './app_database'
import { DatabasePort } from 'data'

class DatabaseAdapter implements DatabasePort {
  readonly databases: AppDatabase

  constructor(params: { databases: AppDatabase }) {
    this.databases = params.databases
  }

  async yourFirstDatabaseCall(domain: FirstModel): Promise<FirstModel> {
    const response = await this.databases.userDao.insertOrUpdate({
      email: domain.email,
      password: domain.password
    })
    return response
  }
}
export default DatabaseAdapter
