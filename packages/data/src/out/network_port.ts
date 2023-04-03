import { MyFirstModel, UserCheckModel } from 'shared'

export interface NetworkPort {
  yourFirstNetworkCall(): Promise<MyFirstModel>
  loginCall(user: UserCheckModel): Promise<UserCheckModel>
}
