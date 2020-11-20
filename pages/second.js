import React from 'react'
import { View, Text, Button } from 'react-native'
import LifeCycleComponent from '../component/lifecycle_component';
import UseEffectDemo from '../component/use_effect'

//页面会加上navigation bar
function SecondPage({ route, navigation }) {
    const { data, id } = route.params;
    return (
        <View style={{ backgroundColor: '#dddddddd' }}>
            <Text>This is SecondPage</Text>
            <Text>{data} id: {id}</Text>
            <View style={{ margin: 10 }}>
                <Button title='go back' onPress={() => navigation.goBack()} />
            </View>

            <View style={{ margin: 10 }}>
                <Button title='list page' onPress={() => navigation.navigate('mylist')} />
            </View>

            <View style={{ margin: 10 }}>
                <Button title='布局' onPress={() => navigation.navigate('layout')} />
            </View>

            <LifeCycleComponent />

            <UseEffectDemo />
        </View>
    )
}

export default SecondPage
