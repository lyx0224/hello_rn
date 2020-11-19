import React from 'react'
import { View, Text, Image, ScrollView, TextInput } from 'react-native';
import MyClassComponent from './component/class_component';
import MyFunComponent from './component/fun_component'

//HelloWorld是个函数组件,() => {}是函数,类似dart
//类似Cat2.
const HelloWorld = () => {
    return (
        <ScrollView>
            <Text> some text</Text>
            <View style={{ alignItems: 'center' }}>
                <Text>some more text</Text>
                <Image source={{ uri: 'https://reactnative.dev/docs/assets/p_cat2.png' }} style={{ width: 200, height: 200 }} />
            </View>
            <TextInput style={{ height: 40, borderColor: 'black', borderWidth: 2, }} defaultValue='I am defalut value' />
            <MyClassComponent></MyClassComponent>
            <MyFunComponent name = "1" sex = '男'/>
        </ScrollView>
    );
}

export default HelloWorld