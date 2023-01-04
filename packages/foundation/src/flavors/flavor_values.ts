export interface IFlavorValues {
  apiBaseUrl: string
  showLogs: boolean
  logSqlStatements: boolean
}

export class FlavorValues {
  readonly apiBaseUrl: string
  readonly showLogs: boolean
  readonly logSqlStatements: boolean
  
  constructor(params: IFlavorValues) {
    this.apiBaseUrl = params.apiBaseUrl
    this.showLogs = params.showLogs
    this.logSqlStatements = params.logSqlStatements
  }

}
