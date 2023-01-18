import { MyFirstModel } from 'packages/shared/src/shared'

export interface NetworkPort {
  yourFirstNetworkCall(): Promise<MyFirstModel>
}
