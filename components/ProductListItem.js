import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

const ProductListItem = ({item, onSelected}) => {
  return (
        <TouchableOpacity onPress={()=> onSelected(item)}>
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>{item.name}</Text>
                </View>
                <View>
                    <Text style={styles.details}>${item.price}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ProductListItem

const styles = StyleSheet.create({
    ProductListItem:{
        flex: 1,
        borderRadius: 5,
        margin: 15,
    },
    container: {
        flex: 1,
        borderRadius: 5,
        justifyContent: 'flex-end',
        padding: 8,
        backgroundColor: '#bdfff6',
        margin: 20
    },
    title: {
        fontSize: 28,
        padding: 20,
        textAlign: 'center',
        color: '#000',
    },
    details: {
        fontSize: 18,   
    }
})
