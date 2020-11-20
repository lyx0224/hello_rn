import React, { Component, useState } from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default class LifeCycleComponent extends Component {

    onPress = () => {
        this.setState({
            clickTimes: this.state.clickTimes + 1
        })
    }

    state = {
        clickTimes: 1
    }

    render() {
        return (
            <TouchableOpacity onPress={this.onPress}>
                <View style={{ backgroundColor: 'red', height: 50, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>LifeCycleComponent: {this.state.clickTimes}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    componentDidMount() {
        console.log('didMount')
    }

    ////当shouldComponentUpdate返回true时回调
    componentDidUpdate() {
        console.log('didUpdate')
    }

    componentWillUnmount() {
        console.log('will unmount')
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextState.clickTimes);
        //输出{},暂时没有设置属性
        console.log(nextProps);
        if (nextState.clickTimes != this.state.clickTimes) {
            return true
        } else {
            return false;
        }
    }
}
