import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

export default function ProductList ({navigation}){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Pantalla de listado de productos</Text>
            <Button title="Ir al home" onPress={() =>{
                navigation.navigate("Home")
            }} />
            <Button title="Ver detalle de producto" onPress={()=>{
                navigation.navigate('Detail')
            }} />
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