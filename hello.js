import React from 'react'
import { View, Text, Image, ScrollView, TextInput, Button } from 'react-native';
import MyClassComponent from './component/class_component';
import MyFunComponent from './component/fun_component'
import MyState from './component/my_state';
import MyFunComponent2 from './component/class_component_prop_state'
import MyStateHook from './component/state_hook'

function HelloWorld({navigation}){
    return (
        <ScrollView>
            <Text> some text</Text>
            <View style={{ alignItems: 'center' }}>
                <Text>some more text</Text>
                <Image source={{ uri: 'https://reactnative.dev/docs/assets/p_cat2.png' }} style={{ width: 200, height: 200 }} />
            </View>
            <TextInput style={{ height: 40, borderColor: 'black', borderWidth: 2, }} defaultValue='I am defalut value' />
            <MyClassComponent></MyClassComponent>
            <MyFunComponent name="1" sex='男' />
            <MyState />
            <MyFunComponent2 name="小新" />
            <MyStateHook />
            <Button title='nav to second' onPress={() => {
                navigation.navigate('second')
                console.log('clicked')
            }} />
        </ScrollView>
    );
}

export default HelloWorld