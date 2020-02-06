import React, { Component } from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default class AnimButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false
    }
    console.warn("status is ", this.state.status)
  }

  _onPress() {
    this.props._onPress(!this.state.status)
    console.warn("status is ", this.state.status)
    this.setState({ status: !this.state.status }) // reverses on touching
    switch (this.props.effect) {
      case 'bounce':
        this.refs.view.bounce(800)
        break;
      case 'flash':
        this.refs.view.flash(800)
        break;
      case 'jello':
        this.refs.view.jello(800)
        break;
      case 'pulse':
        this.refs.view.pulse(800)
        break;
      case 'rotate':
        this.refs.view.rotate(800)
        break;
      case 'rubberBand':
        this.refs.view.rubberBand(50)
        break;
      case 'shake':
        this.refs.view.shake(800)
        break;
      case 'swing':
        this.refs.view.swing(800)
        break;
      case 'tada':
        this.refs.view.tada(20)
        break;
      case 'wobble':
        this.refs.view.wobble(100)
        break;
    }

  }
  render() {
    return (
      <TouchableWithoutFeedback onPress={() => this._onPress()}>
        <Animatable.View ref="view"
          style={{
            // marginHorizontal: 20,
            marginVertical: 8,
            paddingTop: 10,
            paddingBottom: 10,
            // paddingRight: 20,
            // paddingLeft: 20, 
            backgroundColor: 'rgba(0,0,0,1)',
            borderRadius: 10,
            backgroundColor: this.state.status ? "#db6574" : "#22252a" //button when selected : when not
          }}>

          {/* option's text --> status, if true(ie selected)->black otherwise white */}
          <Text style={{ color: this.state.status ? "black" : "white", fontWeight: "bold" }}>{this.props.text}</Text>

        </Animatable.View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  animatedButtonStyle: {

  }

})