import { UserCheckModal, UserDetailsModel } from 'shared'
export interface UserRepository {
  loginCheck(params?: { username: string; password: string }): Promise<UserCheckModal>
  getuserdata(params?: { email: string }): Promise<UserDetailsModel>
}
