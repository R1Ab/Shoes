import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Products from '../Products';
import ProductList from '../ProductList';
import MyCart from '../../redux/MyCart';
import Speech from './Speech';

export default function Routes() {
    const Stack = createNativeStackNavigator();
    return (

        <NavigationContainer>
            <Stack.Navigator initialRouteName='Speech' screenOptions={{ headerShown: false }}>

                {/* <Stack.Navigator initialRouteName='Product' screenOptions={{ headerShown: false }}> */}
                <Stack.Screen name='Product' component={Products}

                />
                <Stack.Screen name='ProductList' component={ProductList}
                />
                <Stack.Screen name='MyCart' component={MyCart} />
                <Stack.Screen name='Speech' component={Speech} />


            </Stack.Navigator>

        </NavigationContainer>
    )
}