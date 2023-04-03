import * as React from 'react'
import { useColorScheme } from 'react-native'
import DarkTheme from './darktheme'
import LightTheme from './lighttheme'

const lightTheme = new LightTheme()
const darkTheme = new DarkTheme()
export const ThemeContext = React.createContext({
  isDark: false,
  colors: lightTheme
})

export const ThemeProvider = props => {
  const colorScheme = useColorScheme()
  const [isDark, setIsDark] = React.useState(colorScheme === 'dark')

  React.useEffect(() => {
    setIsDark(colorScheme === 'dark')
  }, [colorScheme])

  const defaultTheme: any = {
    isDark,
    colors: isDark ? darkTheme : lightTheme
  }
  console.log(defaultTheme)

  return <ThemeContext.Provider value={defaultTheme}>{props.children}</ThemeContext.Provider>
}

export const useTheme = () => React.useContext(ThemeContext)
