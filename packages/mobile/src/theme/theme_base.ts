import ThemeData from './theme_constant'

class ThemeBase {
  readonly isDark: boolean
  readonly theme: ThemeData
  constructor(params: { isdark: boolean; theme: ThemeData }) {
    this.isDark = params.isdark
    this.theme = params.theme
  }
}

export default ThemeBase
