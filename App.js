
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import HelloWorld from './hello'
import SecondPage from './second'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='home'>
        <Stack.Screen name='home' component={HelloWorld} />
        <Stack.Screen name='second' component={SecondPage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;
