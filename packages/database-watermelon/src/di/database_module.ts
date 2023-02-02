import { FoundationModule } from './../../../foundation/src/di/foundation_module';
import { MyModel } from './../model/my_model';
import { AppDatabase } from './../app_database';
import { DatabasePort } from './../../../data/src/out/database_port'
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite'
import { Graph, Singleton, ObjectGraph, Provides } from 'di'
import migration from '../migration'
import schema from '../schema'
import DatabaseAdapter from '../database_adapter'

@Singleton()
@Graph({subgraphs : [FoundationModule]})
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
      modelClasses: [
        MyModel
      ]
    })
  }
  @Provides()
  databaseAdapter(database: AppDatabase): DatabasePort {
    return new DatabaseAdapter({
      databases: database
    })
  }
}
