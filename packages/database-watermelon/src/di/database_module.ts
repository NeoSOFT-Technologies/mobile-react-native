import { DatabasePort } from './../../../data/src/out/database_port'
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite'
import { Graph, Singleton, ObjectGraph, Provides } from 'di'
import migration from '../model/migration'
import schema from '../model/schema'
import { Database } from '@nozbe/watermelondb'
import DatabaseAdapter from '../database_adapter'

@Singleton()
@Graph()
export class DatabaseModule extends ObjectGraph {
  @Provides()
  databaseservice(databasename: string): SQLiteAdapter {
    return new SQLiteAdapter({
      dbName: databasename,
      schema: schema,
      migrations: migration
    })
  }
  @Provides()
  database(sql: SQLiteAdapter): Database {
    return new Database({
      adapter: sql,
      modelClasses: []
    })
  }
  @Provides()
  databaseAdapter(database: Database): DatabasePort {
    return new DatabaseAdapter({
      databases: database
    })
  }
}
