import { Flavor, FlavorConfig, FlavorValues } from 'foundation'
import { startApp } from '../../myApp'

export function main() {
  console.log("main prod")
  FlavorConfig.initialize({
    flavor: Flavor.prod,
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
