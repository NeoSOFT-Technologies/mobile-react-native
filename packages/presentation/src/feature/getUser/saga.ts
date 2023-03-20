import { LoginCheckParams } from './../../../../domain/src/usecases/first/login_check_usecase'
import { DomainModule } from './../../../../domain/src/di/domain_module'
import { Inject, Injectable, injectComponent, Obsidian } from 'di'
import { YourFirstUseCase } from './../../../../domain/src/usecases/first/your_first_usecase'
import { call, put } from 'redux-saga/effects'
import { REQUEST_USER } from './actions'
import React from 'react'

function* getUserSaga(action) {
  const data = yield Obsidian.obtain(DomainModule)
    .providesLoginCheckUseCase()
    .execute(new LoginCheckParams({ username: action?.params?.data?.email, password: action?.params?.data?.password }))
  console.log(data)
  yield put({ type: REQUEST_USER.REQUEST_USER_SUCCESS, payload: data })
}
export default getUserSaga
