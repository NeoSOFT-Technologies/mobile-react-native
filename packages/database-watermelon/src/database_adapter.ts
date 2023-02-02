import { AppDatabase } from './app_database'
import { MyDatabaseModel } from './../../shared/src/model/mydatabasemodel'
import { DatabasePort } from 'data'

class DatabaseAdapter implements DatabasePort {
  readonly databases: AppDatabase

  constructor(params: { databases: AppDatabase }) {
    this.databases = params.databases
  }
  yourFirstDatabaseCall(domain: MyDatabaseModel): Promise<MyDatabaseModel> {
    return this.databases.myModelDao.add(domain)
  }
}
export default DatabaseAdapter
