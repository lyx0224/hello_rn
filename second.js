import React from 'react'
import { View, Text, Button } from 'react-native'

//页面会加上navigation bar
function SecondPage({ route, navigation }) {
    const { data, id } = route.params;
    return (
        <View>
            <Text>This is SecondPage</Text>
            <Text>{data} id: {id}</Text>
            <View style={{ margin: 10 }}>
                <Button title='go back' onPress={() => navigation.goBack()} />
            </View>

            <View style={{ margin: 10 }}>
                <Button title='list page' onPress={() => navigation.navigate('mylist')} />
            </View>

        </View>
    )
}

export default SecondPage
