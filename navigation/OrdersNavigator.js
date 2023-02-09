import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Orders from '../screens/Orders';

const Stack = createNativeStackNavigator();

const OrdersNavigator = () => (
        <Stack.Navigator initialRouteName="Orders">
            <Stack.Screen name="Orders" component={Orders} />
        </Stack.Navigator>
)


export default OrdersNavigator
