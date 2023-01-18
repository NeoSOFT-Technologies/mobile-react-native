import { MyLoginResponse } from './../model/my_login_response'
import { BasePath, BaseService, POST, Response } from 'ts-retrofit'

@BasePath('/api/')
class RetrofitService extends BaseService {
  @POST('login')
  async login(): Promise<Response<MyLoginResponse>> {
    return <Response<MyLoginResponse>>{}
  }
}

export default RetrofitService
