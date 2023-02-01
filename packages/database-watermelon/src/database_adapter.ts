import { MyDatabaseModel } from './../../shared/src/model/mydatabasemodel'
import { Database } from '@nozbe/watermelondb'
import { DatabasePort } from 'data'
class DatabaseAdapter implements DatabasePort {
  readonly database: Database
  constructor(params: { databases: Database }) {
    this.database = params.databases
  }

  async yourFirstDatabaseCall(): Promise<MyDatabaseModel> {
    return
  }
}
export default DatabaseAdapter
