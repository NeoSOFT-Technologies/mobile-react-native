import { Singleton, Graph, ObjectGraph, Provides } from 'di'
import { FirstRepositoryImpl } from '../repositories/first_repository_impl'
import { DatabasePort } from '../out/database_port'
import { NetworkPort } from '../out/network_port'
import { FirstRepository } from 'domain-layer'

@Singleton()
@Graph()
export class DataModule extends ObjectGraph {
  @Provides()
  provideFirstRepository(databasePort: DatabasePort, networkPort: NetworkPort): FirstRepository {
    return new FirstRepositoryImpl(databasePort, networkPort)
  }
}