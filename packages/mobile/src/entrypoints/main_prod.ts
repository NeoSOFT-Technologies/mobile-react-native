import { Flavor, FlavorConfig, FlavorValues } from 'foundation'
import { startApp } from '../../myApp'

export function main() {
  FlavorConfig.initialize({
    flavor: Flavor.prod,
    values: new FlavorValues({
      apiBaseUrl: 'https://aparajitha.php-dev.in/api',
      databaseName: 'boilerplate',
      //secrets: AppSecrets.appSecretsDev,
      showLogs: true,
      logSqlStatements: true
    })
  })
  startApp()
}
main()
