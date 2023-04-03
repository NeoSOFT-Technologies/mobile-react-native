import { BaseLayerDataTransformer } from './../../../shared/src/utils/tranformer/base_layer_transformer'
import { UserCheckModel } from 'shared'

export abstract class MyLoginResponse implements BaseLayerDataTransformer<MyLoginResponse, UserCheckModel> {
  access_token: any

  restore(data: UserCheckModel): MyLoginResponse {
    throw new Error('Method not implemented.')
  }
  transform(): UserCheckModel {
    return new UserCheckModel({ token: this.access_token })
  }
}
