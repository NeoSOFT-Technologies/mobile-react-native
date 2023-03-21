import { UserCheckModal } from 'shared'
import { UserModel } from './../model/user_model'
import { AppDatabase } from './../app_database'
import { BaseDao } from './base_dao'
import { Collection } from '@nozbe/watermelondb'

export class UserDao extends BaseDao<UserModel> {
  readonly tablename: string
  readonly databaseData: Collection<UserModel>

  tableName(): string {
    return UserModel.table
  }

  constructor(appdatabase: AppDatabase) {
    super(appdatabase)
    this.tablename = this.tableName()
    this.databaseData = this.attachedDatabase.get(this.tablename)
    console.log(this.databaseData)
  }

  async addUserData(params: UserCheckModal): Promise<UserModel> {
    try {
      const data = await this.attachedDatabase.write(async () => {
        const userData = await this.databaseData.create((data: any) => {
          data.email = params.email
          data.password = params.password
          data.token = params.token
        })
        return userData
      })
      return data
    } catch (e) {
      console.log(e)
    }
  }
}
