import RetrofitService from './services/retrofit_service'
import { NetworkPort } from 'data'
import { MyFirstModel, UserCheckModel } from 'packages/shared/src/shared'
import SafeApiCall from './safe_api_call'

class NetowrkAdapter implements NetworkPort {
  readonly retrofitService: RetrofitService
  constructor(params: { retrofitService: RetrofitService }) {
    this.retrofitService = params.retrofitService
  }
  async yourFirstNetworkCall(): Promise<MyFirstModel> {
    throw new Error('Method not implemented.')
  }

  async loginCall(user: UserCheckModel): Promise<UserCheckModel> {
    return SafeApiCall(this.retrofitService.login({ email: user.email, password: user.password }))
  }
}

export default NetowrkAdapter
