import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'

/**
 * 函数组件中没有生命周期，可以使用useState来代替
 * 
 * 如果想仅在didMount 和 willUnmout时候使用useEffet,参数2传[]，即不依赖prop和state
 * 
 * 如果不传参数2，在每次didUpdate中也会执行didMount和 willMount(这种业务场景几乎没有)
 * 
 */
function UseEffectDemo() {

    //have 2 parameters
    useEffect(() => {
        //didMount
        console.log('定时器开始工作')
        const id = setInterval(() => {
            setCount(c => c + 1)
        }, 1000)
        return () => {
            //will unmount
            console.log('定时器已停止')
            clearInterval(id)
        }
    }, [])

    const [getCount, setCount] = useState(0)

    return (
        <View style={{ height: 50, backgroundColor: 'orange', alignItems: 'center', justifyContent: 'center' }}>
            <Text>{getCount}</Text>
        </View>

    )
}

export default UseEffectDemo
