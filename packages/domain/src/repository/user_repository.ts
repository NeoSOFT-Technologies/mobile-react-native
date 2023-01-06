export interface UserRepository {
  loginWithEmail(params: { userName: string; password: string }): Promise<boolean>
}
