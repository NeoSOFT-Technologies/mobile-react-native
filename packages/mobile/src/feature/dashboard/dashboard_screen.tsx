import { View, Image, Text, TouchableOpacity } from 'react-native'
import Images from '../../assets/images'
import i18n from 'localisation'
import style from './dashboard_style'
import { AppButton } from '../../widgets/app_button/app_button'
import { useTheme } from '../../theme/themeprovider'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserAction } from 'presentation'

const DashboardScreen = () => {
  const { theme, isDark } = useTheme()
  const [lodingState, setLodingState] = useState(false)
  const databaseEmail: any = useSelector((state: any) => state?.userData?.data?.payload)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchUserAction({}))
  }, [])
  return (
    <View style={style.mainView}>
      <View style={[style.secView, { backgroundColor: theme.secondaryColor }]}>
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
