import { PostRepositorty } from './../../../domain/src/repository/post_repository';
import { UserCheckModal } from './../../../shared/src/model/myusercheckmodal'
import { NetworkPort } from './../out/network_port'
import { UserRepository } from './../../../domain/src/repository/user_repository'
import { DatabasePort } from '../out/database_port'
import { PostModel } from 'packages/shared/src/shared';

export class PostImpl implements PostRepositorty {
  readonly network: NetworkPort

  constructor(params: {networkPort: NetworkPort }) {
    this.network = params.networkPort
  }
   async getPostData(): Promise<PostModel> {
        return await this.network.postNetworkCall()
    }
}
