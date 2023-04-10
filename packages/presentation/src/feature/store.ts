import createSagaMiddleware from '@redux-saga/core'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import rootSaga from '../utils/rootSaga'
import LOGIN_USER_REDUCER from './login/reducer'
import USER_DATA_REDUCER from './userDetail/reducer'
import USER_PRESENT_DATA_REDUCER from './userpresent/reducer'


const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
  reducer: combineReducers({
    loginUser: LOGIN_USER_REDUCER,
    userData: USER_DATA_REDUCER,
    userPresentData: USER_PRESENT_DATA_REDUCER
  }),
  middleware: [sagaMiddleware]
})
sagaMiddleware.run(rootSaga)

export default store
