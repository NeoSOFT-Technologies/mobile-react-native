import { MyDatabaseModel } from 'shared'
import { NetworkPort } from './../out/network_port'
import { DatabasePort } from './../out/database_port'
import { FirstRepository } from 'domain-layer'

export class FirstRepositoryImpl implements FirstRepository {
  // readonly database: DatabasePort
  readonly network: NetworkPort

  constructor(params: { databasePort?: DatabasePort; networkPort: NetworkPort }) {
    // this.database = databasePort
    this.network = params.networkPort
  }

  async yourFirstFunction(params: { userName: string; password: string }): Promise<boolean> {
    console.log('Parameters ', params.userName, params.password)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const myResponse = await this.network.yourFirstNetworkCall()
    // const status = await this.database.yourFirstDatabaseCall(
    //   new MyDatabaseModel({
    //     title: 'Mylogin response',
    //     body: 'extra data'
    //   })
    // )
    return true //status != null
  }
}
