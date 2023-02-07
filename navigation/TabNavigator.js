import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AntDesign } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 


import ShopNavigator from './ShopNavigator'
import CartNavigator from './CartNavigator'

const BottomTabs = createBottomTabNavigator()

const TabNavigator = () => (
    <BottomTabs.Navigator 
        initialRouteName="ShopTab"
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: false
        }}
    >
        <BottomTabs.Screen
            name="ShopTab"
            component={ShopNavigator}
            options={{
                tabBarIcon: ({focused}) => (
                    focused ? 
                    <AntDesign name="appstore1" size={24} color="black" /> :
                    <AntDesign name="appstore-o" size={24} color="black" /> 
                  ),
            }}
        />
        <BottomTabs.Screen
            name="CartTab"
            component={CartNavigator}
            options={{
                tabBarIcon: ({focused}) => (
                    focused ? 
                    <Entypo name="shopping-cart" size={24} color="black" /> :
                    <AntDesign name="shoppingcart" size={24} color="black"  /> 
                  ),
            }}
        />
    </BottomTabs.Navigator>
)

export default TabNavigator
