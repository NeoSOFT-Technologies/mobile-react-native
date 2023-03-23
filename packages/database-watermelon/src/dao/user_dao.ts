import { UserDetailsModel } from './../../../shared/src/model/userDetailsmodal'
import { UserCheckModal } from 'shared'
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

  async addUserData(params: UserCheckModal): Promise<UserModel> {
    console.log('23', params)
    try {
      const data = await this.attachedDatabase.write(async () => {
        const userData = await this.databaseData.create((data: any) => {
          data.email = params.email
          data.password = params.password
          data.token = params.token
        })
        return userData
      })
      console.log('33', data)
      return data
    } catch (e) {
      console.log(e)
    }
  }

  async getUserDetails(params: UserDetailsModel): Promise<boolean> {
    console.log('41', params)
    try {
      const response = await this.attachedDatabase.collections
        .get(this.tablename)
        .query(Q.where('email', Q.eq(params.email)))
        .fetch()
      const data = await this.attachedDatabase.collections
        .get(this.tablename)
        .query(Q.unsafeSqlQuery(`select * from ${this.tablename}`))
        .fetchCount()
      const list = await this.attachedDatabase.collections.get(this.tablename).query().fetch()
      console.log('43', response)
      console.log('44', data)
      console.log('46', list)
      return
    } catch (e) {
      console.log(e)
    }
  }
}
