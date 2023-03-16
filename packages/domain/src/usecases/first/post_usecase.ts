import { PostModel } from 'shared'
import { PostRepositorty } from '../../repository/post_repository'
import { FutureUseCase } from '../base/base_usecase'
import { Params } from '../base/params'

export class PostUsecase extends FutureUseCase<PostParams, PostModel> {
 
  private readonly PostRepositorty: PostRepositorty

  constructor(PostRepositorty: PostRepositorty) {
    super()
    this.PostRepositorty = PostRepositorty
  }

  async execute(params: PostParams): Promise<PostModel> {
    return await this.PostRepositorty.getPostData()
}

  
}

export class PostParams extends Params {
  constructor() {
    super({})
  }
  verify(): boolean {
    console.log('verify')
    return true
  }
}
