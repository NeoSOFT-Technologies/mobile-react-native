import { View, Image, Text, TouchableOpacity } from 'react-native'
import Images from '../../assets/images'
import i18n from 'localisation'
import style from './dashboard_style'
import { AppButton } from '../../widgets/app_button/app_button'
import { useState } from 'react'
import { useTheme } from '../../theme/themeprovider'

const DashboardScreen = () => {
  const { colors, isDark } = useTheme()
  console.log(isDark)
  const [lodingState, setLodingState] = useState(false)
  const saveData = () => {
    setLodingState(true)
  }
  return (
    <View style={style.mainView}>
      <View style={[style.secView, { backgroundColor: colors.secondaryColor }]}>
        <Text style={[style.uberText, { color: colors.text }]}>{i18n.t('uber')}</Text>
        <Text style={[style.getText, { color: colors.text }]}>{i18n.t('getThere')}</Text>

        <Image source={isDark ? Images.carBlack : Images.car} style={style.carStyle} resizeMode="contain" />
      </View>
      <View style={style.thirdView}>
        <AppButton loadingState={lodingState} value={'getStarted'} saveData={() => saveData()} />
      </View>
    </View>
  )
}

export default DashboardScreen
