import { View,StyleSheet } from 'react-native'
import React from 'react'
import Text from '../Text/Text'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../Header'
import { colors } from '../../theme/Colors'
import { FlatList } from 'react-native'
import { PLANET_LIST } from '../../../files'
import { spacing } from '../../theme/Spacing'
import { AntDesign } from '@expo/vector-icons';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'


export default function Home({navigation}) {

  return (
<SafeAreaView style={{flex:1,backgroundColor:colors.black}}>
<Header ></Header>
<FlatList
contentContainerStyle={style.list}
data={PLANET_LIST}
keyExtractor={item => item.name}

renderItem={({item,index})=>{
return <Pressable style={style.mainPart}  onPress={() => navigation.navigate('Details',{planet:item})}>

<View style={style.main}>
<View style={[style.circle,{backgroundColor:item.color}]}></View>
    <Text preset='h3' style={style.texts}>
    {item?.name}</Text>
</View>
   
    <AntDesign name="right" size={18} color="white"   />
</Pressable>

}}

ItemSeparatorComponent={( ()=> <View style={style.separator}></View>)}

>

</FlatList>

</SafeAreaView>
  )
}
const style = StyleSheet.create({
  list:{
    padding:spacing[5]
  },
  circle:{
    width:24,
    height:24,
    borderRadius:10

  },
texts:{
 marginLeft:spacing[5],
 textTransform:"uppercase",
 
 
  },
  main:{
    flexDirection:"row",
    padding:spacing[4],
    alignItems:"center",
    

  },
  separator:{
    borderBottomColor:colors.white,
    borderBottomWidth:0.5
  },
  mainPart:{
         flexDirection:'row',
         alignItems:'center',
         justifyContent:'space-between'
  }
})