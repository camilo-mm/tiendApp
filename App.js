import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useFonts} from 'expo-font'
import {AppLoading} from 'expo-app-loading'
import { NavigationContainer } from '@react-navigation/native';
import ShopNavigator from './navigation/ShopNavigator'
import TabNavigator from './navigation/TabNavigator'

export default function App() {
  const [loaded] = useFonts({
    pacifico: require('./assets/fonts/Pacifico-Regular.ttf')
  })

  if(!loaded) {
    return null
  } 
  
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
