import React, { useState } from 'react'
import { TouchableOpacity, View, Text, TextInput, Image, ActivityIndicator } from 'react-native'
import Images from '../../assets/images'
import Colors from '../../utils/color'
import style from './loginstyle'
import i18n from 'localisation'

const LoginScreen = () => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [loadingState, setLodingState] = useState(false)

  const saveData = () => {
    setLodingState(true)
    // redux dispatch will call  here
  }

  return (
    <View style={style.mainView}>
      <View style={style.secView}>
        <Image source={Images.icon} style={style.imgIcon} />
        <Text style={style.loginText}>{i18n.t('Log_in')}</Text>
      </View>
      <View style={style.inputView}>
        <TextInput
          style={style.inputStyle}
          placeholder={i18n.t('username')}
          placeholderTextColor={Colors.white}
          value={username}
          onChangeText={(e: string) => setUsername(e)}
        />
        <TextInput
          style={style.inputStyle}
          placeholder={i18n.t('password')}
          placeholderTextColor={Colors.white}
          secureTextEntry={true}
          value={password}
          onChangeText={(e: string) => setPassword(e)}
        />
      </View>

      <TouchableOpacity style={style.buttonView} onPress={() => saveData()}>
        {loadingState ? (
          <ActivityIndicator color={Colors.white} />
        ) : (
          <Text style={style.buttonText}>{i18n.t('Login')}</Text>
        )}
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={style.forgetpass}>{i18n.t('Forget_pass')}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default LoginScreen
