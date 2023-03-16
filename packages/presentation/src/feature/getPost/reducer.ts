import { Resource } from '../../utils/resource'
import { REQUEST_POST } from './action'

const PostReducer = (initialState = Resource.none, action) => {
  switch (action.type) {
    case REQUEST_POST.MAKE_REQUEST:
      return Resource.loading()

    case REQUEST_POST.REQUEST_POST_SUCCESS:
      return Resource.success({
        data: action
      })

    case REQUEST_POST.REQUEST_POST_FAILURE:
      return Resource.error({
        error: 'POSTREQUEST_POST Not logged in'
      })
    default:
      return initialState
  }
}
export default PostReducer
