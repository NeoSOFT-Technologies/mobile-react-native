export enum FETCH_USER_DATA {
  request = 'FETCH_USER_DATA_REQUEST',
  success = 'FETCH_USER_DATA_SUCCESS',
  failure = 'FETCH_USER_DATA_FAILURE'
}

export const fetchUserAction = params => ({
  type: FETCH_USER_DATA.request,
  params
})
