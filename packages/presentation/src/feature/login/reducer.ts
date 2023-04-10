import data from 'packages/data/lib/data'
import { Resource } from '../../utils/resource'
import { LOGIN_USER } from './actions'

const LOGIN_USER_REDUCER = (initialState = Resource.none, action) => {
  switch (action.type) {
    case LOGIN_USER.LOGIN_USER_REQUEST:
      return Resource.loading()

    case LOGIN_USER.LOGIN_USER_SUCCESS:
      return Resource.success({
        data: action
      })

    case LOGIN_USER.LOGIN_USER_FAILURE:
      return Resource.error({
        error: 'User Not logged in'
      })
    default:
      return initialState
  }
}
export default LOGIN_USER_REDUCER
