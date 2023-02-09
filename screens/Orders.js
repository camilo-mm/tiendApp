import React from 'react'
import {StyleSheet, View, Text} from 'react-native'

export default function Orders() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Órdenes</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title:{
        fontSize: 30,
        fontFamily: 'pacifico'
    },
})