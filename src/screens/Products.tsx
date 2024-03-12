import { View, Text, FlatList, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addProductToMyCart } from '../redux/MyCartSlice';
import { addMyProduct, incrementQty } from '../redux/MyProductSlice';
import MyCart from '../redux/MyCart';
import { useNavigation } from '@react-navigation/native';
import { RootState } from '../redux/Store';

export default function Products({ navigation }) {
    const dispatch = useDispatch()
    // const navigation = useNavigation();

    const { product } = useSelector((state: RootState) => state.product)
    const { cart } = useSelector((state: RootState) => state.cart);

    const getTotal = () => {
        let total = 0;
        cart.map((item) => {
            total = total + item.qty * item.price;
        });
        return total;
    }

    console.log('cart data : ', cart)

    const shoes = [{
        id: 0,
        name: 'Puma',
        price: 7000,
        size: 10,
        qty: 0,
        image: 'https://media.istockphoto.com/id/1350560575/photo/pair-of-blue-running-sneakers-on-white-background-isolated.webp?b=1&s=170667a&w=0&k=20&c=liUSgX6SafJ7HWvefFqR9-pnf3KuH6v1lwQ6iEpePWc='
    }, {
        id: 1,
        name: 'Nike',
        price: 10000,
        size: 9,
        qty: 0,
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D&w=1000&q=80'
    }, {
        id: 2,
        name: 'Adidas',
        price: 8000,
        size: 7,
        qty: 0,
        image: 'https://www.jiomart.com/images/product/original/rvrgwpjvsp/bruton-trendy-sports-shoes-for-men-blue-product-images-rvrgwpjvsp-0-202209021256.jpg?im=Resize=(1000,1000)'
    }, {
        id: 3,
        name: 'Sparx',
        price: 5000,
        size: 8,
        qty: 0,
        image: 'https://img.freepik.com/free-photo/pair-trainers_144627-3800.jpg'
    }, {
        id: 4,
        name: 'Puma',
        price: 7000,
        size: 10,
        qty: 0,
        image: 'https://media.istockphoto.com/id/1350560575/photo/pair-of-blue-running-sneakers-on-white-background-isolated.webp?b=1&s=170667a&w=0&k=20&c=liUSgX6SafJ7HWvefFqR9-pnf3KuH6v1lwQ6iEpePWc='
    }, {
        id: 5,
        name: 'Nike',
        price: 10000,
        size: 9,
        qty: 0,
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D&w=1000&q=80'
    }, {
        id: 6,
        name: 'Adidas',
        price: 8000,
        size: 7,
        qty: 0,
        image: 'https://www.jiomart.com/images/product/original/rvrgwpjvsp/bruton-trendy-sports-shoes-for-men-blue-product-images-rvrgwpjvsp-0-202209021256.jpg?im=Resize=(1000,1000)'
    }, {
        id: 7,
        name: 'Sparx',
        price: 5000,
        size: 8,
        qty: 0,
        image: 'https://img.freepik.com/free-photo/pair-trainers_144627-3800.jpg'
    }
    ];

    useEffect(() => {
        shoes.map((item) => {
            dispatch((addMyProduct(item)))
        })
    }, []);



    return (
        <View style={{ flex: 1 }}>
            <View style={{ width: "100%", height: 60, elevation: 1, backgroundColor: "white" }}>

                <Text style={{ color: "#000", fontSize: 25, marginTop: 10, padding: 7 }}>Products</Text>
            </View>
            <FlatList
                data={product}
                renderItem={({ item }) => {

                    return (
                        <View key={item.id} style={{ elevation: 1, backgroundColor: "white", height: 100, width: "100%", marginTop: 20, flexDirection: "row" }}>

                            <Image
                                style={{ height: 90, width: 90, marginHorizontal: 5, marginTop: 5 }}
                                source={{ uri: item.image }} />

                            <View style={{}}>

                                <Text style={{ fontSize: 20, color: "black", marginLeft: 10 }}>
                                    {item.name}
                                </Text>

                                <Text style={{ fontSize: 17, color: "green", marginLeft: 10 }}>
                                    {'₹ ' + item.price}
                                </Text>

                                <View style={{ flexDirection: "row", marginTop: 10, backgroundColor: 'white', height: 30, justifyContent: "center" }}>

                                    {item.qty == 0 ?
                                        (<TouchableOpacity style={{ backgroundColor: "green", marginHorizontal: 5, borderRadius: 10 }}
                                            onPress={() => {
                                                dispatch(addProductToMyCart(item));
                                                dispatch(incrementQty(item.id));

                                            }}
                                        >

                                            <Text style={{ color: "white", padding: 5 }}>
                                                Add to cart
                                            </Text>
                                        </TouchableOpacity>)
                                        : null}


                                    {item.qty > 0 ? (
                                        <TouchableOpacity style={{ backgroundColor: "green", marginHorizontal: 5, borderRadius: 5, width: 30 }}>
                                            <Text style={{ color: "white", fontSize: 20, alignSelf: "center" }}>
                                                -
                                            </Text>
                                        </TouchableOpacity>
                                    )
                                        : null}

                                    {item.qty > 0 ? (
                                        <Text style={{ fontSize: 25 }}>
                                            {item.qty}
                                        </Text>
                                    ) : null}

                                    {item.qty > 0 ? (
                                        <TouchableOpacity onPress={() => {
                                            dispatch(addProductToMyCart(item))
                                        }} style={{ backgroundColor: "green", marginHorizontal: 5, borderRadius: 5, justifyContent: "center", width: 30 }}>
                                            <Text style={{ color: "white", alignSelf: "center", fontSize: 20 }}>
                                                +
                                            </Text>
                                        </TouchableOpacity>
                                    ) : null}

                                </View>

                            </View>




                        </View>

                    )
                }

                }
            />
            {cart.length > 0 ? (
                <View style={{ width: "100%", height: 60, bottom: 0, position: "absolute", backgroundColor: "white", flexDirection: "row", justifyContent: "space-evenly" }}>

                    <View style={{ width: "50%", justifyContent: "center", alignItems: "center" }}>

                        <Text style={{ color: "black" }}>
                            {'Added Items : ' + '(' + cart.length + ')'}
                        </Text>

                        <Text style={{ color: "black" }}>
                            {'Total Amount: ' + '₹ ' + getTotal()}
                        </Text>
                    </View>

                    <View style={{ width: "40%", height: 40, borderRadius: 10, justifyContent: "space-between", backgroundColor: "green", alignItems: "center", marginTop: 10 }}>

                        <TouchableOpacity style={{ padding: 5 }}>
                            <Text style={{ color: "white", fontSize: 20 }}
                                onPress={() => navigation.navigate("MyCart")}
                            >
                                View Cart
                            </Text>
                        </TouchableOpacity>

                    </View>

                </View>
            ) : null}




        </View >
    )
}