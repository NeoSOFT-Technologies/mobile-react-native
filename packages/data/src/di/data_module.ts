import { NetworkModule } from './../../../network-retrofit/src/di/network_module'
import { DatabaseModule } from 'database-watermelon'
import { FirstRepository } from 'domain-layer'
import { Singleton, Graph, ObjectGraph, Provides } from 'di'
import { NetworkPort } from '../out/network_port'
import { DatabasePort } from '../data'
import { FirstRepositoryImpl } from '../repositories/first_repository_impl'

@Singleton()
@Graph({
  subgraphs: [DatabaseModule, NetworkModule]
})
export class DataModule extends ObjectGraph {
  constructor() {
    super()
  }
  @Provides()
  provideFirstRepository(providesNetworkAdapter: NetworkPort, databaseAdapter: DatabasePort): FirstRepository {
    return new FirstRepositoryImpl({ networkPort: providesNetworkAdapter, databasePort: databaseAdapter })
  }
}
