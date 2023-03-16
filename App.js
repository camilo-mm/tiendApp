import { StyleSheet, Text, View } from 'react-native';
import {useFonts} from 'expo-font'
import { NavigationContainer } from '@react-navigation/native';

import TabNavigator from './navigation/TabNavigator'
import { Provider } from 'react-redux';
import store from './store';
import { init } from './db';


init()
  .then(()=> console.log('database initialized'))
  .catch((err) => {
    console.log('database fail connect')
    console.log(err.message)
  })

export default function App() {
  const [loaded] = useFonts({
    pacifico: require('./assets/fonts/Pacifico-Regular.ttf')
  })

  if(!loaded) {
    return null
  } 
  
  return (
    <Provider store={store}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </Provider>
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
