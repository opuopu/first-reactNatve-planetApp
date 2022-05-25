import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { colors } from './src/theme/Colors';
import { spacing } from './src/theme/Spacing';
import { useFonts } from 'expo-font';
import { typography } from './src/theme/typography';
import Text from './src/component/Text/Text';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer,DarkTheme } from '@react-navigation/native';
import Home from './src/component/Home/Home';
import { SafeAreaView } from 'react-native-safe-area-context';
import Details from './src/component/details/Details';


export default function App() {
  const Stack = createNativeStackNavigator();

  let [fontsloaded] = useFonts({
    "Antonio-Medium":require('./assets/Antonio-Medium.ttf'),
    "LeagueSpartan-Bold":require('./assets/LeagueSpartan-Bold.ttf'),
    "LeagueSpartan-Regular":require('./assets/LeagueSpartan-Regular.ttf')
  });
  if(!fontsloaded){
    return <Text>loading</Text>
  }
  return (
    <View style={styles.AndroidSafeArea}>
     
      <StatusBar style="light" />
    
      <NavigationContainer  >
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    
    </NavigationContainer>
  
    </View>
  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,

    // alignItems: 'center',
    // justifyContent: 'center',
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0

  },
  
  

});
