import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoryList from '../screens/CategoryList'
import ProductList from '../screens/ProductList'
import ProductDetail from '../screens/ProductDetail'

const Stack = createNativeStackNavigator();

const ShopNavigator = () => (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen 
                name="Home" 
                component={CategoryList}
                options={{
                    title: "Tienda online"
                }}
                />
            <Stack.Screen 
                name="Products" 
                component={ProductList} 
                options={({ route })=> ({
                    title: route.params.name
                })}
            />
            <Stack.Screen 
                name="Detail" 
                component={ProductDetail}
                options={({ route }) => ({
                    title: route.params.name
                })}
            />
        </Stack.Navigator>
)



export default ShopNavigator
