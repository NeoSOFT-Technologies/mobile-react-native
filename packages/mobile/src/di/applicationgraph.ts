import { Graph, ObjectGraph, Singleton } from 'di'

@Singleton()
@Graph({ subgraphs: [] })
class ApplicationGraph extends ObjectGraph {}
export default ApplicationGraph
