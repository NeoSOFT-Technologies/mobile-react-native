import { MyModel } from './../model/my_model'
import { AppDatabase } from './../app_database'
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite'
import { Graph, Singleton, ObjectGraph, Provides } from 'react-obsidian'
import migration from '../migration'
import schema from '../schema'
import DatabaseAdapter from '../database_adapter'
import { DatabasePort } from 'data'
import { FoundationModule } from 'foundation'

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
  database(sql: SQLiteAdapter): AppDatabase {
    return new AppDatabase({
      adapter: sql,
      modelClasses: [MyModel]
    })
  }
  @Provides()
  databaseAdapter(database: AppDatabase): DatabasePort {
    return new DatabaseAdapter({
      databases: database
    })
  }
}
