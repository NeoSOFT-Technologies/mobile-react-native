import { PostModel } from 'shared'
import { BaseLayerDataTransformer } from './../../../shared/src/utils/tranformer/base_layer_transformer'
import { MyFirstModel } from './../../../shared/src/model/myfirstmodel'

export abstract class PostEntity implements BaseLayerDataTransformer<PostEntity, PostModel> {
  title: string

  restore(data: PostModel): PostEntity {
    throw new Error('Method not implemented.')
  }
  transform(): PostModel {
    return new PostModel({ title: this.title })
  }
}
