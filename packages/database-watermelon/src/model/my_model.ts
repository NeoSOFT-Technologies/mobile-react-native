import { TableName } from '@nozbe/watermelondb'
import { BaseDatabaseModel } from './database_base_model'
import { text } from '@nozbe/watermelondb/decorators'
import { BaseLayerDataTransformer, MyDatabaseModel } from 'packages/shared/src/shared'

export class MyModel extends BaseDatabaseModel implements BaseLayerDataTransformer<MyModel, MyDatabaseModel> {
  restore(data: MyDatabaseModel): MyModel {
    this.title = data.title
    this.body = data.body
    return this
  }
  transform(): MyDatabaseModel {
    throw new Error('Method not implemented.')
  }

  static table = 'MyTable'

  @text('title') title
  @text('body') body
}
