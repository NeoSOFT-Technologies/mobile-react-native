import { View, Image, Text, TouchableOpacity } from 'react-native'
import Images from '../../assets/images'
import i18n from 'localisation'
import style from './dashboard_style'
import { AppButton } from '../../widgets/app_button/app_button'
import { useTheme } from '../../theme/themeprovider'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logoutAction } from 'presentation'
import { useNavigation } from '@react-navigation/native'
import RoutePaths from '../../navigation/router_path'
import { fetchUserAction } from 'presentation'

const DashboardScreen = () => {
  const { theme, isDark } = useTheme()
  const navigation: any = useNavigation()
  const databaseEmail: any = useSelector((state: any) => state?.userData?.data?.payload)
  const logoutData: any = useSelector((state: any) => state?.logout?.data?.payload)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchUserAction({}))
  }, [])
  const onLogoutClick = () => {
    dispatch(logoutAction({databaseEmail}))
  }
  return (
    <View style={style.mainView}>
      <View style={[style.secView, { backgroundColor: theme.secondaryColor }]}>
        <TouchableOpacity style={style.logoutButton} onPress={() => onLogoutClick()}>
          <Image
            source={isDark ? Images.blackLogout : Images.whiteLogout}
            style={style.logoutStyle}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text style={[style.uberText, { color: theme.textColor }]}>{`${i18n.t('uber')} -  ${databaseEmail}`}</Text>
        <Text style={[style.getText, { color: theme.textColor }]}>{i18n.t('getThere')}</Text>
        <Image source={isDark ? Images.carBlack : Images.car} style={style.carStyle} resizeMode="contain" />
      </View>
      <View style={style.thirdView}>
        <AppButton value={'getStarted'} />
      </View>
    </View>
  )
}

export default DashboardScreen
