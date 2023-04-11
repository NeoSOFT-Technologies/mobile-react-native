import { UserModel } from 'shared'

export interface NetworkPort {
  login(params?: { email: string; password: string }): Promise<UserModel>
}
