export interface IFlavorValues {
  apiBaseUrl: string
  databaseName: string
  showLogs: boolean
  logSqlStatements: boolean
}

export class FlavorValues {
  readonly apiBaseUrl: string
  readonly databaseName: string
  readonly showLogs: boolean
  readonly logSqlStatements: boolean

  constructor(params: IFlavorValues) {
    this.apiBaseUrl = params.apiBaseUrl
    this.databaseName = params.databaseName
    this.showLogs = params.showLogs
    this.logSqlStatements = params.logSqlStatements
  }
}
