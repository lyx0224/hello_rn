import React, { useState } from 'react'
import { TextInput, View, Text, StyleSheet } from 'react-native'

function MyStateHook() {
    //value相当于state,onValueChanged相当于setState，两个名字可以随便取
    //useState的参数值为state的默认值，参数也可以为字典来定义多个状态
    const [value, onValueChanged] = useState('defalut value')
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, backgroundColor: 'yellow' ,padding:10}}>
            <TextInput onChangeText={(text) => onValueChanged(text)} defaultValue={value} style={styles.textInput} />
            <Text style={{color: 'red'}}>{value}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textInput: {
        width: 300,
        borderColor: 'gray',
        borderWidth: 2,
        borderRadius: 5
    }
})

export default MyStateHook
