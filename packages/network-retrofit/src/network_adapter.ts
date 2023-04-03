import RetrofitService from './services/retrofit_service'
import { NetworkPort } from 'data'
import { MyFirstModel, UserCheckModel } from 'packages/shared/src/shared'

class NetowrkAdapter implements NetworkPort {
  readonly retrofitService: RetrofitService

  constructor(params: { retrofitService: RetrofitService }) {
    this.retrofitService = params.retrofitService
  }
  async yourFirstNetworkCall(): Promise<MyFirstModel> {
    throw new Error('Method not implemented.')
  }

  async loginCall(user: UserCheckModel): Promise<UserCheckModel> {
    try {
      const loginResponse = await this.retrofitService.login({ email: user.email, password: user.password })
      return loginResponse.data.access_token
    } catch (e) {
      return e.message
    }
  }
}

export default NetowrkAdapter
