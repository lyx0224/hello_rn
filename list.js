import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

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
                renderItem={({ item }) =>
                    <Text style={styles.item}>{item.name} + {item.sex}</Text>
                }
            />
        </View>
    );
}

export default MyListPage
