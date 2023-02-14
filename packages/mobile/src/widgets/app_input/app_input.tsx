import { TextInput } from "react-native"
import Colors from "../../utils/color"
import style from "./app_input_style"
import i18n from 'localisation'
export type AppInputType = {
    placeholderText:string,
    value:string,
    setUsername:any,
    secure?:boolean
}

export const AppInput = ({placeholderText,value,setUsername,secure}:AppInputType) =>{
    return(
        <TextInput
        style={style.inputStyle}
        placeholder={i18n.t(placeholderText)}
        placeholderTextColor={Colors.white}
        value={value}
        onChangeText={(e: string) => setUsername(e)}
        secureTextEntry={secure}
      />
    )
}
