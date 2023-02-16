import { TableName } from '@nozbe/watermelondb';
/* eslint-disable @typescript-eslint/no-unused-vars */
import { AppDatabase } from './../app_database'
import { Collection, Database } from '@nozbe/watermelondb'
import { DaoBase } from './dao_base'
import { BaseDatabaseModel } from '../model/database_base_model'

export abstract class BaseDao<T extends BaseDatabaseModel> extends DaoBase<T, AppDatabase> {
  add(record: T): Promise<T> {
    throw new Error('Method not implemented.')
  }
  addAll(record: T[]): Promise<T[]> {
    throw new Error('Method not implemented.')
  }
  delete(record: T): Promise<T> {
    throw new Error('Method not implemented.')
  }
  insertOrUpdate(record: T): Promise<T> {
    throw new Error('Method not implemented.')
  }
  deleteAll(): Promise<boolean> {
    throw new Error('Method not implemented.')
  }

  constructor(database: AppDatabase) {
    super(database)
  }

  getTable(): Collection<T> {
    return this.attachedDatabase.get<T>(this.tableName())
  }

  abstract tableName()
}
