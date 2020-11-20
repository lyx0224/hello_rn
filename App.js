
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import HelloWorld from './pages/hello'
import SecondPage from './pages/second'
import MyListPage from './pages/list'
import LayoutDemo from './pages/layout';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='home'>
        <Stack.Screen name='home' component={HelloWorld} options={{
          title: '首页'
        }} />
        <Stack.Screen name='second' component={SecondPage} />
        <Stack.Screen name='mylist' component={MyListPage} options={{
          headerStyle: {
            backgroundColor: 'orange',
          },
          headerTitle: '列表页',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: 'white'
          }
        }} />
        <Stack.Screen name='layout' component={LayoutDemo} options={{ title: '布局' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;
