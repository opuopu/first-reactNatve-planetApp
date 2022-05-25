import {  Text as RNtext,StyleSheet } from 'react-native'
import React from 'react'
import { typography } from '../../theme/typography'
import { colors } from '../../theme/Colors'

export default function Text({children,preset="default",style}) {

const Customstyles = StyleSheet.compose(presets[preset],style)
  
  
  return (
  
      <RNtext style={Customstyles}>{children}</RNtext>
   
  )
}
const Base={
    fontFamily:typography.primary,
    fontSize:16,
    color:colors.white

}

const Base_BOLD={
    fontFamily:typography.bold,
    fontSize:16,
    color:colors.white

}
export const presets = {
    default:Base,
    bold:Base_BOLD,
    h1:{
        ...Base_BOLD,
        fontFamily:typography.bold,
        fontSize:32
    },
    
    h2:{
        ...Base_BOLD,
        fontFamily:typography.bold,
        fontSize:28
    },
    h3:{
        ...Base_BOLD,
        fontFamily:typography.bold,
        fontSize:24
    },
    h4:{
        ...Base,
        fontFamily:typography.bold,
        fontSize:20
    },
    p:{
        ...Base,
        fontFamily:typography.primary,
        fontSize:16
    }
    
}