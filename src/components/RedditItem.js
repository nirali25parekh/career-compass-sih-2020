import React, { Component } from "react";
import { ImageBackground, View, StatusBar, Dimensions, Platform, StyleSheet, Image } from "react-native";
import { Container, Button, H3, Text, Card, CardItem, Body } from "native-base";


const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default class RedditItem extends Component {

    loadInBrowser = (url) => {
        Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
      };

    render() {
        return (
            <View style={{ marginRight: 10 }}>
                <Card style={styles.entireCard}>

                    <CardItem>
                        <Image
                            style={styles.tinyLogo}
                            source={require('../../assets/reddit_logo.png')} />
                    </CardItem>

                    <Body>
                        <Text style={styles.textBody}>
                            <Text style={styles.keyBody}> Domain: </Text><Text style={styles.valueBody}>{this.props.item.domain}{"\n"} </Text>
                            <Text style={styles.keyBody}> SubReddit: </Text><Text style={styles.valueBody}>{this.props.item.subreddit} {"\n"}</Text>
                            <Text style={styles.keyBody}> Created At: </Text><Text style={styles.valueBody}>{this.props.item.createdAt} {"\n"}</Text>
                        </Text>
                    </Body>


                    <CardItem footer>
                        <Button onPress={()=> this.loadInBrowser(this.props.item.openLink)} style={styles.openLinkButton}><Text> Open Link </Text></Button>
                    </CardItem>
                </Card>
            </View>


        );
    }
}

const styles = StyleSheet.create({
    entireCard: {

        flex: 1,
        borderRadius: 15,
        alignItems: 'center',
        padding: 5,
        marginBottom: 10,
        paddingHorizontal: 10,

        // shadow
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 8,       
    },
    tinyLogo: {
        alignSelf: 'center',
        width: 110,
        height: 110,
        justifyContent: 'center'
    },


    keyBody: {
        fontSize: 14,
        fontWeight: 'bold',
        lineHeight: 20,
    },
    textBody: {
        lineHeight: 20,
    },
    valueBody: {
        fontSize: 12,
    },
    keywordKey: {
        fontWeight: 'bold'
    },
    keywordValue: {
        fontWeight: 'bold'
    },
    openLinkButton: {
        backgroundColor: '#db6574',
        borderRadius: 10,
    }
})
