import { View, Image, Text, TouchableOpacity } from 'react-native'
import Images from '../../assets/images'
import i18n from 'localisation'
import style from './dashboard_style'
import { AppButton } from '../../widgets/app_button/app_button'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { userDataRequest } from 'presentation'

const DashboardScreen = () => {
  const [lodingState, setLodingState] = useState(false)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(userDataRequest({}))
  }, [])
  const saveData = () => {
    setLodingState(true)
    dispatch(userDataRequest({}))
  }
  return (
    <View style={style.mainView}>
      <View style={style.secView}>
        <Text style={style.uberText}>{i18n.t('uber')}</Text>
        <Text style={style.getText}>{i18n.t('getThere')}</Text>

        <Image source={Images.car} style={style.carStyle} resizeMode="contain" />
      </View>
      <View style={style.thirdView}>
        <AppButton value={'getStarted'} saveData={() => saveData()} />
      </View>
    </View>
  )
}

export default DashboardScreen
