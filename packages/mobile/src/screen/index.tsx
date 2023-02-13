import i18n from 'localisation'
import { FlavorConfig } from 'foundation'
import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import ApplicationGraph from '../di/applicationgraph'
import { SplashPage } from '../feature/splash/splash_page'

const Screen = () => {
  const a = new ApplicationGraph()
  return (
    <SafeAreaView>
      <Text>{`Hello ${FlavorConfig.instance.flavorType}`}</Text>
      <Text>Hello {i18n.t('appName')}</Text>
      <SplashPage></SplashPage>
    </SafeAreaView>
  )
}
export default Screen
