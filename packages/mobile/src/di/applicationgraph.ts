import { Graph, ObjectGraph, Singleton } from 'react-obsidian'

@Singleton()
@Graph({ subgraphs: [] })
class ApplicationGraph extends ObjectGraph {}
export default ApplicationGraph
