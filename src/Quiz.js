import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Button, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AnimButton from './animButton'
import { jsonData } from './questionsJson'
const { width, height } = Dimensions.get('window')
let arrnew = []



export default class Quiz extends Component {
  constructor(props) {
    super(props)
    this.qno = 0
    this.score = 0

    const jdata = jsonData.quiz
    arrnew = Object.keys(jdata).map(function (k) { return jdata[k] });

    /*arrnew is the array of question objects.
       ques field is initialised to arrnew[0].question 
       options field is initialed to arrnew[0].options
       correctoption field is initialed to arrnew[0].correctoption*/
    this.state = {
      question: arrnew[this.qno].question,
      options: arrnew[this.qno].options,
      correctoption: arrnew[this.qno].correctoption,
      countCheck: 0
    }

  }

  // componentDidMount() {
  //   console.warn(arrnew)
  // }

  prev() {
    if (this.qno > 0) {
      this.qno--
      this.setState({ question: arrnew[this.qno].question, options: arrnew[this.qno].options, correctoption: arrnew[this.qno].correctoption })
    }
  }
  next() {
    if (this.qno < arrnew.length - 1) {
      this.qno++
      // status = false
      this.setState({ countCheck: 0, question: arrnew[this.qno].question, options: arrnew[this.qno].options, correctoption: arrnew[this.qno].correctoption })
    } else {
      this.props.quizFinish(this.score * 100 / 5)
    }
  }
  _answer(status, ans) {
    if (status == true) {
      const count = this.state.countCheck + 1
      this.setState({ countCheck: count })
      if (ans == this.state.correctoption) {
        this.score += 1
      }
    }
    console.warn("countcheck ", this.state.countCheck)
  }

  render() {

    // if(this.state.countCheck == 1){
    //   this.next()
    // }
    let _this = this
    const currentOptions = this.state.options //object of options

    const options = Object.keys(currentOptions).map(function (k) {
      return (<View key={k} style={styles.optionButton}>
        <AnimButton
          countCheck={_this.state.countCheck}
          onColor={"blue"}
          effect={"tada"}
          _onPress={(status) => _this._answer(status, k)}
          text={currentOptions[k]} />
      </View>)
    });

    return (
      <ScrollView style={{ backgroundColor: '#212121', paddingTop: 10 }}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ marginTop: 20, height: 540, width: 20, backgroundColor: '#db6574', borderRadius: 20, }} />

          <View style={styles.container}>

            {/* question view */}
            <View style={styles.oval} >
              <Text style={styles.questionText}>
                {this.state.question}
              </Text>
            </View>

            {/* options view */}
            <View>
              {options}
            </View>

            {/* prev & next button */}
            <View style={{ flexDirection: "row", margin: 15 }}>

              <TouchableOpacity onPress={() => this.next()} >
                <View style={styles.arrowButton}>
                  <Icon name="md-arrow-round-back" size={30} color="white" />
                </View>
              </TouchableOpacity >
              <View style={{ marginHorizontal: 65 }} />

              <TouchableOpacity onPress={() => this.next()} >
                <View style={styles.arrowButton}>
                  <Icon name="md-arrow-round-forward" size={30} color="white" />
                </View>
              </TouchableOpacity >

            </View>

          </View>
          <View style={{marginTop:20, height:540, width:20, backgroundColor:'#db6574',  borderRadius: 20,}}/>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  oval: { //question
    width: width * 80 / 100,
    borderRadius: 20,
    minHeight: 150,
    fontWeight: 'bold',
    // backgroundColor: 'blue'
  },
  container: { //ques and options container
    flex: 1,
    marginTop: 20,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#22252a',
    alignItems: 'center',
    marginHorizontal: 16,
    borderRadius: 15,
  },
  questionText: { //question text
    fontSize: 20,
    // paddingHorizontal:1,
    margin: 15,
    color: "white"
  },
  optionButton: { //single single option
    // backgroundColor: 'blue',
    paddingHorizontal: 10,
    width: Dimensions.get('screen').width * 0.8
  },
  arrowButton: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 20,
    paddingLeft: 20,
    borderRadius: 10,
    marginTop: 20,
    backgroundColor: "#db6574"
  }
});