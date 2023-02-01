import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

const ProductDetail = ({navigation}) =>{
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Pantalla detalle de producto</Text>
            <Button title="Ir al home" onPress={() =>{
                navigation.navigate("Home")
            }} />
            <Button title="Ir al Listado de productos" onPress={() =>{
                navigation.navigate("Categorys")
            }} />
        </View>
    )
}

export default ProductDetail

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