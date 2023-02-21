import React, {useEffect} from 'react'
import { FlatList, StyleSheet } from 'react-native';

import ProductListItem from '../components/ProductListItem';
import { useSelector, useDispatch } from 'react-redux';
import { filteredProduct, selectedProduct } from '../store/actions/products.action';

export default function ProductList ({navigation, route}){
    const dispatch = useDispatch()
    const categoryProducts = useSelector(state => state.products.filteredProducts)
    const category = useSelector(state => state.categories.selected)

    useEffect(() => {
        dispatch(filteredProduct(category.id))
      }, [])

    const handleSelected = (item) =>{
        dispatch(selectedProduct(item.id))
        navigation.navigate('Detail', {
            name: item.name
        })
    }

    const renderItem = ({ item }) => (
        <ProductListItem item={item} onSelected={handleSelected} />
    )

    return(
        <FlatList
            data={categoryProducts}
            keyExtractor={item => item.id}
            renderItem={renderItem}
        />
    )
}
