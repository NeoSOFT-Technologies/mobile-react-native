export enum LOGOUT_USER {
    MAKE_LOGOUT = 'MAKE_LOGOUT',
    LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS',
    LOGOUT_USER_FAILURE = 'LOGOUT_USER_FAILURE'
  }
  
  export const userLOGOUT = params => ({
    type: LOGOUT_USER.MAKE_LOGOUT,
    params
  })
  