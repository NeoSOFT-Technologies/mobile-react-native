import { UserCheckModal } from 'shared'
export interface UserRepository {
  loginCheck(params?: { username: string; password: string }): Promise<UserCheckModal>
}
