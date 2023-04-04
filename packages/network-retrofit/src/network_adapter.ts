import RetrofitService from './services/retrofit_service'
import { NetworkPort } from 'data'
import { MyFirstModel, UserCheckModel } from 'packages/shared/src/shared'
import SafeApiCall from './safe_api_call'
import { MyLoginResponse } from './model/my_login_response'
import { Response } from 'ts-retrofit'

class NetowrkAdapter implements NetworkPort {
  readonly retrofitService: RetrofitService
  constructor(params: { retrofitService: RetrofitService }) {
    this.retrofitService = params.retrofitService
  }
  async yourFirstNetworkCall(): Promise<MyFirstModel> {
    throw new Error('Method not implemented.')
  }

  async loginCall(user: UserCheckModel): Promise<UserCheckModel> {
   const data = await SafeApiCall(this.retrofitService.login({ email: user.email, password: user.password }))
    console.log(data.data)
    return data.data.access_token
  }
}

export default NetowrkAdapter
