import React, { Component } from "react";
import { ImageBackground, View, StatusBar, Dimensions, Platform, StyleSheet } from "react-native";
import { Container, Button, H3, Text } from "native-base";

const deviceHeight = Dimensions.get("window").height;
const launchscreenBg = require("../../assets/launchscreen-bg.png");

export default class BottomTabScreen3 extends Component {
  render() {
    return (
      <Container>
        <StatusBar barStyle="light-content" androidStatusBarColor='#000000' />
        <ImageBackground source={launchscreenBg} style={styles.imageContainer}>
          <View style={styles.container}>
            <H3 style={styles.text}>BottomTabScreen3</H3>
          </View>
        </ImageBackground>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    width: null,
    height: null
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent:'center',
    backgroundColor: "transparent",
  },
  text: {
    color: "#D8D8D8",
  }
})
