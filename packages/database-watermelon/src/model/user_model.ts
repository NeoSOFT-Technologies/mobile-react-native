import { User } from 'shared';
import { TableName } from '@nozbe/watermelondb'
import { BaseDatabaseModel } from './database_base_model'
import { text } from '@nozbe/watermelondb/decorators'
import { BaseLayerDataTransformer } from 'packages/shared/src/shared'

export class UserModel extends BaseDatabaseModel implements BaseLayerDataTransformer<UserModel, User> {
 
  restore(data: User): UserModel {
    throw new Error('Method not implemented.');
  }
  transform(): User {
    return new User({ email: this.email });
  }


  static table = 'User'

  @text('email') email
  
}