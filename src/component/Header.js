import { View ,StyleSheet} from 'react-native'
import React from 'react'
import  Text from './Text/Text'
import { spacing } from '../theme/Spacing'
import { colors } from '../theme/Colors'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

export default function Header({backbtn}) {
  const navigation = useNavigation();
  return (
    
    <View  style={style.container}>
      {backbtn && (
        <Pressable  style={{marginRight:spacing[4]}} onPress={() => navigation.goBack()} >
          <AntDesign  name="left" size={25} color="white" />
        </Pressable>
      )}
<Text preset='h2' >The Planet</Text>
    </View>
  )
}
const style = StyleSheet.create({
  container:{
    padding:spacing[5],
    paddingBottom:spacing[3],
    borderBottomWidth:0.5,
    borderBottomColor:colors.white,
    flexDirection:'row',
    alignItems:'center'

    
  
  
  },

})