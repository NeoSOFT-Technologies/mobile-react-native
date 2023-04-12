import { NetworkPort } from '../out/network_port'
import { DatabasePort } from '../out/database_port'
import { FirstRepository } from 'domain-layer'
import { FirstModel } from 'shared'

export class FirstRepositoryImpl implements FirstRepository {
  readonly database: DatabasePort
  readonly network: NetworkPort

  constructor(params: { databasePort?: DatabasePort; networkPort: NetworkPort }) {
    this.database = params.databasePort
    this.network = params.networkPort
  }
  async yourFirstFunction(params: { userName: string; password: string }): Promise<FirstModel> {
    const data = await this.network.login({ email: params.userName, password: params.password })
    return await this.database.yourFirstDatabaseCall(data)
  }
}
