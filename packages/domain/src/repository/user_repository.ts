import { UserCheckModel, UserDetailsModel } from 'shared'
export interface UserRepository {
  loginCheck(params?: { username: string; password: string }): Promise<UserCheckModel>
  getuserdata(params?: { email: string }): Promise<UserDetailsModel>
}
