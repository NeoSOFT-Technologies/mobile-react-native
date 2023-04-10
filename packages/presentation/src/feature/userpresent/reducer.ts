import { Resource } from '../../presentation'
import { USER_PRESENT_DATA } from './action'

const USER_PRESENT_DATA_REDUCER = (initialState = Resource.none, action) => {
  switch (action.type) {
    case USER_PRESENT_DATA.USER_PRESENT_DATA_SUCCESS:
      return Resource.success({
        data: action
      })

    case USER_PRESENT_DATA.USER_PRESENT_DATA_FAILURE:
      return Resource.error({
        error: 'User Not logged in'
      })
    default:
      return initialState
  }
}
export default USER_PRESENT_DATA_REDUCER
