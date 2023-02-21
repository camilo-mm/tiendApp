import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

const GridItem = ({item, onSelected}) => {
  return (
    <View style={styles.gridItem}>
        <TouchableOpacity 
            style={{...styles.container, backgroundColor: item.color}}
            onPress={()=> onSelected(item)}>
            <View>
                <Text style={styles.title}>{item.title}</Text>
            </View>
        </TouchableOpacity>
    </View>
  )
}

export default GridItem

const styles = StyleSheet.create({
    gridItem:{
        flex: 1,
        borderRadius: 5,
        margin: 15,
    },
    container: {
        flex: 1,
        borderRadius: 5,
        justifyContent: 'flex-end',
        padding: 8
    },
    title: {
        fontSize: 28,
        padding: 20,
        textAlign: 'center',
        color: '#000'
    }
})
