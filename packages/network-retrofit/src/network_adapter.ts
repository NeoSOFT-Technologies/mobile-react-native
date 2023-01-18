import RetrofitService from './services/retrofit_service'
import { NetworkPort } from 'data'
import { ServiceBuilder } from 'ts-retrofit'

class NetowrkAdapter implements NetworkPort {
  userService = new ServiceBuilder().setEndpoint('https://schoolfurnstag.php-dev.in').build(RetrofitService)
   response =  this.userService.create('', {})
  yourFirstNetworkCall(): Promise<boolean> {
    throw this.response
  }
}

export default NetowrkAdapter
