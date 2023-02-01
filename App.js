import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useFonts} from 'expo-font'
import {AppLoading} from 'expo-app-loading'
import ShopNavigator from './navigation/ShopNavigator'

export default function App() {
  const [loaded] = useFonts({
    pacifico: require('./assets/fonts/Pacifico-Regular.ttf')
  })

  if(!loaded) {
    return null
  } 
  
  return (
    <ShopNavigator />
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
