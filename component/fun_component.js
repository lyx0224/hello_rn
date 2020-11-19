import { ScrollView, Text } from 'react-native'
import React from 'react'
//自定义组件（函数组件）
export default function MyFunComponent(props) {
    return (
        <ScrollView>
            <Text>我是funtional component，属性是{props.name}, {props.sex}</Text>
            <Greeting/>
        </ScrollView>

    )
}

//scop是本文件？
const Greeting = () => {
    return (
        <Text>我的scop是文件内？</Text>
    )
}
