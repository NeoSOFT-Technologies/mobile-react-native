import React, { memo } from 'react'
import style from './app_image_style'
import { Image } from 'react-native'

export type AppImageType ={
  path:any,
  style: object
}

const AppImage = ({path,style}:AppImageType) =>{
    return(
        <Image  
        resizeMode='contain'
        source={path}
        style={[style]}
        />
    )
}
export default memo(AppImage,(prev,next)=>prev.path == next.path)