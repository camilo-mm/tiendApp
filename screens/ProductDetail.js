import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import { useSelector } from 'react-redux';

const ProductDetail = ({route}) =>{
    const product = useSelector(state => state.products.selected)
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{product.name}</Text>
            <Text style={styles.description}>{product.description}</Text>
            <Text style={styles.price}>${product.price}</Text>
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
        padding: 20,
    },
    title:{
        fontSize: 30,
        fontFamily: 'pacifico'
    },
    description:{
        fontSize: 20,
    },
    price:{
        fontSize: 20,
    },
})