import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './Store'
import { decrementQuantity, deleteProductFromMyCart, incrementQuantity } from './MyCartSlice';



export default function MyCart() {
    // const { product } = useSelector(state => state.product)
    const dispatch = useDispatch();
    const { cart } = useSelector((state: RootState) => state.cart)
    return (

        <View style={{ flex: 1 }}>

            <View style={{ width: "100%", height: 60, elevation: 1, backgroundColor: "white" }}>

                <Text style={{ color: "#000", fontSize: 25, marginTop: 10, padding: 7 }}>Products</Text>

            </View>

            {/* <ScrollView >
                {shoes.map((item) => {
                    return (
                        <View style={{ elevation: 1, backgroundColor: "white", height: 100, width: "100%", marginTop: 20 }}>

                            <Image
                                style={{ height: 50, width: 50 }}
                                source={{ uri: item.image }} />

                        </View>
                    )
                })}
            </ScrollView> */}
            <FlatList
                data={cart}
                renderItem={({ item }) => {

                    return (
                        <View key={item.id} style={{ elevation: 1, backgroundColor: "white", height: 100, width: "100%", marginTop: 20, flexDirection: "row" }}>

                            <Image
                                style={{ height: 90, width: 90, marginHorizontal: 5, marginTop: 5 }}
                                source={{ uri: item.image }} />

                            <View>

                                <Text style={{ fontSize: 20, color: "black", marginLeft: 10 }}>
                                    {item.name}
                                </Text>

                                <Text style={{ fontSize: 17, color: "green", marginLeft: 10 }}>
                                    {'₹ ' + item.price}
                                </Text>


                                <View style={{ flexDirection: "row", marginTop: 10, backgroundColor: 'white', height: 30, justifyContent: "center" }}>

                                    {item.qty == 0 ? null : (
                                        <TouchableOpacity style={{ backgroundColor: "green", marginHorizontal: 5, borderRadius: 5, width: 30 }}
                                            onPress={() => dispatch(decrementQuantity(item))}
                                        >
                                            <Text style={{ color: "white", fontSize: 20, alignSelf: "center" }}>
                                                -
                                            </Text>
                                        </TouchableOpacity>
                                    )}

                                    {item.qty == 0 ? null : (
                                        <Text style={{ fontSize: 25 }}>
                                            {item.qty}
                                        </Text>
                                    )}

                                    {item.qty == 0 ? null : (
                                        <TouchableOpacity style={{ backgroundColor: "green", marginHorizontal: 5, borderRadius: 5, justifyContent: "center", width: 30 }}
                                            onPress={() => dispatch(incrementQuantity(item))}
                                        >
                                            <Text style={{ color: "white", alignSelf: "center", fontSize: 20 }}>
                                                +
                                            </Text>
                                        </TouchableOpacity>
                                    )}

                                </View>

                            </View>

                            <View style={{ alignSelf: "flex-end", marginLeft: "40%" }}>
                                <TouchableOpacity onPress={() => dispatch(deleteProductFromMyCart(item))}>
                                    <Image style={{ width: 30, height: 30, bottom: 50, position: "absolute", tintColor: "red" }}
                                        source={{ uri: "https://cdn-icons-png.flaticon.com/512/3405/3405244.png" }}
                                    />
                                </TouchableOpacity>

                            </View>


                        </View>

                    )
                }

                }
            />


        </View >
    )
}