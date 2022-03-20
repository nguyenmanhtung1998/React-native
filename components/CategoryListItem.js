import React, { useEffect, useMemo, useState } from "react";
import { Button, FlatList, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "./Themed";
import { View } from "./Themed";
import favicom from "../assets/images/icon.png";
import avatarEats from "../assets/images/Group.png"
import axios from 'axios';
import Payment from './Payment.js';
export default function CategoryListItem(props) {

    const [dataViewFood, setData1] = useState({})
    const [dataViewDrink, setData2] = useState({})
    const [count, setData4] = useState(0)
    const [price, setPrice] = useState(0)

    useEffect(() => {
        axios.get(`https://622f1e1c3ff58f023c1671a7.mockapi.io/api/v1/menu`).then((response) => {
            // console.log(response)
            var listDrink = [];
            var listFood = [];
            response.data.forEach(element => {
                if (element.type == 1) {
                    listDrink.push(element);
                } else {
                    listFood.push(element)
                }
            });
            setData1(listDrink);
            setData2(listFood);
        });
    }, []);
    const onClick = (_item) => {
        console.log(_item);
        setPrice(price + _item.price);
        setData4(count + 1);

    }
    return <View style={styless.container}>
        <View style={styless.header}>
            <Text style={styless.TextHeader}>
                PayE
            </Text>
        </View>
        <View style={styless.logo}>
            <Image source={avatarEats} style={styless.avatarHeader}>
            </Image>
        </View>

        <View style={styless.drink}>
            <Text style={styless.title}>
                Đồ uống
            </Text>
            <View style={styless.food_view}>
                <FlatList
                    data={dataViewDrink}
                    renderItem={({ item, index, separators }) => (
                        <View style={styless.item}>
                            <View style={styless.item_1}>
                                <Image source={require('../assets/images/milk.png')} style={styless.avatarEat}>
                                </Image>
                                <View style={styless.item_view}>
                                    <Text style={[styless.text_item, styless.name_item]}>{item.name}</Text>
                                    <Text style={[styless.text_item, styless.price_item]}>{item.price}đ</Text>
                                    <Text style={[styless.text_item, styless.quantity_item]}>{item.quantity} sản phẩm có sẵn</Text>
                                </View>
                            </View>
                            <TouchableOpacity onPress={() => onClick(item)}>
                                <View style={styless.icon_view} >
                                    <View style={styless.iconAdd}>
                                        <Image source={require('../assets/images/add.png')} style={styless.iconAdd_i}>
                                        </Image>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </View>
        </View>
        <View style={styless.food}>
            <Text style={styless.title}>
                Đồ ăn
            </Text>
            <View style={styless.food_view}>
                <FlatList
                    data={dataViewFood}
                    renderItem={({ item, index, separators }) => (
                        <View style={styless.item}>
                            <View style={styless.item_1}>
                                <Image source={require('../assets/images/milk.png')} style={styless.avatarEat}>
                                </Image>
                                <View style={styless.item_view}>
                                    <Text style={[styless.text_item, styless.name_item]}>{item.name}</Text>
                                    <Text style={[styless.text_item, styless.price_item]}>{item.price}đ</Text>
                                    <Text style={[styless.text_item, styless.quantity_item]}>{item.quantity} sản phẩm có sẵn</Text>
                                </View>
                            </View>
                            <TouchableOpacity onPress={() => onClick(item)}>
                                <View style={styless.icon_view}>
                                    <View style={styless.iconAdd}>
                                        <Image source={require('../assets/images/add.png')} style={styless.iconAdd_i}>
                                        </Image>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </View>
        </View>
        <Payment quantity={count} price={price} />
    </View >
}
const styless = StyleSheet.create({
    header: {
        backgroundColor: '#FF862E',
        height: 96,
        width: '100%',
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center"
    },
    TextHeader: {
        fontFamily: 'NuniSans',
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
        fontSize: 40,
        fontWeight: "600",
        color: '#FFFFFF'
    },
    CategoryListItemImage: {
        width: 64,
        height: 64,
    },
    text_item: {
        fontFamily: "Roboto"
    },
    price_item: {
        color: '#BE5B00',

    },
    name_item: {
        color: '#424242',
    },
    quantity_item: {
        color: '#B2B2B2',
    },
    title: {
        color: '#EE5460',
        fontFamily: 'NuniSans',
        fontSize: 15,
        textTransform: "uppercase",
        marginBottom: 8,
    },
    container: {
        alignItems: "center"
    },
    logo: {
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        backgroundColor: '#FF862E',
        width: 100,
        height: 100,
        borderRadius: 100,
        marginBottom: 25,
        marginTop: 25
    },
    drink: {
        flex: 4,
        paddingLeft: 20,
        width: '100%'
    },
    food: {
        flex: 4,
        paddingLeft: 20,
        width: '100%'
    },
    item: {
        paddingBottom: 20,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between"

    },
    iconAdd: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#FF862E',
        width: 40,
        height: 40,
        borderRadius: 100,
        marginRight: 20
    },
    iconAdd_i: {
        width: 15,
        height: 15
    },
    avatarEat: {
        marginRight: 20,
        width: 80,
        height: 80
    },
    item_1: {
        flexDirection: 'row',
        flexWrap: "wrap"
    },
    item_view: {
        justifyContent: "space-around"
    },
    icon_view: {
        justifyContent: "center",
        height: "100%"
    },
    avatarHeader: {
        width: 60,
        height: 60,
        // borderRadius: 100
    },

    button: {
        color: "#ffff",
        borderRadius: 4,
        backgroundColor: "#FF862E",
        height: 50,
        width: 150,
        justifyContent: "center",
        alignItems: "center"
    },
    cart: {
        marginTop: 5,
        marginRight: 5,
        backgroundColor: 'rgba(255, 134, 46, 1)',
        width: 50,
        height: 50,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    iconCart: {
        width: 30,
        height: 30
    },
    view_payment: {
        // borderTopWidth: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,
        elevation: 17,
        padding: 20,
        width: "100%",
        justifyContent: "space-between",
        flexDirection: "row"
    },
    view_cart: {
        flexDirection: "row",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "space-between"
    },
    textPayment: {
        color: "#FFFFFF",
        fontSize: 18,
    },
    price_items: {
        color: "#797979",
    },
    txt_price_items: {
        paddingLeft: 20,
        fontSize: 18
    }
});
