/* eslint-disable @typescript-eslint/no-explicit-any */
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native'
import style from './app_button_style'
import i18n from 'localisation'
import LinearGradient from 'react-native-linear-gradient'
import Colors from '../../utils/color'
import { useTheme } from '../../theme/themeprovider'

export type AppButtonProps = {
  loadingState?: boolean
  value: string
  saveData?: () => void
}

export const AppButton = ({ loadingState, value, saveData }: AppButtonProps) => {
  const { colors } = useTheme()
  return (
    <LinearGradient colors={[colors.mainColor, colors.mainColor]} style={style.buttonView}>
      <TouchableOpacity onPress={saveData}>
        {loadingState ? (
          <ActivityIndicator color={colors.text} />
        ) : (
          <Text style={[style.buttonText, { color: colors.text }]}>{i18n.t(value)}</Text>
        )}
      </TouchableOpacity>
    </LinearGradient>
  )
}
