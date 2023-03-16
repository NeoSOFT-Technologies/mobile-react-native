import { PostModel } from 'shared'

export interface PostRepositorty {
  getPostData(): Promise<PostModel>
}
