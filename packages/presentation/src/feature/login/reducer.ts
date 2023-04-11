import data from 'packages/data/lib/data'
import { Resource } from '../../utils/resource'
import { LOGIN } from './actions'

const loginReducer = (initialState = Resource.none, action) => {
  switch (action.type) {
    case LOGIN.request:
      return Resource.loading()

    case LOGIN.success:
      return Resource.success({
        data: action
      })

    case LOGIN.failure:
      return Resource.error({
        error: 'User Not logged in'
      })
    default:
      return initialState
  }
}
export default loginReducer
