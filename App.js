
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import HelloWorld from './hello'
import SecondPage from './second'
import MyListPage from './list'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='home'>
        <Stack.Screen name='home' component={HelloWorld} />
        <Stack.Screen name='second' component={SecondPage} />
        <Stack.Screen name='mylist' component={MyListPage} options={{ title: '列表页' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;
