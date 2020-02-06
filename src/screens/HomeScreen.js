import React, { Component } from "react";
import { ImageBackground, View, StatusBar, Dimensions, Platform, StyleSheet } from "react-native";
import { Container, Button, H3, Text, Header, Left, Right, Body, Title, } from "native-base";

const deviceHeight = Dimensions.get("window").height;
const launchscreenBg = require("../../assets/db6574-01.png");
// const launchscreenLogo = require("../../../assets/logo-kitchen-sink.png");

export default class HomeScreen extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header style={{ backgroundColor: "#22252a" }}>

          <Body style={{ marginLeft: 40 }}>
            <Title>Home</Title>
          </Body>
          <Right />
        </Header>
        <ImageBackground
          source={launchscreenBg} style={styles.imageContainer}>
          <H3 style={styles.text}> Dashboard </H3>

          <Button
            style={styles.button}
            onPress={() => this.props.navigation.openDrawer()}
          >
            <Text>Lets Go!</Text>
          </Button>
        </ImageBackground>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: "#22252a", //black
    alignSelf: "center",
  },
  container: {
    backgroundColor: "#22252a", //black
  },
  text: {
    alignSelf:'center',
    justifyContent:'center',
    color: '#22252a',
  }
})

