/* eslint-disable @typescript-eslint/no-explicit-any */
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native'
import style from './app_button_style'
import i18n from 'localisation'
import LinearGradient from 'react-native-linear-gradient'
import Colors from '../../utils/color'

export type APP_BUTTON_TYPE = {
  loadingState: boolean
  value: string
  saveData?: any
}

export const AppButton = ({ loadingState, value, saveData }: APP_BUTTON_TYPE) => {
  return (
    <LinearGradient colors={[Colors.mainColor, Colors.secondaryColor]} style={style.buttonView}>
      <TouchableOpacity onPress={saveData}>
        {loadingState ? (
          <ActivityIndicator color={Colors.white} />
        ) : (
          <Text style={style.buttonText}>{i18n.t(value)}</Text>
        )}
      </TouchableOpacity>
    </LinearGradient>
  )
}
