import { Resource } from '../../presentation'
import { REQUEST_USER_DATA } from './action'

const UserDataRequestReduceer = (initialState = Resource.none, action) => {
  switch (action.type) {
    case REQUEST_USER_DATA.MAKE_REQUEST:
      return Resource.loading()

    case REQUEST_USER_DATA.REQUEST_USER_DATA_SUCCESS:
      return Resource.success({
        data: action
      })

    case REQUEST_USER_DATA.REQUEST_USER_DATA_FAILURE:
      return Resource.error({
        error: 'User Not logged in'
      })
    default:
      return initialState
  }
}
export default UserDataRequestReduceer
