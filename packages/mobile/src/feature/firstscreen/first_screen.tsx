import { View, Image, Text, TouchableOpacity } from 'react-native'
import Images from '../../assets/images'
import i18n from 'localisation'
import style from './first_screen_style'
import AppButton from '../../widgets/app_button/app_button'
import { useTheme } from '../../theme/themeprovider'

const FirstScreen = () => {
  const { theme, isDark } = useTheme()
  return (
    <View style={style.mainView}>
      <View style={[style.secView, { backgroundColor: theme?.secondaryColor }]}>
        <Text style={[style.uberText, { color: theme?.textColor }]} testID='Login_Hello_String'>{`${i18n.t('anotherString')}`}</Text>
        <Text style={[style.getText, { color: theme?.textColor }]}>{i18n.t('appName')}</Text>
        <Image source={isDark ? Images.carBlack : Images.car} style={style.carStyle} resizeMode="contain" />
      </View>
      <View style={style.thirdView}>
        <AppButton value={'getStarted'}  />
      </View>
    </View>
  )
}

export default FirstScreen
