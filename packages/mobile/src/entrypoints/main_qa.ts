import { Flavor, FlavorConfig, FlavorValues } from 'foundation'
import { startApp } from '../../myApp'

export function main() {
  console.log("main qa")
  FlavorConfig.initialize({
    flavor: Flavor.qa,
    values: new FlavorValues({
      apiBaseUrl: '',
      //secrets: AppSecrets.appSecretsDev,
      showLogs: true,
      logSqlStatements: true
    })
  })
  startApp()
}
main()