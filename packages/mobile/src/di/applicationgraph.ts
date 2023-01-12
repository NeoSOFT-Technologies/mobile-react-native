import { DomainModule } from './../../../domain/src/di/domain_module'
import { Graph, ObjectGraph, Singleton } from 'di'
@Singleton()
@Graph({ subgraphs: [DomainModule] })
class ApplicationGraph extends ObjectGraph {}
export default ApplicationGraph
