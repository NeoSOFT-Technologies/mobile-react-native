import { DomainModule } from 'domain-layer/src/di/domain_module'
import { Obsidian } from 'di'
import { put } from 'redux-saga/effects'
import { REQUEST_USER } from './actions'
import { LoginCheckParams } from 'domain-layer'

function* getUserSaga(action) {
  const mesage = 'Request failed with status code 403'
  try {
    const data: any = yield Obsidian.obtain(DomainModule)
      .providesLoginCheckUseCase()
      .execute(new LoginCheckParams({ email: action?.params?.data?.email, password: action?.params?.data?.password }))
    if (data == mesage || data == false) {
      yield put({ type: REQUEST_USER.REQUEST_USER_FAILURE, payload: data })
    } else {
      yield put({ type: REQUEST_USER.REQUEST_USER_SUCCESS, payload: data })
    }
  } catch (e) {
    console.log(e)
  }
}
export default getUserSaga
