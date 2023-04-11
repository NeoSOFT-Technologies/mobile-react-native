import { DbUserModel } from './../model/user_model'
import { AppDatabase } from './../app_database'
import { BaseDao } from './base_dao'
import { Collection, Q } from '@nozbe/watermelondb'
import safeDbCall from '../safe_db_call'
import { FirstModel } from 'packages/shared/src/shared'

export class UserDao extends BaseDao<DbUserModel> {
  readonly databaseData: Collection<DbUserModel>

  tableName(): string {
    return DbUserModel.table
  }

  constructor(appdatabase: AppDatabase) {
    super(appdatabase)
    this.databaseData = this.attachedDatabase.get(this.tableName())
  }

  async insertOrUpdate(params?: { email: string; password: string }): Promise<DbUserModel> {
    return safeDbCall(
      this.attachedDatabase.write(async () => {
        const userData = await this.databaseData.create((data: FirstModel) => {
          data.email = params.email
          data.password = params.password
        })
        return userData
      })
    )
  }

  
}
