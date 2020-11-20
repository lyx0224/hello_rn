import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

function LayoutDemo() {
    return (
        //style可以是多个
        <View style={[{ flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-end' }, styles.container]}>
            <Cell color='gray' text='1' />
            <Cell color='red' text='2' />
            <Cell color='yellow' text='3' />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '50%',//屏幕高度的50%
        backgroundColor: '#dddddd'
    },
    cell: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

///色块
class Cell extends Component {
    render() {
        return (
            <View style={[styles.cell, { backgroundColor: this.props.color }]} >
                <Text>{this.props.text}</Text>
            </View>
        )
    }
}

export default LayoutDemo
