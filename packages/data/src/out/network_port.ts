import { MyFirstModel, UserCheckModal } from 'shared'

export interface NetworkPort {
  yourFirstNetworkCall(): Promise<MyFirstModel>
  loginCall(user: UserCheckModal): Promise<UserCheckModal>
}
