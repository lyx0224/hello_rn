import React, { Component } from 'react'
import { Button, View, Text } from 'react-native'

export class MyClassComponent2 extends Component {

    state = {
        isHungry: true,
        button_color: 'green'
    }

    render() {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'gray', padding: 15 }}>
                <Text>
                    //class Component中引用props要加上this
                    我叫{this.props.name},我{this.state.isHungry ? "饿了" : "吃饱了"}
                </Text>
                <Button onPress={
                    () => {
                        this.setState({
                            isHungry: !this.state.isHungry,//取值时候，要带上this.state.xx否则报找不到
                            button_color: this.state.isHungry ? 'red' : 'green'
                        })
                    }} title='click me' color={this.state.button_color} />
            </View>
        )
    }
}
export default MyClassComponent2
