import { BaseLayerDataTransformer, UserModel } from 'shared'
import { BaseDatabaseModel } from './database_base_model'
import { field } from '@nozbe/watermelondb/decorators'

export class DbUserModel extends BaseDatabaseModel implements BaseLayerDataTransformer<DbUserModel, UserModel> {
  @field('email') email: string
  @field('password') password: string
  @field('token') token: string

  restore(data: UserModel): DbUserModel {
    throw new Error('Method not implemented.')
  }
  transform(): UserModel {
    return new UserModel({ password: this.password, username: this.email })
  }
  static table = 'userDetails'
}
