import React from 'react'
import {StyleSheet, View, Text} from 'react-native'

export default function Cart() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Carrito</Text>
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