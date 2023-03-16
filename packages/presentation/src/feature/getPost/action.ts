export enum REQUEST_POST {
    MAKE_REQUEST = 'MAKE_REQUEST',
    REQUEST_POST_SUCCESS = 'REQUEST_POST_SUCCESS',
    REQUEST_POST_FAILURE = 'REQUEST_POST_FAILURE'
  }
  
  export const PostRequest = params => ({
    type: REQUEST_POST.MAKE_REQUEST,
    params
  })
  