export enum LOGOUT {
  request = 'LOGOUT_REQUEST',
  success = 'LOGOUT_SUCCESS',
  failure = 'LOGOUT_FAILURE'
}

export const logoutAction = params => ({
  type: LOGOUT.request,
  params
})
