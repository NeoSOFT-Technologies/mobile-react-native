import { BaseLayerDataTransformer } from './../../../shared/src/utils/tranformer/base_layer_transformer'
import {UserModel } from 'shared'

export abstract class MyLoginResponse implements BaseLayerDataTransformer<MyLoginResponse, UserModel> {
  access_token: any

  restore(data: UserModel): MyLoginResponse {
    throw new Error('Method not implemented.')
  }
  transform(): UserModel {
    return new UserModel({ token: this.access_token })
  }
}
