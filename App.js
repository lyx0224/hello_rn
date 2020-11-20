
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import HelloWorld from './pages/hello'
import SecondPage from './pages/second'
import MyListPage from './pages/list'
import LayoutDemo from './pages/layout';
import { Button } from 'react-native';

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
          //可以是string 或者 自定义布局
          headerTitle: '列表页',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: 'white'
          },
          //headerRight参数是一个方法：React.Node function(prop),prop可选
          //可以在页面中添加headerRight
          // headerRight: () => (
          //   <Button title='action' />
          // )
        }} />
        <Stack.Screen name='layout' component={LayoutDemo} options={{ title: '布局' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;
