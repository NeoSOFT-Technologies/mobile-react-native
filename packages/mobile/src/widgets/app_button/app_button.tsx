/* eslint-disable @typescript-eslint/no-explicit-any */
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native'
import style from './app_button_style'
import i18n from 'localisation'
import LinearGradient from 'react-native-linear-gradient'
import Colors from '../../utils/color'

export type AppButtonProps = {
  loadingState: boolean
  value: string
  saveData?: () => void,
}

export const AppButton = ({ loadingState, value, saveData }: AppButtonProps) => {
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
