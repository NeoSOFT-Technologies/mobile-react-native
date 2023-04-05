import { UserDetailsUseCaseParams } from './../../../../domain/src/usecases/user_details_usecase'
import { DomainModule } from 'domain-layer/src/di/domain_module'
import { Obsidian } from 'di'
import { call, put } from 'redux-saga/effects'
import React from 'react'
import { REQUEST_USER_PRESENT_DATA } from './action'

function* UserDataPresentSaga(action) {
  try {
    const data = yield Obsidian.obtain(DomainModule)
      .provideUserDetailsUseCase()
      .execute(new UserDetailsUseCaseParams({email:''}))
    yield put({ type: REQUEST_USER_PRESENT_DATA.REQUEST_USER_DATA_PRESENT_SUCCESS, payload: data })
  } catch (e) {
    console.log(e)
  }
}
export default UserDataPresentSaga
