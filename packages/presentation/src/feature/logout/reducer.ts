import data from 'packages/data/lib/data'
import { Resource } from '../../utils/resource'
import { LOGOUT_USER } from './action'

const logoutReducer = (initialState = Resource.none, action) => {
  switch (action.type) {
    case LOGOUT_USER.MAKE_LOGOUT:
      return Resource.loading()

    case LOGOUT_USER.LOGOUT_USER_SUCCESS:
      return Resource.success({
        data: action
      })

    case LOGOUT_USER.LOGOUT_USER_FAILURE:
      return Resource.error({
        error: 'User Not logged in'
      })
    default:
      return initialState
  }
}
export default logoutReducer
