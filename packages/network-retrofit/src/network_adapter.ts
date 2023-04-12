import RetrofitService from './services/retrofit_service'
import { NetworkPort } from 'data'
import safeApiCall from './safe_api_call'
import { FirstModel } from 'shared'

class NetworkAdapter implements NetworkPort {
  readonly retrofitService: RetrofitService
  constructor(params: { retrofitService: RetrofitService }) {
    this.retrofitService = params.retrofitService
  }

  async login(params?: { email: string; password: string }): Promise<FirstModel> {
    const response = await safeApiCall(this.retrofitService.login({ email: params.email, password: params.password }))
    return response.data.transform()
  }
}

export default NetworkAdapter
