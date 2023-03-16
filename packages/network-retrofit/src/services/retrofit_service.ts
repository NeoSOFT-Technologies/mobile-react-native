import { MyLoginResponse } from './../model/my_login_response'
import { BasePath, BaseService, POST, Response,GET } from 'ts-retrofit'
import { PostEntity } from '../model/post_entity'

@BasePath('')
class RetrofitService extends BaseService {
  @POST('login')
  async login(): Promise<Response<MyLoginResponse>> {
    return <Response<MyLoginResponse>>{}
  }
  @GET('/posts')
  async getPostData():Promise<Response<PostEntity>> {
    return <Response<PostEntity>>{}
  }

}

export default RetrofitService
