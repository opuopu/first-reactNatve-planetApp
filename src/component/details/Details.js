import { View ,StyleSheet} from 'react-native'
import React from 'react'
import Text from '.././Text/Text'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../Header'
import { colors } from '../../theme/Colors'

import { ScrollView } from 'react-native'
import { spacing } from '../../theme/Spacing'

export default function Details({navigation,route}) {

  const {color,name,description,rotationTime,revolutionTime,radius,avgTemp} = route?.params?.planet
  const PlanetItem = ({title,name}) =>{
 return(
   <View style={styles.details}>
     <Text style={{opacity:0.7}}>{title}</Text>
     <Text>{name}</Text>
   </View>
 )
  }

  return (
 <SafeAreaView style={styles.container}>
 <Header backbtn={true}navigation={navigation}></Header>
<ScrollView>

<View style={styles.divs}>
<Text preset='h1' style={styles.name}>{name}</Text>
<Text style={styles.des} >{description}</Text>
</View>
<PlanetItem title='Rotation Time' name={rotationTime}/>
<PlanetItem title='Revolution Time'name={revolutionTime}/>
<PlanetItem title='Radius' name={radius}/>
<PlanetItem title='Avarege Temp'name={avgTemp}/>
</ScrollView>

 </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.black
    },
    divs:{
      alignItems:'center',
      justifyContent:'center',
      marginTop:150,
      marginHorizontal:spacing[8]
      
    },
    des:{
      textAlign:'center',
      lineHeight:spacing[8]
    },
    name:{
      textTransform:'uppercase',
      marginBottom:spacing[4],
    }
    ,
    details:{
      marginHorizontal:spacing[8],
       marginVertical:spacing[4],
      flexDirection:'row',
      justifyContent:'space-between',
      borderWidth:1,
      borderColor:colors.white,
      padding:spacing[4]
    },

 
})