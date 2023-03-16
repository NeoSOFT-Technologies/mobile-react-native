import { MyFirstModel, PostModel } from 'shared'

export interface NetworkPort {
  yourFirstNetworkCall(): Promise<MyFirstModel>
  postNetworkCall(): Promise<PostModel>
}
