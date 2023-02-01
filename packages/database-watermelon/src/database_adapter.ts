import { MyDatabaseModel } from './../../shared/src/model/mydatabasemodel'
import { Database } from '@nozbe/watermelondb'
import { DatabasePort } from 'data'

class DatabaseAdapter implements DatabasePort {
  readonly databases: Database
  data
  constructor(params: { databases: Database }) {
    this.databases = params.databases
  }

  async yourFirstDatabaseCall(): Promise<MyDatabaseModel> {
    this.data = this.databases.get('post').query().fetch()
    return this.data.transform()
  }
}
export default DatabaseAdapter
