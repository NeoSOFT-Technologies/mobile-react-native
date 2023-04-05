import createSagaMiddleware from '@redux-saga/core'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import rootSaga from '../utils/rootSaga'
import userRequestReducer from './login/reducer'
import UserDataRequestReduceer from './userDetail/reducer'
import UserPresentReducer from './userpresent/reducer'

const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
  reducer: combineReducers({
    loginData: userRequestReducer,
    userData: UserDataRequestReduceer,
    userPresent: UserPresentReducer
  }),
  middleware: [sagaMiddleware]
})
sagaMiddleware.run(rootSaga)

export default store
