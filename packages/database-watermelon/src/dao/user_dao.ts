import { DbUserModel } from './../model/user_model'
import { AppDatabase } from './../app_database'
import { BaseDao } from './base_dao'
import { Collection, Q } from '@nozbe/watermelondb'
import { UserModel } from 'packages/shared/src/shared'
import safeDbCall from '../safe_db_call'

export class UserDao extends BaseDao<DbUserModel> {
  readonly databaseData: Collection<DbUserModel>

  tableName(): string {
    return DbUserModel.table
  }

  constructor(appdatabase: AppDatabase) {
    super(appdatabase)
    this.databaseData = this.attachedDatabase.get(this.tableName())
  }

  async insertOrUpdate(params?: { email: string; password: string; token: string }): Promise<DbUserModel> {
    return safeDbCall(
      this.attachedDatabase.write(async () => {
        const userData = await this.databaseData.create((data: UserModel) => {
          data.email = params.email
          data.password = params.password
          data.access_token = params.token
        })
        return userData
      })
    )
  }

  async getUser(data: { email: string }): Promise<DbUserModel> {
    const response: any = await safeDbCall(this.databaseData.query().fetch())
    return !response ? [] : response[0]?._raw?.email
  }

  async deleteRecord(data: { email: string }): Promise<boolean> {
    await this.attachedDatabase.write(async () => {
      const response: any = await this.databaseData
        .query(Q.where('email', Q.like(`${data.email}`)))
        .destroyAllPermanently()
      return response
    })
    return true
  }
}
