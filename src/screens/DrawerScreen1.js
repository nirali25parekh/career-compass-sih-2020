import React, { Component } from 'react';
// import { ImageBackground, View, StatusBar, Dimensions, Platform, StyleSheet } from "react-native";
import { Container, Header, Body, Title, Right } from 'native-base';
import { StyleSheet, TouchableOpacity, View, Text, Dimensions, Platform, TouchableHighlight, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Quiz from "../Quiz";
import quizData from '../questionsJson'

export default class DrawerScreen1 extends React.Component {

  _onPressBack() {
    const { goBack } = this.props.navigation
    goBack()
  }

  prevPressed = () => {
    this.setState((prevState) => {
      return {
        questionNo: prevState.questionNo - 1
      }
    })
  }

  nextPressed = () => {
    this.setState((prevState) => {
      return {
        questionNo: prevState.questionNo + 1
      }
    })
  }

  constructor(props) {
    super(props)
    this.state = {
      quizFinish: false,
      questionNo: 0,
      result: null,
    }
  }


  submitPressed = (selectedOptionsArray) => {
    var EI = 0
    var SN = 0
    var TF = 0
    var JP = 0
    for (let i = 0; i < 21; i++) {
      if (quizData.category[i] === "EI") {
        EI = EI + quizData.scoring[selectedOptionsArray[i]]
      }
      if (quizData.category[i] === "SN") {
        SN = SN + quizData.scoring[selectedOptionsArray[i]]
      }
      if (quizData.category[i] === "TN") {
        TF = TF + quizData.scoring[selectedOptionsArray[i]]
      }
      if (quizData.category[i] === "JP") {
        JP = JP + quizData.scoring[selectedOptionsArray[i]]
      }
    }
    var result = ""
    if (EI < 0)
      result += "I"
    else
      result += "E"

    if (SN < 0)
      result += "N"
    else
      result += "S"


    if (TF < 0)
      result += "F"
    else
      result += "T"

    if (JP < 0)
      result += "P"
    else
      result += "J"
    console.log('RESULT', result)
    this.setState({
      result: result,
      quizFinish: true,
    })
  }

  getResultButtonPressed = async () => {
    try {
      var formData = new FormData()
      formData.append('file', this.state.result)
      const domains = await fetch('http://localhost:5000/domain', {
        method: 'POST',
        body: formData,
      })
      const domainsJSON = await domains.json()
      console.log('domainsjson', domainsJSON)

      const reasons = await fetch('http://localhost:5000/reason', {
        method: 'POST',
        body: formData,
      })
      const reasonsJSON = await reasons.json()
      console.log('reasonsjson', reasonsJSON)

      this.props.navigation.navigate('DrawerScreen2', { domains: domainsJSON, reasons: reasonsJSON, personalityType: this.state.result,})
    } catch (err){
      console.log(err)
    }
    
    
  }

  render() {
    return (
      <Container >
        <Header style={{ backgroundColor: "#22252a" }}>
          <Body style={{ marginLeft: 40 }}>
            <Title>Quiz</Title>
          </Body>
          <Right />
        </Header>


        <View style={styles.container}>

          {
            this.state.quizFinish
              ?
              //if quiz finished, render score card
              <View>
                <Text style={{ fontSize: 30, textAlign: 'center', color: 'white', }}> You have completed the quiz.</Text>
                <TouchableHighlight style={[styles.buttonContainer, styles.getResultButton]} onPress={this.getResultButtonPressed}>
                  <Text style={styles.getResultButtonText}>Get your results</Text>
                </TouchableHighlight>
              </View>


              : //if quiz not finished, render quiz questions
              <Quiz
                prevPressed={this.prevPressed}
                nextPressed={this.nextPressed}
                submitPressed={this.submitPressed}
                questionNo={this.state.questionNo} />
          }

        </View>

      </Container >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#22252a",
    alignItems: "center",
    padding: 20,
  },
  text: {
    color: "#D8D8D8",
  },
  buttonContainer: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 10,
    marginTop: 12,
    width: 100,
    borderRadius: 10,
    backgroundColor: "#db6574",
  },
  getResultButton: {
    marginTop: 60,
    // backgroundColor: "blue",
    // justifyContent: 'center',
    // alignItems: 'center',
    // opacity: 1,
  },
  getResultButtonText: {
    color: 'black',
    textAlign: 'center'
  }
})

