import React, { Component } from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'

export class MyState extends Component {
    //定义一个state
    state = {
        count: 0
    }

    onPress = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.onPress}>
                    <Text>click me</Text>
                </TouchableOpacity>
                <Text>You clicked {this.state.count} times</Text>
            </View>
        )
    }
}

//定义样式，引用样式是单花括号，双花括号里直接写样式
const styles = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: '#11dddddd',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'//类似wrap_content
    },
    button: {
        borderRadius: 5,
        alignItems: 'center',
        backgroundColor: '#00ff00',
        padding: 10,
        marginBottom: 10
    },
    button_text:{
        color: 'red'
    }
})

export default MyState
