import { UserModel } from './../model/user_model'
import { MyDatabaseModel } from 'packages/shared/src/model/mydatabasemodel'
import { MyModel } from '../model/my_model'
import { AppDatabase } from './../app_database'
import { BaseDao } from './base_dao'
import { Q } from '@nozbe/watermelondb'

export class UserDao extends BaseDao<UserModel> {
  tableName() {
    return UserModel.table
  }

  constructor(appdatabase: AppDatabase) {
    super(appdatabase)
  }

  async checkIfUserLoggedIn(params: { email: string }): Promise<boolean> {
    return (await this.getTable().query().fetchCount()) > 0
  }
}
