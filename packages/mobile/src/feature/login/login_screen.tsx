/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react'
import { TouchableOpacity, View, Text, Image } from 'react-native'
import Images from '../../assets/images'
import style from './login_style'
import i18n from 'localisation'
import { useDispatch, useSelector } from 'react-redux'
import { AppButton } from '../../widgets/app_button/app_button'
import { AppInput } from '../../widgets/app_input/app_input'
import { userRequest } from 'presentation'
import { useNavigation } from '@react-navigation/native'
import RoutePaths from '../../navigation/router_path'
import { Status } from 'presentation'

const LoginScreen = () => {
  const [username, setUsername] = useState<string>('')
  const navigation = useNavigation<any>()
  const [password, setPassword] = useState<string>('')
  const [loadingState, setLodingState] = useState<boolean>(false)
  const dispatch = useDispatch()
  const loginData: any = useSelector<any>(state => state.loginData)
  const saveData = () => {
    const data = {
      email: username,
      password: password
    }
    dispatch(userRequest({ data: data }))
  }
  console.log(loginData)
  useEffect(() => {
    if (loginData?.status == Status.loading) setLodingState(true)
    else setLodingState(false)
  }, [loginData])

  useEffect(() => {
    if (loginData?.status == Status.success) navigation.navigate(RoutePaths.dashboard)
    else if (loginData?.status == Status.error) alert(i18n.t('noInput'))
  }, [loginData])

  return (
    <View style={style.mainView}>
      <View style={style.secView}>
        <Image source={Images.icon} style={style.imgIcon} resizeMode="contain" />
        <Text style={style.loginText}>{i18n.t('logIn')}</Text>
        <View style={style.inputView}>
          <AppInput placeholderText={'username'} value={username} setData={e => setUsername(e)} />
          <AppInput placeholderText={'password'} value={password} setData={e => setPassword(e)} secure={true} />
        </View>
      </View>
      <View style={style.buttonVIew}>
        <AppButton loadingState={loadingState} value={'login'} saveData={() => saveData()} />
      </View>
      <TouchableOpacity>
        <Text style={style.forgetpass}>{i18n.t('forgetPassword')}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default LoginScreen
