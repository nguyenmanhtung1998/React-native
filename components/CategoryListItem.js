import React from "react";
import { FlatList, Image, StyleSheet } from "react-native";
import { Text } from "./Themed";
import { View } from "./Themed";
import favicom from "../assets/images/icon.png"

export default function CategoryListItem(props) {
    return <View style={styless.container}>
        <View style={styless.header}>
            <Text style={styless.TextHeader}>
                PayE
            </Text>
        </View>
        <View style={styless.logo}>
        </View>
        <View style={styless.drink}>
            <Text style={styless.title}>
                Đồ uống
            </Text>

            <FlatList
                data={datas}
                renderItem={({ item, index, separators }) => (
                    <View style={styless.item}>
                    <View style={styless.item_1}>
                        <Image source={require('../assets/images/milk.png')} style={styless.avatarEat}>
                        </Image>
                        <View>
                            <Text>{item.title}</Text>
                            <Text>{item.price}đ</Text>
                            <Text>{index.quantity} sản phẩm có sẵn</Text>
                        </View>
                    </View>
                    <View style={styless.iconAdd}>
                        <Image source={require('../assets/images/add.png')} style={styless.iconAdd_i}>   
                        </Image>
                    </View>
                </View>
                )}
            />
        </View>
        <View style={styless.food}>
            <Text style={styless.title}>
                Đồ ăn
            </Text>
            <FlatList
                data={datas}
                renderItem={({ item, index, separators }) => (
                    <View style={styless.item}>
                    <View style={styless.item_1}>
                        <Image source={require('../assets/images/milk.png')} style={styless.avatarEat}>
                        </Image>
                        <View>
                            <Text>{item.title}</Text>
                            <Text>{item.price}đ</Text>
                            <Text>{index.quantity} sản phẩm có sẵn</Text>
                        </View>
                    </View>
                    <View style={styless.iconAdd}>
                        <Image source={require('../assets/images/add.png')} style={styless.iconAdd_i}>   
                        </Image>
                    </View>
                </View>
                )}
            />
        </View>

        {/* <Image style={styless.CategoryListItemImage} source={require('../assets/images/iconc.png')} /> */}
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
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
        fontFamily: 'Cursive',
        fontSize: 40,
        fontWeight: "600",
        color: '#FFFFFF'
    },
    CategoryListItemImage: {
        width: 64,
        height: 64,
    },
    title: {
        color: '#EE5460',
        fontFamily: 'Cursive',
        fontSize: 15,
        textTransform: "uppercase",
        marginBottom: 8,
    },
    container: {
        alignItems: "center"
    },
    logo: {
        backgroundColor: '#FF862E',
        width: 100,
        height: 100,
        borderRadius: 100,
        marginBottom: 25,
        marginTop: 25
    },
    drink: {
        paddingLeft: 20,
        width: '100%'
    },
    food: {
        paddingLeft: 10,
        width: '100%'
    },
    item: {
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
    }


});

const datas = [
    {
        id: 1,
        title: "Sữa chua dâu",
        type: "1",
        price: 15000,
        quantity: 3
    },
    {
        id: 1,
        title: "Nước giải khát",
        type: "1",
        price: 15000,
        quantity: 3
    },
    {
        id: 1,
        title: "Sinh tố cam",
        type: "1",
        price: 15000,
        quantity: 3
    },
    {
        id: 1,
        title: "Sinh tố dưa hấu",
        type: "1",
        price: 15000,
        quantity: 3
    }
]