import { UserCheckModel } from 'shared'
import { BaseDatabaseModel } from './database_base_model'
import { BaseLayerDataTransformer } from 'packages/shared/src/shared'
import { field } from '@nozbe/watermelondb/decorators'

export class UserModel extends BaseDatabaseModel implements BaseLayerDataTransformer<UserModel, UserCheckModel> {
  @field('email') email: string
  @field('password') password: string
  @field('token') token: string

  restore(data: UserCheckModel): UserModel {
    throw new Error('Method not implemented.')
  }
  transform(): UserCheckModel {
    return new UserCheckModel({ password: this.password, username: this.email })
  }
  static table = 'userDetails'
}
