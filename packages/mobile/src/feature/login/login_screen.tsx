import React, { useState } from 'react'
import { TouchableOpacity, View, Text, Image } from 'react-native'
import Images from '../../assets/images'
import style from './login_style'
import i18n from 'localisation'
import { useDispatch } from 'react-redux'
import { AppButton } from '../../widgets/app_button/app_button'
import { AppInput } from '../../widgets/app_input/app_input'
import { userRequest } from 'presentation'
import { useTheme } from '../../theme/themeprovider'

const LoginScreen = () => {
  const { colors, isDark } = useTheme()
  console.log(colors)
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [loadingState, setLodingState] = useState<boolean>(false)
  const dispatch = useDispatch()
  const saveData = () => {
    setLodingState(true)
    const data = {
      email: username,
      password: password
    }
    dispatch(userRequest(data))
  }
  return (
    <View style={[style.mainView, { backgroundColor: colors.background }]}>
      <View style={style.secView}>
        <Image source={isDark ? Images.iconBlack : Images.icon} style={style.imgIcon} resizeMode="contain" />
        <Text style={[style.loginText, { color: colors.text }]}>{i18n.t('logIn')}</Text>
        <View style={style.inputView}>
          <AppInput placeholderText={'username'} value={username} setData={e => setUsername(e)} />
          <AppInput placeholderText={'password'} value={password} setData={e => setPassword(e)} secure={true} />
        </View>
      </View>
      <View style={style.buttonVIew}>
        <AppButton loadingState={loadingState} value={'login'} saveData={() => saveData()} />
      </View>
      <TouchableOpacity>
        <Text style={[style.forgetpass, { color: colors.text }]}>{i18n.t('forgetPassword')}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default LoginScreen
