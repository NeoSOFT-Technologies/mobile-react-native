import { MyDatabaseModel } from 'packages/shared/src/model/mydatabasemodel'
import { MyModel } from '../model/my_model'
import { AppDatabase } from './../app_database'
import { BaseDao } from './base_dao'

export class MyModelDao extends BaseDao<MyModel> {
  tableName() {
    return MyModel.table
  }
  constructor(appdatabase: AppDatabase) {
    super(appdatabase)
  }

  add(model: MyDatabaseModel): Promise<MyModel> {
    return this.getTable().create(record => record.restore(model))
  }
}
