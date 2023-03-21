import { UserCheckModal } from 'shared'
import { BaseDatabaseModel } from './database_base_model'
import { BaseLayerDataTransformer } from 'packages/shared/src/shared'

export class UserModel extends BaseDatabaseModel implements BaseLayerDataTransformer<UserModel, UserCheckModal> {
  email: string
  password: string
  token: string

  restore(data: UserCheckModal): UserModel {
    throw new Error('Method not implemented.')
  }
  transform(): UserCheckModal {
    return new UserCheckModal({ password: this.password, username: this.email })
  }
  static table = 'userDetails'
}
