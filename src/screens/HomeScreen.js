import React, { Component } from "react";
import { ImageBackground, View, StatusBar, Dimensions, Platform, StyleSheet } from "react-native";
import { Container, Button, H3, Text, Header, Left, Right, Body, Title, } from "native-base";

const deviceHeight = Dimensions.get("window").height;
const launchscreenBg = require("../../assets/db6574-01.png");
// const launchscreenLogo = require("../../../assets/logo-kitchen-sink.png");

export default class HomeScreen extends Component {
  componentDidMount() {
    console.disableYellowBox = true;
  }
  render() {
    return (
      <Container style={styles.container}>
        <Header style={{ backgroundColor: "#22252a" }}>

          <Body style={{ marginLeft: 40 }}>
            <Title>Home</Title>
          </Body>
          <Right />
        </Header>

        <H3 style={styles.text}> Myer Briggs Test </H3>
        <H3 style={styles.paragraphBlock}>
          <Text style={styles.paragraph}>
            
          This free personality test is based on Carl Jung’s and Isabel Briggs Myers’ personality type theory.
            {"\n"}
            {"\n"}
            </Text>
          <Text style={styles.paragraph}>
    Upon completion of the questionnaire, you will: {"\n"}
            Obtain your 4-letter type formula according to Carl Jung’s and Isabel Briggs Myers’ typology,
             along with the strengths of preferences and the description of your personality type.
          </Text>

          <Text style={styles.paragraph}>
          {"\n"}
          {"\n"}
         Discover careers and occupations most suitable for your personality type along with examples of educational institutions
              where you can get a relevant degree or training. {"\n"}Understand communication and learning styles of your type.
          </Text>

          <Text style={[styles.paragraph, {fontWeight:'bold'}]}>
          {"\n"}
          {"\n"}
          See which famous personalities share your type!
          </Text>

        </H3>
        <Button
          style={styles.button}
          onPress={() => this.props.navigation.openDrawer()}
        >
          <Text>Lets Go!</Text>
        </Button>

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
    backgroundColor: "#db6574", //red
    alignSelf: "center",
    margin:20,
    borderRadius:10,
  },
  container: {
    backgroundColor: "#22252a", //black
  },
  text: {
    fontFamily: 'sans-serif-light',
    margin: 16,
    fontSize: 22,
    includeFontPadding: true,
    marginVertical: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight:'bold',
  },
  paragraph: {
    fontFamily: 'sans-serif-light',
    margin: 16,
    fontSize: 16,
    // backgroundColor:'rgba(219, 101, 116, 0.7)',
    borderRadius:10,
    padding:20,
    includeFontPadding: true,
    marginVertical: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    color: 'white',
  },
  paragraphBlock: {
    fontFamily: 'sans-serif-light',
    margin: 16,
    fontSize: 16,
    backgroundColor:'rgba(219, 101, 116, 0.9)',
    borderRadius:10,
    padding:20,
    includeFontPadding: true,
    marginVertical: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    // color: 'white',
  }
})

