import { MyFirstModel } from './../../shared/src/model/myfirstmodel';
import RetrofitService from './services/retrofit_service'
import { NetworkPort } from 'data'

class NetowrkAdapter implements NetworkPort {
  readonly retrofitService: RetrofitService

  constructor(params: { retrofitService: RetrofitService }) {
    this.retrofitService = params.retrofitService
  }

  async yourFirstNetworkCall(): Promise<MyFirstModel> {
    return (await this.retrofitService.login()).data.transform()
  }
}

export default NetowrkAdapter
