import { UserModel } from 'shared'

export interface UserRepository {
  login(params?: { email: string; password: string }): Promise<boolean>
  fetchUserData(params?: { email: string }): Promise<UserModel>
  fetchUserExists(params?: { email: string }): Promise<boolean>
  logout(params?: { email: string }): Promise<boolean>
}
