import { Resource } from '../../presentation'
import { FETCH_USER_DATA } from './action'

const fetchUserReducer = (initialState = Resource.none, action) => {
  switch (action.type) {
    case FETCH_USER_DATA.request:
      return Resource.loading()

    case FETCH_USER_DATA.success:
      return Resource.success({
        data: action
      })

    case FETCH_USER_DATA.failure:
      return Resource.error({
        error: 'User Not logged in'
      })
    default:
      return initialState
  }
}
export default fetchUserReducer
