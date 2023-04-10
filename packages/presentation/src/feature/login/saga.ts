import { DomainModule } from 'domain-layer/src/di/domain_module'
import { Obsidian } from 'di'
import { put } from 'redux-saga/effects'
import { LOGIN_USER } from './actions'
import { LoginUserParams } from 'domain-layer'

function* LOGIN_USER_SAGA(action) {
  const mesage = 'Request failed with status code 403'
  try {
    const data: any = yield Obsidian.obtain(DomainModule)
      .providesLoginCheckUseCase()
      .execute(new LoginUserParams({ email: action?.params?.data?.email, password: action?.params?.data?.password }))
    if (data == mesage || data == false) {
      yield put({ type: LOGIN_USER.LOGIN_USER_FAILURE, payload: data })
    } else {
      yield put({ type: LOGIN_USER.LOGIN_USER_SUCCESS, payload: data })
    }
  } catch (e) {
    console.log(e)
  }
}
export default LOGIN_USER_SAGA
