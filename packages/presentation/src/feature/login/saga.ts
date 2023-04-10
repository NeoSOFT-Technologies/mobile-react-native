import { DomainModule } from 'domain-layer/src/di/domain_module'
import { Obsidian } from 'di'
import { put } from 'redux-saga/effects'
import { LOGIN } from './actions'
import { LoginParams } from 'domain-layer'

function* loginSaga(action) {
  const mesage = 'Request failed with status code 403'
  try {
    const data: any = yield Obsidian.obtain(DomainModule)
      .providesLoginUseCase()
      .execute(new LoginParams({ email: action?.params?.data?.email, password: action?.params?.data?.password }))
    if (data == mesage || data == false) {
      yield put({ type: LOGIN.failure, payload: data })
    } else {
      yield put({ type: LOGIN.success, payload: data })
    }
  } catch (e) {
    console.log(e)
  }
}
export default loginSaga;
