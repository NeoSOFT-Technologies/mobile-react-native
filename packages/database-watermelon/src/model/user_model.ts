import { BaseLayerDataTransformer, FirstModel } from 'shared'
import { BaseDatabaseModel } from './database_base_model'
import { field } from '@nozbe/watermelondb/decorators'

export class DbUserModel extends BaseDatabaseModel implements BaseLayerDataTransformer<DbUserModel, FirstModel> {
  @field('email') email: string
  @field('password') password: string

  restore(data: FirstModel): DbUserModel {
    throw new Error('Method not implemented.')
  }
  transform(): FirstModel {
    return new FirstModel({ password: this.password, username: this.email })
  }
  static table = 'userDetails'
}
