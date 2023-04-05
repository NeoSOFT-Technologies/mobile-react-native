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
  const { theme } = useTheme()
  return (
    <LinearGradient colors={[theme.primaryColor, theme.primaryColor]} style={style.buttonView}>
      <TouchableOpacity onPress={saveData}>
        {loadingState ? (
          <ActivityIndicator color={theme.activityColor} />
        ) : (
          <Text style={[style.buttonText, { color: theme.textColor }]}>{i18n.t(value)}</Text>
        )}
      </TouchableOpacity>
    </LinearGradient>
  )
}
