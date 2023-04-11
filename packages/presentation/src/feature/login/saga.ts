import { DomainModule } from 'domain-layer/src/di/domain_module'
import { Obsidian } from 'di'
import { put } from 'redux-saga/effects'
import { LOGIN } from './actions'
import { LoginParams } from 'domain-layer'
import { LOGOUT } from '../logout/action'
import { FETCH_USER_EXISTS } from '../userpresent/action'

function* loginSaga(action) {
  const mesage = 'Request failed with status code 403'
  try {
    const data: any = yield Obsidian.obtain(DomainModule)
      .provideLoginUseCase()
      .execute(new LoginParams({ email: action?.params?.data?.email, password: action?.params?.data?.password }))
    if (data == mesage || data == false) {
      yield put({ type: LOGIN.failure, payload: data })
    } else {
      yield put({ type: LOGIN.success, payload: data })
      yield put({ type: LOGOUT.failure, payload: false })
      yield put({ type: FETCH_USER_EXISTS.success, payload: true })
    }
  } catch (e) {
    console.log(e)
  }
}
export default loginSaga
