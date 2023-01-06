import { DomainModule } from './../../../domain/src/di/domain_module'
import { Graph, ObjectGraph, Provides, Singleton } from 'di'
import BarManager from './barmanager'
import FooService from './fooservices'
@Singleton()
@Graph({ subgraphs: [DomainModule] })
class ApplicationGraph extends ObjectGraph {
  fooService(barManager: BarManager): FooService {
    return new FooService()
  }
  @Provides()
  barManager(): BarManager {
    return new BarManager()
  }
}
export default ApplicationGraph
