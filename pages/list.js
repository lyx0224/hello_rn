import { View, Text, StyleSheet, FlatList, Button } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import React, { useLayoutEffect } from 'react'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    nav_btn: {
        color: '#841584',
    }
});

function MyListPage({ navigation }) {
    var data = []
    for (let index = 0; index < 20; index++) {
        data[index] = { name: 'item', sex: '男' };
    }
    //添加right菜单
    useLayoutEffect(() => {
        console.log('添加right按钮')
        navigation.setOptions({
            headerRight: () => (
                <View style={{ marginRight: 15, flexDirection:'row'}}>
                    <Button title='btn' style={styles.nav_btn} />
                    <Button title='btn2' style={styles.nav_btn}/>
                </View>

            )
        })
        return () => {
            //clean up
            console.log('clean up')
        };
    }, [])
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                //renterIetm透传item，index两个参数，点进源码可以看到
                renderItem={({ item, index }) =>
                    <TouchableOpacity onPress={() => {
                        console.log(index)
                    }}>
                        <Text style={styles.item}>{item.name} + {item.sex}</Text>
                    </TouchableOpacity>

                }
            />
        </View>
    );
}

export default MyListPage
