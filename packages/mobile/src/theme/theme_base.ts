import LightTheme from "./lighttheme"

class ThemeBase  {
    readonly isDark : boolean 
    readonly colors: LightTheme
    constructor(params:{isdark:boolean,colors:LightTheme}){
         this.isDark = params.isdark
         this.colors = params.colors
    }
}

export default ThemeBase