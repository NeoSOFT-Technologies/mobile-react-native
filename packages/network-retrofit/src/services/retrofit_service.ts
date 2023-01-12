import {
  BasePath,
  BaseService,
  Body,
  DELETE,
  GET,
  Header,
  PATCH,
  Path,
  POST,
  PUT,
  Response,
  ServiceBuilder
} from 'ts-retrofit'

interface User {
  id?: number
}

@BasePath('')
class RetrofitService extends BaseService {
  @GET('')
  async get(@Header('Authorization') authorization: string): Promise<Response<Array<User>>> {
    return <Response<Array<User>>>{}
  }

  @POST('')
  async create(@Header('Authorization') authorization: string, @Body user: User): Promise<Response> {
    return <Response>{}
  }

  @PUT('')
  async update(
    @Header('Authorization') authorization: string,
    @Path('') userId: number,
    @Body user: User
  ): Promise<Response> {
    return <Response>{}
  }

  @PATCH('')
  async patch(
    @Header('Authorization') authorization: string,
    @Path('') userId: number,
    @Body user: Partial<User>
  ): Promise<Response> {
    return <Response>{}
  }

  @DELETE('')
  async delete(@Header('Authorization') authorization: string, @Path('') userId: number): Promise<Response> {
    return <Response>{}
  }
}
;(async () => {
  const authorization = ''
  const userService = new ServiceBuilder().setEndpoint('').build(RetrofitService)
  const response = await userService.get(authorization)
  return response
})()
export default RetrofitService
