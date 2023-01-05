import i18n from 'localisation'
import { FlavorConfig } from 'foundation'
import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import ApplicationGraph from '../di/applicationgraph'

const Screen = () => {
  ApplicationGraph
  return (
    <SafeAreaView>
      <Text>{`Hello ${''}`}</Text>
      <Text>Hello {i18n.t('appName')}</Text>
    </SafeAreaView>
  )
}
export default Screen
