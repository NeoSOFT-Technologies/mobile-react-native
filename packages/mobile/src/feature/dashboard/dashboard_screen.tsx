import { View, Image, Text, TouchableOpacity } from 'react-native'
import Images from '../../assets/images'
import i18n from 'localisation'
import style from './dashboard_style'
import AppButton from '../../widgets/app_button/app_button'
import { useTheme } from '../../theme/themeprovider'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logoutAction } from 'presentation'
import { fetchUserAction } from 'presentation'
import App_image from '../../widgets/app_image/app_image'

const DashboardScreen = () => {
  const { theme, isDark } = useTheme()
  const databaseEmail: any = useSelector((state: any) => state?.userData?.data?.payload)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchUserAction({}))
  }, [])
  const onLogoutClick = () => {
    dispatch(logoutAction({ databaseEmail }))
  }
  return (
    <View style={style.mainView}>
      <View style={[style.secView, { backgroundColor: theme.secondaryColor }]}>
        <TouchableOpacity style={style.logoutButton} onPress={() => onLogoutClick()}>
          <App_image path={isDark ? Images.blackLogout : Images.whiteLogout} style={style.logoutStyle} />
        </TouchableOpacity>
        <Text style={[style.uberText, { color: theme.textColor }]}>{`${i18n.t('uber')} -  ${databaseEmail}`}</Text>
        <Text style={[style.getText, { color: theme.textColor }]}>{i18n.t('getThere')}</Text>
        <App_image path={isDark ? Images.carBlack : Images.car} style={style.carStyle} />
      </View>
      <View style={style.thirdView}>
        <AppButton value={'getStarted'} />
      </View>
    </View>
  )
}

export default DashboardScreen
