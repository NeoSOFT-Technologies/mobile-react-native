import { BaseLayerDataTransformer } from './../../../shared/src/utils/tranformer/base_layer_transformer'
import { MyFirstModel } from './../../../shared/src/model/myfirstmodel'

export abstract class MyLoginResponse implements BaseLayerDataTransformer<MyLoginResponse, MyFirstModel> {
  userId: number
  id: number
  title: string
  completed: boolean

  restore(data: MyFirstModel): MyLoginResponse {
    throw new Error('Method not implemented.')
  }
  transform(): MyFirstModel {
    return new MyFirstModel({ loginStatus: this.completed })
  }
}
