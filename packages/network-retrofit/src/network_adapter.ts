import { MyFirstModel } from './../../shared/src/model/myfirstmodel'
import RetrofitService from './services/retrofit_service'
import { NetworkPort } from 'data'
import { PostModel } from 'packages/shared/src/shared'

class NetowrkAdapter implements NetworkPort {
  readonly retrofitService: RetrofitService

  constructor(params: { retrofitService: RetrofitService }) {
    this.retrofitService = params.retrofitService
  }

  async postNetworkCall(): Promise<PostModel> {
   try{
    const data = await this.retrofitService.getPostData()
    console.log('15',data)
    return data.data.transform()
   }
   catch(e){
    console.log(e)
   }
  }

  async yourFirstNetworkCall(): Promise<MyFirstModel> {
    return (await this.retrofitService.login()).data.transform()
  }
}

export default NetowrkAdapter
