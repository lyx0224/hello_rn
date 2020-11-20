import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';

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
});

function MyListPage({ navigation }) {
    var data = []
    for (let index = 0; index < 20; index++) {
        data[index] = { name: 'item', sex: '男' };
    }
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
