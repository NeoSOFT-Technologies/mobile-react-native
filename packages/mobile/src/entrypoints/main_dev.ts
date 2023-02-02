import { Flavor, FlavorConfig, FlavorValues } from 'foundation'
import { startApp } from '../../myApp'

export function main() {
  FlavorConfig.initialize({
    flavor: Flavor.dev,
    values: new FlavorValues({
      apiBaseUrl: '',
      databaseName: '',
      //secrets: AppSecrets.appSecretsDev,
      showLogs: true,
      logSqlStatements: true
    })
  })
  startApp()
}
