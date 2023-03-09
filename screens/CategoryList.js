import React from 'react'
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import GridItem from '../components/GridItem';
import { selectCategory } from '../store/actions/category.action';
import ImageSelector from '../components/ImageSelector';


export default function CategoryList({navigation}){
    const categories = useSelector(state => state.categories.categories)
    const dispatch = useDispatch()

    const handleSelectedCategory = (item) => {
        dispatch(selectCategory(item.id))
        navigation.navigate('Products', {
            name: item.title
        })
    }
    
    const renderGridItem = ({item}) => (
        <GridItem item={item} onSelected={handleSelectedCategory} />
    )

    return(
        <>
        <ImageSelector onImage={image => console.log(image)} />
        <FlatList
            data={categories}
            keyExtractor={item => item.id}
            renderItem={renderGridItem}
        />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title:{
        fontSize: 30,
        fontFamily: 'pacifico'
    }
})