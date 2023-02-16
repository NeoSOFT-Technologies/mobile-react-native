import { FlavorConfig } from './../flavors/flavor_config'
import { Singleton, Graph, ObjectGraph, Provides } from 'react-obsidian'

@Singleton()
@Graph()
export class FoundationModule extends ObjectGraph {
  @Provides()
  provideApiURL(): string {
    return FlavorConfig.instance.values.apiBaseUrl
  }
  @Provides()
  provideDatabaseName(): string {
    return FlavorConfig.instance.values.databaseName
  }
}
