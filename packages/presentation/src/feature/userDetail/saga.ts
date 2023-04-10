import { UserDetailsUseCaseParams } from './../../../../domain/src/usecases/user_details_usecase'
import { DomainModule } from 'domain-layer/src/di/domain_module'
import { Obsidian } from 'di'
import { call, put } from 'redux-saga/effects'
import React from 'react'
import { USER_DATA } from './action'

function* USER_DATA_SAGA(action) {
  try {
    const data = yield Obsidian.obtain(DomainModule)
      .provideUserDetailsUseCase()
      .execute(new UserDetailsUseCaseParams({ email: action.params.email }))
    yield put({ type: USER_DATA.USER_DATA_SUCCESS, payload: data })
  } catch (e) {
    console.log(e)
  }
}
export default USER_DATA_SAGA
