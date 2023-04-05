import { NetworkModule } from './../../../network-retrofit/src/di/network_module'
import { DatabaseModule } from 'database-watermelon'
import { UserRepository } from 'domain-layer'
import { Singleton, Graph, ObjectGraph, Provides } from 'di'
import { NetworkPort } from '../out/network_port'
import { UserRepositoryImpl } from '../repositories/user_repository_impl'
import { DatabasePort } from '../data'

@Singleton()
@Graph({
  subgraphs: [DatabaseModule, NetworkModule]
})
export class DataModule extends ObjectGraph {
  constructor() {
    super()
  }
  @Provides()
  provideUserRepository(providesNetworkAdapter: NetworkPort, databaseAdapter: DatabasePort): UserRepository {
    return new UserRepositoryImpl({ networkPort: providesNetworkAdapter, databasePort: databaseAdapter })
  }
}
