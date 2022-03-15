import React from "react";
import { Button, FlatList, Image, StyleSheet } from "react-native";
import { Text } from "./Themed";
import { View } from "./Themed";
import favicom from "../assets/images/icon.png";
import avatarEats from "../assets/images/Group.png"

export default function CategoryListItem(props) {
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
                    data={datas}
                    renderItem={({ item, index, separators }) => (
                        <View style={styless.item}>
                            <View style={styless.item_1}>
                                <Image source={require('../assets/images/milk.png')} style={styless.avatarEat}>
                                </Image>
                                <View style={styless.item_view}>
                                    <Text style={[styless.text_item, styless.name_item]}>{item.title}</Text>
                                    <Text style={[styless.text_item, styless.price_item]}>{item.price}đ</Text>
                                    <Text style={[styless.text_item, styless.quantity_item]}>{item.quantity} sản phẩm có sẵn</Text>
                                </View>
                            </View>

                            <View style={styless.icon_view}>
                                <View style={styless.iconAdd}>
                                    <Image source={require('../assets/images/add.png')} style={styless.iconAdd_i}>
                                    </Image>
                                </View>
                            </View>
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
                    data={datas}
                    renderItem={({ item, index, separators }) => (
                        <View style={styless.item}>
                            <View style={styless.item_1}>
                                <Image source={require('../assets/images/milk.png')} style={styless.avatarEat}>
                                </Image>
                                <View style={styless.item_view}>
                                    <Text style={[styless.text_item, styless.name_item]}>{item.title}</Text>
                                    <Text style={[styless.text_item, styless.price_item]}>{item.price}đ</Text>
                                    <Text style={[styless.text_item, styless.quantity_item]}>{item.quantity} sản phẩm có sẵn</Text>
                                </View>
                            </View>
                            <View style={styless.icon_view}>
                                <View style={styless.iconAdd}>
                                    <Image source={require('../assets/images/add.png')} style={styless.iconAdd_i}>
                                    </Image>
                                </View>
                            </View>
                        </View>
                    )}
                />
            </View>
        </View>
        <View style={styless.view_payment}>
            <View style={styless.view_cart}>
                <View>
                    <View style={styless.cart}>
                        <Image source={require('../assets/images/Vector.png')} style={styless.iconCart}>
                        </Image>
                    </View>
                    <View>

                    </View>
                </View>
                <View>
                    <Text>
                        2700000 đ
                    </Text>
                </View>
            </View>
            <View>
                <Button
                    title="Thanh toán"
                    buttonStyle={{
                        backgroundColor: 'rgba(111, 202, 186, 1)',
                        borderRadius: 400,
                    }}
                    containerStyle={{
                        width: 200,
                        marginHorizontal: 50,
                        marginVertical: 10,
                    }}
                />
            </View>
        </View>
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
        color: "#FF862E",
        borderRadius: 20
    },
    cart: {
        backgroundColor: 'rgba(255, 134, 46, 1)',
        width: 76,
        height: 76,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    iconCart: {
        width: 40,
        height: 40
    },
    view_payment: {
        paddingLeft:20,
        paddingRight:20,
        width:"100%",
        justifyContent:"space-between",
        flexDirection: "row"
    },
    view_cart:{
        flexDirection:"row"
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
const payment = {

}