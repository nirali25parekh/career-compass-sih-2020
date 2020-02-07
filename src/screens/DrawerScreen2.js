import React, { Component } from "react";
import { ImageBackground, View, StatusBar, Dimensions, Platform, StyleSheet, ScrollView } from "react-native";
import { Container, Icon, Button, H3, Text, Header, Right, Body, Title, Card, CardItem, Left } from "native-base";
import ProgressCircle from 'react-native-progress-circle'
import * as Progress from 'react-native-progress';
import CardView from 'react-native-cardview'
import { BarChart, Grid, PieChart, LineChart } from 'react-native-svg-charts'

const deviceHeight = Dimensions.get("window").height;
const launchscreenBg = require("../../assets/launchscreen-bg.png");

export default class DrawerScreen2 extends Component {
  render() {
    const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]

    const barData = [50, 10, 40, 95, -4, -24, null, 85, undefined, 0, 35, 53, -53, 24, 50, -20, -80]

    const randomColor = () => ('#' + (Math.random() * 0xFFFFFF << 0).toString(16) + '000000').slice(0, 7)

    const pieData = data
      .filter(value => value > 0)
      .map((value, index) => ({
        value,
        svg: {
          fill: randomColor(),
          onPress: () => console.log('press', index),
        },
        key: `pie-${index}`,
      }))

    return (

      <Container style={styles.container}>
        <ScrollView>
          <Header style={{ backgroundColor: "#22252a" }}>

            <Body style={{ marginLeft: 40 }}>
              <Title>Results</Title>
            </Body>
            <Right />
          </Header>



          <View style={{ flexDirection: 'row' }}>

            <CardView
              style={styles.cardViewStyle}
              cardElevation={2}
              cardMaxElevation={2}
              cornerRadius={5}>
              <Icon name="person" style={styles.iconStyle} />
              <Text>
                PROFILE COMPLETE
              </Text>
              <Text style={styles.numberProgress}> 85% </Text>
              <Progress.Bar style={styles.progressBar} progress={0.3} width={200} />
            </CardView>

            <CardView
              style={styles.cardViewStyle}
              cardElevation={2}
              cardMaxElevation={2}
              cornerRadius={5}>
              <Icon name="newspaper" style={styles.iconStyle} />
              <Text>
                NO. OF TESTS TAKEN
              </Text>
              <Text style={styles.numberProgress}> 3 </Text>
              <Progress.Bar style={styles.progressBar} progress={0.75} width={200} />
            </CardView>
          </View>

          <View style={{ flexDirection: 'row' }}>

            <CardView
              style={styles.cardViewStyle}
              cardElevation={2}
              cardMaxElevation={2}
              cornerRadius={5}>
              <Icon name="document" style={styles.iconStyle} />
              <Text>
                COMPLETION TIME
  </Text>
              <Text style={styles.numberProgress}> 12 </Text>
              <Progress.Bar style={styles.progressBar} progress={0.4} width={200} />
            </CardView>

            <CardView
              style={styles.cardViewStyle}
              cardElevation={2}
              cardMaxElevation={2}
              cornerRadius={5}>
              <Icon name="tv" style={styles.iconStyle} />
              <Text>
                RESULT ACCURACY
  </Text>
              <Text style={styles.numberProgress}> 82% </Text>
              <Progress.Bar style={styles.progressBar} progress={0.8} width={200} />
            </CardView>
          </View>



          <CardView
            style={styles.cardViewStyle2}
            cardElevation={2}
            cardMaxElevation={2}
            cornerRadius={5}>

            <Text>
              PERSONALITY TYPE: IDGAF
          </Text>
          </CardView>

          <CardView
            style={styles.cardViewStyle3}
            cardElevation={2}
            cardMaxElevation={2}
            cornerRadius={5}>

            <Text style={{ fontWeight: 'bold', fontSize: 14, }}>
              Personality traits depiced by you
          </Text>
            <View style={{ flexDirection: 'row' }}>
              <Icon name='checkmark' />
              <Text> A highly motivated person who is dedicated to his goal</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Icon name='checkmark' />
              <Text> You are very hard working</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Icon name='checkmark' />
              <Text> You are a natural leader</Text>
            </View>

          </CardView>

          <CardView
            style={styles.cardViewStyle4}
            cardElevation={2}
            cardMaxElevation={2}
            cornerRadius={5}>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.progressCircle}>
                <Text>
                  Computer Engineering
                </Text>
                <Text>
                  All about software
                </Text>
              </View>
              <ProgressCircle
                percent={63}
                radius={40}
                borderWidth={8}
                color="#3399FF"
                shadowColor="#999"
                bgColor="#fff"

              >
                <Text style={{ fontSize: 18 }}>{'63%'}</Text>
              </ProgressCircle>

            </View>


          </CardView>


          <CardView
            style={styles.cardViewStyle4}
            cardElevation={2}
            cardMaxElevation={2}
            cornerRadius={5}>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.progressCircle}>
                <Text>
                  Marketing
                </Text>
                <Text>
                  Business of promoting
                  </Text>
                <Text>
                  products
                </Text>
              </View>
              <ProgressCircle
                percent={18}
                radius={40}
                borderWidth={8}
                color="#3399FF"
                shadowColor="#999"
                bgColor="#fff"

              >
                <Text style={{ fontSize: 18 }}>{'18%'}</Text>
              </ProgressCircle>

            </View>
          </CardView>


          <CardView
            style={styles.cardViewStyle4}
            cardElevation={2}
            cardMaxElevation={2}
            cornerRadius={5}>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.progressCircle}>
                <Text>
                  Lawyer
                </Text>
                <Text>
                  Go for Corporate Law
                </Text>
              </View>
              <ProgressCircle
                percent={4}
                radius={40}
                borderWidth={8}
                color="#3399FF"
                shadowColor="#999"
                bgColor="#fff"

              >
                <Text style={{ fontSize: 18 }}>{'4%'}</Text>
              </ProgressCircle>

            </View>
          </CardView>

          <CardView
            style={styles.cardViewStyle4}
            cardElevation={2}
            cardMaxElevation={2}
            cornerRadius={5}>
            <View style={{ flexDirection: 'row' }}>
              <View>
                <Text>
                  Computer Engineering
                </Text>
                <Text>
                  An upcoming field
                </Text>
                {/* <View style={{ flexDirection: 'row' }}>
                <View style={{ flexDirection: 'column' }}> */}
                <Text>
                  $74000
                  </Text>
                <Text>
                  Avg. Salary
                  </Text>
              </View>
              <LineChart
                style={styles.lineChart}
                data={data}
                svg={{ stroke: 'rgb(134, 65, 244)' }}
                contentInset={{ top: 20, bottom: 20 }}
              >
                <Grid />
              </LineChart>
            </View>
            {/* </View> */}
          </CardView>



          <CardView
            style={styles.cardViewStyle4}
            cardElevation={2}
            cardMaxElevation={2}
            cornerRadius={5}>
            <View style={{ flexDirection: 'row' }}>
              <View>
                <Text>
                  Marketing
                </Text>
                <Text>
                  An upcoming field
                </Text>
                {/* <View style={{ flexDirection: 'row' }}>
                <View style={{ flexDirection: 'column' }}> */}
                <Text>
                  $34,000
                  </Text>
                <Text>
                  Avg. Salary
                  </Text>
              </View>

              <PieChart

                style={styles.pieChart}
                data={pieData}
              />
            </View>
            {/* </View> */}
          </CardView>

          <CardView
            style={styles.cardViewStyle4}
            cardElevation={2}
            cardMaxElevation={2}
            cornerRadius={5}>
            <View style={{ flexDirection: 'row' }}>
              <View>
                <Text>
                  Lawyer
                </Text>
                <Text>
                  An established field
                </Text>

                {/* <View style={{ flexDirection: 'column' }}> */}
                <Text>
                  $15,600
                  </Text>
                <Text>
                  Avg. Salary
                  </Text>
              </View>

              <LineChart
                style={styles.lineChart}
                data={data}
                svg={{ stroke: 'rgb(134, 65, 244)' }}
                contentInset={{ top: 20, bottom: 20 }}
              >
                <Grid />
              </LineChart>
            </View>
            {/* </View> */}
          </CardView>

        </ScrollView>
      </Container >

    );
  }
}

const styles = StyleSheet.create({
  iconStyle: {
    color: '#22252a',
    marginLeft: 15,
  },
  cardViewStyle: {
    width: 180,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: 180,
    margin: 10,
  },
  progressBar: {
    width: 160,
  },
  numberProgress: {
    fontSize: 24,
  },
  cardViewStyle2: {
    width: 400,
    alignItems: 'center',
    margin: 10,
    padding: 10,
  },
  cardViewStyle3: {
    width: 400,
    padding: 10,
    justifyContent: 'space-evenly',
    // alignItems: 'center',
    margin: 10,
  },
  cardViewStyle4: {
    width: 400,
    padding: 10,
    justifyContent: 'space-evenly',
    // alignItems: 'center',
    margin: 10,
  },
  progressCircle: {
    marginHorizontal: 20,
  },
  pieChart: {
    height: 80,
    width: 80,
  },
  lineChart: {
    height: 100,
    width: 100
  }

})