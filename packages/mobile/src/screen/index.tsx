import i18n from 'localisation'
import { FlavorConfig } from 'foundation'
import React from 'react'
import { SafeAreaView, Text } from 'react-native'

const Screen = () => {
  return (
    <SafeAreaView>
      <Text>{`Hello ${''}`}</Text>
      <Text>Hello {i18n.t('appName')}</Text>
    </SafeAreaView>
  )
}
export default Screen
