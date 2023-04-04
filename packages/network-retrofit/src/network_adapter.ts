import RetrofitService from './services/retrofit_service'
import { NetworkPort } from 'data'
import safecall from './safe_api_call'
import { UserModel } from 'shared'

class NetowrkAdapter implements NetworkPort {
  readonly retrofitService: RetrofitService
  constructor(params: { retrofitService: RetrofitService }) {
    this.retrofitService = params.retrofitService
  }

  async loginCall(params?: { email: string; password: string }): Promise<UserModel> {
    const data = await safecall(this.retrofitService.login({ email: params.email, password: params.password }))
    return data.data.access_token
  }
}

export default NetowrkAdapter
