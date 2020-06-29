import React, { Component } from "react";
import { ImageBackground, View, StatusBar, Dimensions, Platform, StyleSheet, ScrollView, TouchableHighlight } from "react-native";
import { Container, Icon, Button, H3, Text, Header, Right, Body, Title, Card, CardItem, Left } from "native-base";
import ProgressCircle from 'react-native-progress-circle'
import * as Progress from 'react-native-progress';
import CardView from 'react-native-cardview'
import { FlatList } from "react-native-gesture-handler";


class DomainItem extends Component {
  render() {
    return (
      <CardView
        style={styles.cardViewStyleDomain}
        cardElevation={2}
        cardMaxElevation={2}
        cornerRadius={5}>
        <View style={{ flexDirection: 'row' }}>

          <View style={styles.domainTextView}>
            <Text style={styles.normalText}>{this.props.item.domain}</Text>
          </View>

          <View style={styles.progressCircle}>
            <ProgressCircle
              percent={this.props.item.percent}
              radius={40}
              borderWidth={8}
              color="#db6574"
              shadowColor="#7e57c2"
              bgColor="#424242"
            >
              <Text style={{ fontSize: 18, color: "#9e9e9e" }}>{this.props.item.percent}%</Text>
            </ProgressCircle>
          </View>

        </View>
      </CardView>

    )
  }
}

export default class DrawerScreen2 extends Component {

  state = {
    testTaken: false,
    domainsObjects: [],
    personalityType: "",
  }
  componentDidMount() {
    const domains = this.props.navigation.getParam('domains', 'NO-SHOW')
    const reasons = this.props.navigation.getParam('reasons', 'NO-SHOW')
    const personalityType = this.props.navigation.getParam('personalityType', 'NO-SHOW')

    console.log(domains, reasons, personalityType)

    if (domains === 'NO-SHOW' || reasons === 'NO-SHOW' || personalityType === 'NO-SHOW') {
      this.setState({
        testTaken: false,
      })
    } else {
      var domainsObjects = []
      for (let i = 0; i < domains.length; i++) {
        const domain = domains[i].charAt(0).toUpperCase() + domains[i].slice(1)
        domainsObjects.push({

          domain: domain,
          percent: Math.floor(Math.random() * 100),
        })
      }

      // console.log('here', domainsObjects)
      this.setState({
        testTaken: true,
        domainsObjects: domainsObjects,
        personalityType: personalityType,
      })
    }
  }

  render() {
    return (

      <Container style={{ backgroundColor: "#22252a" }}>

        <Header style={{ backgroundColor: "#0f0f0a" }}>
          <Body style={{ marginLeft: 40 }}>
            <Title style={{ color: "#9e9e9e", fontSize: 22 }}>Results</Title>
          </Body>
          <Right />
        </Header>

        {
          this.state.testTaken ?
            <ScrollView>

              {/*  completion time, result accuracy */}
              <View style={{ flexDirection: 'row' }}>
                <CardView
                  style={styles.cardViewStyleSquare}
                  cardElevation={2}
                  cardMaxElevation={2}
                  cornerRadius={5}>
                  <Icon name="clock" style={styles.iconStyle} />
                  <Text style={styles.titleSquareCards}>
                    COMPLETION TIME</Text>
                  <Text style={{ fontSize: 24, color: "#ef5350" }}> 12 </Text>
                  <Progress.Bar style={styles.progressBar} progress={0.4} width={200} color={"#ef5350"} />
                </CardView>

                <CardView
                  style={styles.cardViewStyleSquare}
                  cardElevation={2}
                  cardMaxElevation={2}
                  cornerRadius={5}>
                  <Icon name="document" style={styles.iconStyle} />
                  <Text style={styles.titleSquareCards}>RESULT ACCURACY</Text>
                  <Text style={{ fontSize: 24, color: "#5e35b1" }}> 82% </Text>
                  <Progress.Bar style={styles.progressBar} progress={0.8} width={200} color={"#5e35b1"} />
                </CardView>
              </View>


              {/* personality type */}
              <CardView
                style={styles.cardViewStylePersonalityType}
                cardElevation={2}
                cardMaxElevation={2}
                cornerRadius={5}>
                <Text style={styles.normalText}>
                  PERSONALITY TYPE  :  {this.props.navigation.getParam('personalityType', 'NO-SHOW')}</Text>
              </CardView>

              {/* traits */}
              <CardView
                style={styles.cardViewStyleTraits}
                cardElevation={2}
                cardMaxElevation={2}
                cornerRadius={5}>
                <Text style={{
                  fontWeight: 'bold', fontSize: 17, fontFamily: "sans-serif-medium",
                  color: "#9e9e9e", paddingBottom: 6
                }}>
                  Personality traits depicted by you
            </Text>
                <View style={{ flexDirection: 'row' }}>
                  <Icon name='checkmark' style={{ color: "#4caf50" }} />
                  <Text style={styles.normalText}> {this.props.navigation.getParam('reasons', 'NO-SHOW')}</Text>
                </View>
              </CardView>


              {/* Fields recommended for them */}
              <Text style={{ color: 'white', fontSize: 18, textAlign: 'center' }}>  Recommended Career Options for you </Text>
              <FlatList
                style={styles.flatlist}
                data={this.state.domainsObjects}
                renderItem={({ item }) => (<DomainItem item={item} />)}
                keyExtractor={item => item.domain}
              />

              <TouchableHighlight style={styles.goToTestButton} onPress={() => this.props.navigation.navigate('DrawerScreen3', { personalityType: this.state.personalityType})}>
                <Text style={styles.goToTestText}>View Contacts</Text>
              </TouchableHighlight>

            </ScrollView>

            :
            <View>
              <Text style={styles.takeTestText}> Please Take Test First to view Results </Text>
              <TouchableHighlight style={styles.goToTestButton} onPress={() => this.props.navigation.navigate('DrawerScreen1')}>
                <Text style={styles.goToTestText}>Go to Test</Text>
              </TouchableHighlight>
            </View>



        }

      </Container >

    );
  }
}

const styles = StyleSheet.create({

  domainText: {
    color: 'white',
    textAlignVertical: 'center',

  },
  domainTextView: {
    flex: 0.7,
    justifyContent: 'center',
  },
  cardViewStyleDomain: {
    width: 393,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    // alignItems: 'center',
    margin: 10,
    backgroundColor: "#424242",
  },
  progressCircle: {
    marginHorizontal: 20,
    flex: 0.3,
  },
  //  till here

  titleSquareCards: {
    fontFamily: "sans-serif-medium",
    color: "#9e9e9e",
  },
  normalText: {
    fontFamily: "sans-serif-medium",
    color: "#9e9e9e",
    padding: 5,
  },
  iconStyle: {
    color: '#9e9e9e',
    marginLeft: 15,
  },
  cardViewStyleSquare: {
    width: 185,
    backgroundColor: "#424242",
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: 180,
    margin: 10,
    marginTop: 20,
  },
  cardViewStylePersonalityType: {
    width: 393,
    alignItems: 'center',
    margin: 10,
    padding: 10,
    backgroundColor: "#424242",
  },
  cardViewStyleTraits: {
    width: 393,
    padding: 10,
    justifyContent: 'space-evenly',
    backgroundColor: "#424242",
    margin: 10,
  },
  progressBar: {
    width: 160,
  },


  // if not results
  goToTestText: {
    color: 'black',
    textAlign: 'center'
  },
  goToTestButton: {
    backgroundColor: '#db6574',
    padding: 20,
    marginHorizontal: 30,
    borderRadius: 20,
  },
  takeTestText: {
    color: 'white',
    margin: 20,
    fontSize: 20,
    textAlign: 'center',

  }

})

