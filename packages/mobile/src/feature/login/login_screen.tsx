/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react'
import { TouchableOpacity, View, Text, Image } from 'react-native'
import Images from '../../assets/images'
import style from './login_style'
import i18n from 'localisation'
import { useDispatch, useSelector } from 'react-redux'
import AppButton from '../../widgets/app_button/app_button'
import AppInput from '../../widgets/app_input/app_input'
import { loginAction } from 'presentation'
import { useTheme } from '../../theme/themeprovider'
import { useNavigation } from '@react-navigation/native'
import RoutePaths from '../../navigation/router_path'
import { Status } from 'presentation'
import App_image from '../../widgets/app_image/app_image'

const LoginScreen = () => {
  const { theme, isDark } = useTheme()
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [loadingState, setLodingState] = useState<boolean>(false)
  const dispatch = useDispatch()
  const loginData: any = useSelector<any>(state => state?.login)
  const saveData = () => {
    const data = {
      email: username,
      password: password
    }
    dispatch(loginAction({ data: data }))
  }
  useEffect(() => {
    if (loginData?.status == Status?.loading) setLodingState(true)
    else if (loginData?.status == Status.error) {
      setLodingState(false)
      alert(i18n.t('noInput'))
    } else setLodingState(false)
  }, [loginData])

  return (
    <View style={[style.mainView, { backgroundColor: theme.backgroundCOlor }]}>
      <View style={style.secView}>
        <App_image path={isDark ? Images.iconBlack : Images.icon} style={style.imgIcon} />
        <Text style={[style.loginText, { color: theme.textColor }]}>{i18n.t('logIn')}</Text>
        <View style={style.inputView}>
          <AppInput placeholderText={'username'} value={username} setData={e => setUsername(e)} />
          <AppInput placeholderText={'password'} value={password} setData={e => setPassword(e)} secure={true} />
        </View>
      </View>
      <View style={style.buttonVIew}>
        <AppButton loadingState={loadingState} value={'login'} saveData={() => saveData()} />
      </View>
    </View>
  )
}

export default LoginScreen
