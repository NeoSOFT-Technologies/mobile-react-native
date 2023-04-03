import { UserDetailsModel } from './../../../shared/src/model/userDetailsmodal'
import { UserCheckModel } from 'shared'
import { UserModel } from './../model/user_model'
import { AppDatabase } from './../app_database'
import { BaseDao } from './base_dao'
import { Collection, Q } from '@nozbe/watermelondb'

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
  }

  async addUserData(params: UserCheckModel): Promise<UserModel> {
    try {
      const data = await this.attachedDatabase.write(async () => {
        const userData = await this.databaseData.create((data: UserModel) => {
          data.email = params.email
          data.password = params.password
          data.token = params.token
        })
        return userData
      })
      return data
    } catch (e) {
      return e
    }
  }

  async getUserDetails(params: UserDetailsModel): Promise<UserModel> {
    try {
      const response: any = await this.databaseData.query(Q.where('email', Q.like(params.email))).fetch()
      return response[0]._raw.email
    } catch (e) {
      return e
    }
  }
}
