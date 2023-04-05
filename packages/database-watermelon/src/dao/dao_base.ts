import { Database } from '@nozbe/watermelondb'
import { BaseDatabaseModel } from '../model/database_base_model'
export abstract class DaoBase<T extends BaseDatabaseModel, P extends Database> {
  protected attachedDatabase: P

  constructor(attachedDatabase: P) {
    this.attachedDatabase = attachedDatabase
  }

  abstract add(record: T): Promise<T>
  abstract addAll(record: Array<T>): Promise<Array<T>>
  abstract delete(record: T): Promise<T>
  abstract insertOrUpdate(record: T): Promise<T>
  abstract deleteAll(): Promise<boolean>
}
