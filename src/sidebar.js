import React, { Component } from "react";
import { Image, Dimensions, Platform, StyleSheet } from "react-native";
import {Content, Text, List, ListItem, Icon, Container, Left, Right, Badge} from "native-base";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;


const drawerCover = require("../assets/nouristic_logo.png");
//const drawerImage = require("../../../assets/logo-kitchen-sink.png");
const datas = [
    // {
    //     name: "DrawerScreen 0",
    //     route: "DrawerScreen0",
    //     icon: "phone-portrait",
    //     bg: "#C5F442"
    // },
    {
        name: "Test",
        route: "DrawerScreen1",
        icon: "paper",
        bg: "#C5F442"
    },
    {
        name: "Result",
        route: "DrawerScreen2",
        icon: "bulb",
        bg: "#C5F442"
    },
    {
        name: "Find Contacts",
        route: "DrawerScreen3",
        icon: "people",
        bg: "#C5F442"
    },
];

export default class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shadowOffsetWidth: 1,
            shadowRadius: 4
        };
    }

    render() {
        return (
            <Container>
                <Content
                    bounces={false}
                    style={{ flex: 1, backgroundColor: "#22252a", top: -1 }}
                >
                    <Image source={drawerCover} style={styles.drawerCover} />
                    {/* <Image square style={styles.drawerImage} source={drawerImage} /> */}

                    <List
                        dataArray={datas}
                        renderRow={data =>
                            <ListItem
                                button
                                noBorder
                                onPress={() => this.props.navigation.navigate(data.route)}
                            >
                                <Left>
                                    <Icon
                                        active
                                        name={data.icon}
                                        style={{ color: "white", fontSize: 26, width: 30 }}
                                    />
                                    <Text style={styles.text}>
                                        {data.name}
                                    </Text>
                                </Left>
                                {data.types &&
                                    <Right style={{ flex: 1 }}>
                                        <Badge
                                            style={{
                                                borderRadius: 3,
                                                height: 25,
                                                width: 72,
                                                backgroundColor: data.bg
                                            }}
                                        >
                                            <Text
                                                style={styles.badgeText}
                                            >{`${data.types} Types`}</Text>
                                        </Badge>
                                    </Right>}
                            </ListItem>}
                    />
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    drawerCover: {
        alignSelf: "stretch",
        height: deviceHeight / 3.5,
        width: null,
        position: "relative",
        marginBottom: 10
    },
    drawerImage: {
        position: "absolute",
        color:'white',
        left: Platform.OS === "android" ? deviceWidth / 10 : deviceWidth / 9,
        top: Platform.OS === "android" ? deviceHeight / 13 : deviceHeight / 12,
        width: 210,
        height: 75,
        resizeMode: "cover"
    },
    text: {
        fontWeight: Platform.OS === "ios" ? "500" : "400",
        fontSize: 16,
        color:'white',
        marginLeft: 20
    },
    badgeText: {
        fontSize: Platform.OS === "ios" ? 13 : 11,
        fontWeight: "400",
        textAlign: "center",
        marginTop: Platform.OS === "android" ? -3 : undefined
    }
})

