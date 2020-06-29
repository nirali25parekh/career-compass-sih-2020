import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Button, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
// import AnimButton from './animButton'
import quizData from './questionsJson'
const { width, height } = Dimensions.get('window')

export default class Quiz extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scoreArray: Array(21),
      selectedOptionArray: [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    }
  }

  addScore = (index) => {
    const newScoreArray = [...this.state.scoreArray]
    newScoreArray[this.props.questionNo] = quizData.scoring[index]


    const newSelectedOptionsArray = [...this.state.selectedOptionArray]
    newSelectedOptionsArray[this.props.questionNo] = index // for  styling
    this.setState(
      {
        selectedOptionArray: newSelectedOptionsArray,
        scoreArray: newScoreArray,
      }
    )
  }

  render() {

    return (
  
        <View style={styles.container}>
          <Text style={styles.questionNo}> {this.props.questionNo+1} / 21</Text>
          <Text style={styles.question}> {quizData.questions[this.props.questionNo]}</Text>

          {/* options */}
          <View style={styles.optionContainer}>
            <Text style={this.state.selectedOptionArray[this.props.questionNo] === 0 ? styles.optionsSelected : styles.optionsUnselected} onPress={() => this.addScore(0)}> {quizData.options[0]}</Text>
            <Text  style={this.state.selectedOptionArray[this.props.questionNo] === 1 ? styles.optionsSelected : styles.optionsUnselected} onPress={() => this.addScore(1)}> {quizData.options[1]}</Text>
            <Text style={this.state.selectedOptionArray[this.props.questionNo] === 2 ? styles.optionsSelected : styles.optionsUnselected} onPress={() => this.addScore(2)}> {quizData.options[2]}</Text>
            <Text  style={this.state.selectedOptionArray[this.props.questionNo] === 3 ? styles.optionsSelected : styles.optionsUnselected} onPress={() => this.addScore(3)}> {quizData.options[3]}</Text>
            <Text style={this.state.selectedOptionArray[this.props.questionNo] === 4 ? styles.optionsSelected : styles.optionsUnselected} onPress={() => this.addScore(4)}> {quizData.options[4]}</Text>
          </View>
          {/* <Text style={{color:'white'}}> score: {this.state.scoreArray.toString()}</Text> */}
          {/* <Text style={{color:'white'}}> selected: {this.state.selectedOptionArray.toString()}</Text> */}

          {/*  button */}
          <View style={styles.buttonGroup}>
            {
              this.props.questionNo === 0
                ?
                <View style={[styles.button,{backgroundColor:"transparent"}]} />
                :
                <TouchableOpacity onPress={this.props.prevPressed} style={styles.button}>
                  <Text style={styles.buttonText}> Prev </Text>
                </TouchableOpacity>
            }
            { // 21 question are there
              this.props.questionNo === 20
                ?
                <TouchableOpacity onPress={()=> this.props.submitPressed(this.state.selectedOptionArray)} style={styles.button}>
                  <Text style={styles.buttonText}> Submit </Text>
                </TouchableOpacity>
                :
                <TouchableOpacity onPress={this.props.nextPressed} style={styles.button}>
                  <Text style={styles.buttonText}> Next </Text>
                </TouchableOpacity>
            }

          </View>
        </View>

    );
  }
}

const styles = StyleSheet.create({
  buttonGroup:{
    // backgroundColor:'#BDBDBD',
    flexDirection:'row',
    marginTop: 30,
    // alignItems:"baseline",
    // padding: 20,
  },
  button:{
    // flex: 1,
    // alignContent:'center',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#db6574',
    padding: 20,
    paddingVertical:10,
    borderRadius:6,
    marginHorizontal: 50,
    
  },
  buttonText:{
    fontSize:20,
  },
  container:{
    alignItems:'center',
    // marginHorizontal: 40,
    // borderRadius: 10,
    // borderRadius: 20,
  },
  optionContainer:{
    borderRadius: 10,
    width:310,
  },
  optionsUnselected:{
    fontSize: 20,
    textAlign: 'center',
    paddingVertical: 10,
    backgroundColor:'#CFD8DC',
    marginTop: 4,
    borderRadius:6,
  },
  optionsSelected:{
    fontSize: 20,
    textAlign: 'center',
    paddingVertical: 10,
    backgroundColor:'#db6574',
    marginTop: 4,
    borderRadius:6,
  },
  question:{
    lineHeight:25,
    fontSize: 17,
    textAlign: 'center',
    textAlignVertical:'center',
    paddingVertical: 10,
    paddingHorizontal: 14,
    height: 130,
    width:310,
    backgroundColor:'#CFD8DC',
    borderRadius: 10,
    marginBottom:10,
  },
  questionNo:{
    fontSize: 20,
    textAlign: 'center',
    paddingVertical: 10,
    backgroundColor:'#CFD8DC',
    borderRadius: 10,
    width:310,
    marginVertical:10,
  }
});