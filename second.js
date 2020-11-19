import React from 'react'
import { View, Text, Button } from 'react-native'

//页面会加上navigation bar
function SecondPage({navigation}) {
    return (
        <View>
            <Text>This is SecondPage</Text>
            <Button title='nav to hello' onPress={()=> navigation.navigate('home')}/>
        </View>
    )
}

export default SecondPage
