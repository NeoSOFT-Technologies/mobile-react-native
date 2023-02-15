import React, { useState } from 'react'
import { TouchableOpacity, View, Text, TextInput, Image, ActivityIndicator, StatusBar } from 'react-native'
import Images from '../../assets/images'
import Colors from '../../utils/color'
import style from './login_style'
import i18n from 'localisation'
import { useDispatch, useSelector } from 'react-redux'
import { AppButton } from '../../widgets/app_button/app_button'
import { AppInput } from '../../widgets/app_input/app_input'
// import { userRequest } from 'presentation'

const LoginScreen = () => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [loadingState, setLodingState] = useState<boolean>(false)
  const [set, setset] = useState(false)
  const dispatch = useDispatch()
  const data = useSelector<any>(state => state.loginData)
  console.log(username)
  const saveData = () => {
    setLodingState(true)
    const data = {
      email: username,
      password: password
    }
    // redux dispatch will call  here
    // dispatch(userRequest(data))
  }

  return (
    <View style={style.mainView}>
      <View style={style.secView}>
        <Image source={Images.icon} style={style.imgIcon} resizeMode="contain" />
        <Text style={style.loginText}>{i18n.t('logIn')}</Text>
        <View style={style.inputView}>
          <AppInput placeholderText={'username'} value={username} setUsername={e => setUsername(e)} />
          <AppInput placeholderText={'password'} value={password} setUsername={e => setPassword(e)} secure={true} />
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
