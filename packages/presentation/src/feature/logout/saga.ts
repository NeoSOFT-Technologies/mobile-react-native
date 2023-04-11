import { Obsidian } from 'di'
import { put } from 'redux-saga/effects'
import { LogoutParams, DomainModule } from 'domain-layer'
import { LOGOUT } from './action'
import { FETCH_USER_EXISTS } from '../userpresent/action'

function* logoutSaga(action) {
  try {
    const data: any = yield Obsidian.obtain(DomainModule)
      .provideLogoutUseCase()
      .execute(new LogoutParams({ email: action?.params?.email }))
    if (data == false) {
      yield put({ type: LOGOUT.failure, payload: data })
    } else {
      yield put({ type: LOGOUT.success, payload: data })
      yield put({ type: FETCH_USER_EXISTS.success, payload: false })
    }
  } catch (e) {
    console.log(e)
  }
}
export default logoutSaga
