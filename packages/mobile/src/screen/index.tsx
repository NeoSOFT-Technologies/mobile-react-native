import i18n from 'localisation'
import React from 'react'
import { SafeAreaView, Text } from 'react-native'

const Screen = () => {
  return (
    <SafeAreaView>
      <Text>HEllo World</Text>
      <Text>Hello {i18n.t('appName')}</Text>
    </SafeAreaView>
  )
}
export default Screen
