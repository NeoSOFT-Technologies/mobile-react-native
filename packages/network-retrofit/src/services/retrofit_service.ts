import { MyLoginResponse } from './../model/my_login_response'
import { BasePath, BaseService, GET, POST, Response, Headers, Body } from 'ts-retrofit'
import { UserCheckModal } from 'shared'

@BasePath('')
class RetrofitService extends BaseService {
  @POST('/login')
  async login(@Body item: UserCheckModal): Promise<Response<MyLoginResponse>> {
    return <Response<MyLoginResponse>>{}
  }
}

export default RetrofitService
