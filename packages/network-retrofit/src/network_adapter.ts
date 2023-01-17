import RetrofitService  from './services/retrofit_service';
import {NetworkPort} from 'data'

class NetowrkAdapter implements NetworkPort{
  
    yourFirstNetworkCall(): Promise<boolean> {
        throw console.log('call api')
    }
}

export default NetowrkAdapter