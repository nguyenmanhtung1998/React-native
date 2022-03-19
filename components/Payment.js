import React, { useState } from "react";
import { Button, FlatList, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "./Themed";
import { View } from "./Themed";
import favicom from "../assets/images/icon.png";
import avatarEats from "../assets/images/Group.png"
import axios from 'axios';
export default function CategoryListItem(props) {
    if (props.quantity <= 0) {
        return null;
    } else {
        return (
            <View style={styless.view_payment}>
                <View style={styless.view_cart}>
                    <View style={{ height: "100%" }}>
                        <View style={{
                            position: "absolute",
                            top: 0,
                            zIndex: 1000,
                            right: 0,
                            width: 20,
                            height: 20,
                            borderRadius: 100,
                            backgroundColor: "#0C41CB",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <Text style={{ color: "#FFFFFF" }}>
                                {props.quantity}
                            </Text>
                        </View>
                        <View style={styless.cart}>
                            <Image source={require('../assets/images/Vector.png')} style={styless.iconCart}>
                            </Image>
                        </View>
                    </View>
                    <View style={styless.price_items}>
                        <Text style={styless.txt_price_items}>
                            2700000 đ
                        </Text>
                    </View>
                </View>
                <View style={styless.button}>
                    <TouchableOpacity onPress={() => {

                    }}>
                        <Text style={styless.textPayment}>
                            Thanh toán
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styless = StyleSheet.create({
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