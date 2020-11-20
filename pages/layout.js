import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

function LayoutDemo() {
    return (
        //style可以是多个
        <View style={{ width: '100%', height: '100%', flexDirection: 'column' }}>
            <View style={[{ flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-end' }, styles.container]}>
                <Cell color='gray' text='1' />
                <Cell color='red' text='2' />
                <Cell color='yellow' text='3' />
            </View>
            <View style={{ backgroundColor: '#55dddddd', marginTop: 10 , alignItems:'center'}}>
                <Image style={styles.logo} source={require('../images/logo.png')} />
            </View>

        </View>


    )
}

const styles = StyleSheet.create({
    logo: {
        width: 100,
        height: 100,
        resizeMode:'center'
    },
    container: {
        width: '100%',
        height: '30%',//父布局（这儿的父布局是屏幕了）高度的50%
        backgroundColor: '#dddddd'
    },
    cell: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cell_content: {
        color: 'white',
        fontWeight: 'bold'
    }
})

///色块
class Cell extends Component {
    render() {
        return (
            <View style={[styles.cell, { backgroundColor: this.props.color }]} >
                <Text style={styles.cell_content}>{this.props.text}</Text>
            </View>
        )
    }
}

export default LayoutDemo
