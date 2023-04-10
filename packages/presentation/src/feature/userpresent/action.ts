export enum FETCH_USER_EXISTS {
  request = 'FETCH_USER_EXISTS_REQUEST',
  success = 'FETCH_USER_EXISTS_SUCCESS',
  failure = 'FETCH_USER_EXISTS_FAILURE'
}

export const fetchUserExistsAction = params => ({
  type: FETCH_USER_EXISTS.request,
  params
})
