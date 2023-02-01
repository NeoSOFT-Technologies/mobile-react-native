import { BaseLayerDataTransformer, MyDatabaseModel } from 'packages/shared/src/shared'

export abstract class MyDatabaseResponse implements BaseLayerDataTransformer<MyDatabaseResponse, MyDatabaseModel> {
  post: unknown
  getPost: boolean

  restore(data: MyDatabaseModel): MyDatabaseResponse {
    throw new Error('Database not implemented.')
  }

  transform(): MyDatabaseModel {
    return new MyDatabaseModel({ databaseStatus: this.getPost })
  }
}
