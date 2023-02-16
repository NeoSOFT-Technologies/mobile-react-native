import { DomainModule } from './../../../../domain/src/di/domain_module';
import { Inject, Injectable, injectComponent, Obsidian } from 'react-obsidian';
import { YourFirstUseCase } from './../../../../domain/src/usecases/first/your_first_usecase'
import { call, put } from 'redux-saga/effects'
import { REQUEST_USER } from './actions'
import React from 'react'


function*  getUserSaga() {
    const data =  yield Obsidian.obtain(DomainModule).providesLoginCheckUseCase()
    alert(JSON.stringify(data))
     put({ type: REQUEST_USER.REQUEST_USER_SUCCESS, payload: data })
}
export default getUserSaga
