import { UserCheckModel } from 'shared'
import RetrofitService from './services/retrofit_service'
async function SafeCall(apicall: any) {
  try {
    const loginResponse = await apicall
    console.log(loginResponse)
  } catch (e) {
    return e.message
  }
}

export default SafeCall
