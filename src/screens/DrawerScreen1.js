import React, { Component } from 'react';
// import { ImageBackground, View, StatusBar, Dimensions, Platform, StyleSheet } from "react-native";
import { Container, Header, Body, Title, Right } from 'native-base';
import { StyleSheet, TouchableOpacity, View, Text, Dimensions, Platform, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Quiz from "../Quiz";

// const deviceHeight = Dimensions.get("window").height;
// const launchscreenBg = require("../../assets/launchscreen-bg.png");

export default class DrawerScreen1 extends React.Component {

  componentDidMount() {
    console.disableYellowBox = true;
  }

  constructor(props) {
    super(props)
    this.state = {
      quizFinish: false,
      score: 0,
    }
  }
  _onPressBack() {
    const { goBack } = this.props.navigation
    goBack()
  }
  _quizFinish(score) {
    this.setState({ quizFinish: true, score: score })
  }

  _getResultButtonPressed = ()=>{
    this.props.navigation.navigate('DrawerScreen2')
  }
  _scoreMessage(score) {
    return (<View>
      <Text style={{fontSize:30, textAlign: 'center'}}>
        You have completed the quiz.
      </Text>
      <TouchableHighlight style={[styles.buttonContainer, styles.getResultButton]} onPress={this._getResultButtonPressed}>
        <Text style={styles.getResultButtonText}>Get your results</Text>
      </TouchableHighlight>
    </View>)
  }
  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: "#22252a" }}>

          <Body style={{ marginLeft: 40 }}>
            <Title>Quiz</Title>
          </Body>
          <Right />
        </Header>

        <View style={{ flex: 1 }}>

          {this.state.quizFinish
            ? //if quiz finished, render score card
            <View style={styles.container}>
              <View>
                {this._scoreMessage(this.state.score)}
              </View>
            </View>
            : //if quiz not finished, render quiz questions
            <Quiz quizFinish={(score) => this._quizFinish(score)} /> //one question of the quiz
          }
        </View>

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
    justifyContent: 'center',
    backgroundColor: "transparent",
  },
  text: {
    color: "#D8D8D8",
  },
  score: {
    color: "white",
    fontSize: 20,
    fontStyle: 'italic'
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  toolbar: {
    backgroundColor: '#81c04d',
    paddingTop: 30,
    paddingBottom: 10,
    flexDirection: 'row'
  },
  toolbarButton: {
    width: 55,
    color: '#fff',
    textAlign: 'center'
  },
  toolbarTitle: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    flex: 1
  },
  buttonContainer: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf : 'center',
    marginBottom: 10,
    marginTop: 12,
    width: 100,
    borderRadius: 10,
    backgroundColor: "#db6574",
  },
  getResultButton: {
    marginTop:60,
    // backgroundColor: "blue",
    // justifyContent: 'center',
    // alignItems: 'center',
    // opacity: 1,
  },
  getResultButtonText: {
    color: 'black',
    textAlign:'center'
  }
})

