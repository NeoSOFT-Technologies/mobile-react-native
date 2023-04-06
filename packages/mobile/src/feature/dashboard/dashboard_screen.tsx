import { View, Image, Text, TouchableOpacity } from 'react-native'
import Images from '../../assets/images'
import i18n from 'localisation'
import style from './dashboard_style'
import { AppButton } from '../../widgets/app_button/app_button'
import { useTheme } from '../../theme/themeprovider'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userDataRequest, userLOGOUT } from 'presentation'
import { useNavigation } from '@react-navigation/native'
import RoutePaths from '../../navigation/router_path'

const DashboardScreen = () => {
  const { theme, isDark } = useTheme()
  const navigation: any = useNavigation()
  const [lodingState, setLodingState] = useState(false)
  const databaseemail: any = useSelector((state: any) => state?.userData?.data?.payload)
  const logoutData: any = useSelector((state: any) => state?.logoutData?.data?.payload)
  useEffect(() => {
    if (logoutData == true) navigation.navigate(RoutePaths.login)
  }, [logoutData])
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(userDataRequest({}))
  }, [])
  const saveData = () => {
    setLodingState(true)
    dispatch(userLOGOUT({ databaseemail }))
  }
  return (
    <View style={style.mainView}>
      <View style={[style.secView, { backgroundColor: theme.secondaryColor }]}>
        <Text style={[style.uberText, { color: theme.textColor }]}>{`${i18n.t('uber')} -  ${databaseemail}`}</Text>
        <Text style={[style.getText, { color: theme.textColor }]}>{i18n.t('getThere')}</Text>

        <Image source={isDark ? Images.carBlack : Images.car} style={style.carStyle} resizeMode="contain" />
      </View>
      <View style={style.thirdView}>
        <AppButton value={'logout'} saveData={() => saveData()} />
      </View>
    </View>
  )
}

export default DashboardScreen
