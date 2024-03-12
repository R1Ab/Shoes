import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import Routes from './routes/Routes'
import { useDispatch } from 'react-redux'
import { addMyProduct } from '../redux/MyProductSlice';

export default function ProductList() {

    return (
        <View>
            <Text>Product List</Text>
        </View>
    )
}