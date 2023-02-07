import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoryList from '../screens/CategoryList'
import ProductList from '../screens/ProductList'
import ProductDetail from '../screens/ProductDetail'

const Stack = createNativeStackNavigator();

const ShopNavigator = () => (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={CategoryList} />
            <Stack.Screen name="Categorys" component={ProductList} />
            <Stack.Screen name="Detail" component={ProductDetail} />
        </Stack.Navigator>
)



export default ShopNavigator
