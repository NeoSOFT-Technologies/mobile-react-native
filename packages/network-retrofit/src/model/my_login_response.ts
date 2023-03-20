import { BaseLayerDataTransformer } from './../../../shared/src/utils/tranformer/base_layer_transformer'
import { UserCheckModal } from 'shared'

export abstract class MyLoginResponse implements BaseLayerDataTransformer<MyLoginResponse, UserCheckModal> {
  access_token: any

  restore(data: UserCheckModal): MyLoginResponse {
    throw new Error('Method not implemented.')
  }
  transform(): UserCheckModal {
    return new UserCheckModal({ token: this.access_token })
  }
}
