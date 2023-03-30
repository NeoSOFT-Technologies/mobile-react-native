import * as React from 'react'
import { useColorScheme } from 'react-native'
import DarkTheme from './darktheme'
import LightTheme from './lighttheme'

export const ThemeContext = React.createContext({
  isDark: false,
  colors: LightTheme
})

export const ThemeProvider = props => {
  const colorScheme = useColorScheme()

  const [isDark, setIsDark] = React.useState(colorScheme === 'dark')

  React.useEffect(() => {
    setIsDark(colorScheme === 'dark')
  }, [colorScheme])

  const defaultTheme: any = {
    isDark,
    colors: isDark ? DarkTheme : LightTheme,
    setScheme: scheme => setIsDark(scheme === 'dark')
  }

  return <ThemeContext.Provider value={defaultTheme}>{props.children}</ThemeContext.Provider>
}

export const useTheme = () => React.useContext(ThemeContext)
