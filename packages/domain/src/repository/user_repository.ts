export interface UserRepository {

  loginCheck(params?: { userName: string }): Promise<boolean>
}
