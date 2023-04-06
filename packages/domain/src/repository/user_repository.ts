import { UserModel } from 'shared'

export interface UserRepository {
  loginCheck(params?: { email: string; password: string }): Promise<boolean>
  getuserdata(params?: { email: string }): Promise<UserModel>
  logoutUser(params?: { email: string }): Promise<boolean>
}
