import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

export default function CategoryList({navigation}){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Pantalla Categorías</Text>
            <Button title="Ver productos" onPress={()=>{
                navigation.navigate('Categorys')
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