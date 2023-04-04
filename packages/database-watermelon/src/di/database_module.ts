import { AppDatabase } from './../app_database'
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite'
import { Graph, Singleton, ObjectGraph, Provides } from 'di'
import migration from '../migration'
import schema from '../schema'
import DatabaseAdapter from '../database_adapter'
import { DatabasePort } from 'data'
import { FoundationModule } from 'foundation'
import { DbUserModel } from '../model/user_model'

@Singleton()
@Graph({ subgraphs: [FoundationModule] })
export class DatabaseModule extends ObjectGraph {
  @Provides()
  databaseservice(provideDatabaseName: string): SQLiteAdapter {
    return new SQLiteAdapter({
      dbName: provideDatabaseName,
      schema: schema,
      migrations: migration
    })
  }

  @Provides()
  database(databaseservice: SQLiteAdapter): AppDatabase {
    return new AppDatabase({
      adapter: databaseservice,
      modelClasses: [DbUserModel]
    })
  }
  @Provides()
  databaseAdapter(database: AppDatabase): DatabasePort {
    return new DatabaseAdapter({
      databases: database
    })
  }
}
