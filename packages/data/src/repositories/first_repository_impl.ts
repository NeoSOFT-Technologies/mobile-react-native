import { NetworkPort } from './../out/network_port'
import { DatabasePort } from './../out/database_port'
import { FirstRepository } from 'domain-layer'

export class FirstRepositoryImpl implements FirstRepository {
  readonly database: DatabasePort
  readonly network: NetworkPort

  constructor(databasePort: DatabasePort, networkPort: NetworkPort) {
    this.database = databasePort
    this.network = networkPort
  }

  async yourFirstFunction(params: { userName: string; password: string }): Promise<boolean> {
    console.log('Parameters ', params.userName, params.password)
    const myResponse = await this.network.yourFirstNetworkCall()
    const status = await this.database.yourFirstDatabaseCall(myResponse)
    return status
  }
}