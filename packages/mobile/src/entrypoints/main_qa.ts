import { Flavor, FlavorConfig, FlavorValues } from 'foundation'
import { startApp } from '../../myApp'

export function main() {
  FlavorConfig.initialize({
    flavor: Flavor.qa,
    values: new FlavorValues({
      apiBaseUrl: 'https://jsonplaceholder.typicode.com',
      databaseName: '',
      //secrets: AppSecrets.appSecretsDev,
      showLogs: true,
      logSqlStatements: true
    })
  })
  startApp()
}
main()
