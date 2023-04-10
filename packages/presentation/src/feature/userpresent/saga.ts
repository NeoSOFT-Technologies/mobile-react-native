import { UserDetailsUseCaseParams } from './../../../../domain/src/usecases/user_details_usecase'
import { DomainModule } from 'domain-layer/src/di/domain_module'
import { Obsidian } from 'di'
import { call, put } from 'redux-saga/effects'
import React from 'react'
import { USER_PRESENT_DATA } from './action'
import { UserPresentDataUsecaseParams } from 'domain-layer'

function* USER_PRESENT_DATA_SAGA(action) {
  try {
    const data = yield Obsidian.obtain(DomainModule)
      .provideUserPresentDataUseCase()
      .execute(new UserPresentDataUsecaseParams({ email: '' }))
    yield put({ type: USER_PRESENT_DATA.USER_PRESENT_DATA_SUCCESS, payload: data })
  } catch (e) {
    console.log(e)
  }
}
export default USER_PRESENT_DATA_SAGA
