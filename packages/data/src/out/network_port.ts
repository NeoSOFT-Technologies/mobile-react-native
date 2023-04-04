import {UserModel } from 'shared'

export interface NetworkPort {
  loginCall(params?: { email: string, password: string }): Promise<UserModel>
}
