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

  componentDidMount() {
    console.warn(false)
  }
  render() {
    const data = [50, 10, 40, 95, -4, -24, 85]
      //[91, 35, 53, -53, 24, 50, -20, -80]

    const barData = [50, 10, 40, 95, -4, 0, 35, 53, -53, 24, 50, -20, -80, 100, 120]

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

      <Container style={{ backgroundColor: "#22252a"}}>
        <ScrollView>
          <Header style={{ backgroundColor: "#424242" }}>

            <Body style={{ marginLeft: 40 }}>
              <Title style={{color: "#9e9e9e" , fontSize: 22}}>Results</Title>
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
              <Text style={styles.title}>
                PROFILE COMPLETE
              </Text>
              <Text style={{fontSize : 24 , color : "#ab47bc"}}> 85% </Text>
              <Progress.Bar style={styles.progressBar} progress={0.85} width={200} color={"#ab47bc"} />
            </CardView>

            <CardView
              style={styles.cardViewStyle}
              cardElevation={2}
              cardMaxElevation={2}
              cornerRadius={5}>
              <Icon name="newspaper" style={styles.iconStyle} />
              <Text style={styles.title}>
                NO. OF TESTS TAKEN
              </Text>
              <Text style={{fontSize : 24 , color : "#ff4081"}}> 3 </Text>
              <Progress.Bar style={styles.progressBar} progress={0.75} width={200} color={"#ff4081"}/>
            </CardView>
          </View>

          <View style={{ flexDirection: 'row' }}>

            <CardView
              style={styles.cardViewStyle}
              cardElevation={2}
              cardMaxElevation={2}
              cornerRadius={5}>
              <Icon name="document" style={styles.iconStyle} />
              <Text style={styles.title}> 
                COMPLETION TIME
  </Text>
              <Text style={{ fontSize: 24, color: "#ef5350"}}> 12 </Text>
              <Progress.Bar style={styles.progressBar} progress={0.4} width={200} color={"#ef5350"} />
            </CardView>

            <CardView
              style={styles.cardViewStyle}
              cardElevation={2}
              cardMaxElevation={2}
              cornerRadius={5}>
              <Icon name="tv" style={styles.iconStyle} />
              <Text style={styles.title}>
                RESULT ACCURACY
  </Text>
              <Text style={{ fontSize : 24 , color : "#5e35b1"}}> 82% </Text>
              <Progress.Bar style={styles.progressBar} progress={0.8} width={200} color={"#5e35b1"} />
            </CardView>
          </View>



          <CardView
            style={styles.cardViewStyle2}
            cardElevation={2}
            cardMaxElevation={2}
            cornerRadius={5}>

            <Text style={styles.normalText}>
              PERSONALITY TYPE  :  INFJ
          </Text>
          </CardView>

          <CardView
            style={styles.cardViewStyle3}
            cardElevation={2}
            cardMaxElevation={2}
            cornerRadius={5}>

            <Text style={{ fontWeight: 'bold', fontSize: 17, fontFamily: "sans-serif-medium",
    color : "#9e9e9e", paddingBottom : 6 }}>
              Personality traits depicted by you
          </Text>
            <View style={{ flexDirection: 'row' ,}} >
              <Icon name='checkmark' style={{color:"#4caf50" , padding: 1}}/>
              <Text style={styles.normalText}> A highly motivated person who is dedicated to his goal</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Icon name='checkmark' style={{color:"#4caf50"}}/>
              <Text style = {styles.normalText}> You are very hard working</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Icon name='checkmark' style={{color:"#4caf50"}} />
              <Text style={styles.normalText}> You are a natural leader</Text>
            </View>

          </CardView>

          

          <CardView
            style={styles.cardViewStyle4}
            cardElevation={2}
            cardMaxElevation={2}
            cornerRadius={5}>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.progressCircle}>
                <Text style={{fontWeight: 'bold', fontSize: 17, fontFamily: "sans-serif-medium",
    color : "#9e9e9e",}}>
                  Computer Engineering
                </Text>
                <Text style={styles.normalText}>
                  All about software
                </Text>
              </View>
              <View style = {{paddingLeft: 60}}>
              <ProgressCircle
                percent={63}
                radius={40}
                borderWidth={8}
                color="#5e35b1"
                shadowColor="#7e57c2"
                bgColor="#424242"

              >
                <Text style={{ fontSize: 18 , color : "#9e9e9e"}}>{'63%'}</Text>
              </ProgressCircle></View>

            </View>


          </CardView>
          <CardView
            style={styles.cardViewStyle4}
            cardElevation={2}
            cardMaxElevation={2}
            cornerRadius={5}>
            <View style={{ flexDirection: 'row' }}>
              <View>
                <Text style={{fontWeight: 'bold', fontSize: 17, fontFamily: "sans-serif-medium",
    color : "#9e9e9e",}}>
                  Computer Engineering
                </Text>
                <Text style={styles.normalText}>
                  An upcoming field
                </Text>
                {/* <View style={{ flexDirection: 'row' }}>
                <View style={{ flexDirection: 'column' }}> */}
                <Text style={styles.normalText}>
                  $74000
                  </Text>
                <Text style={styles.normalText}>
                  Avg. Salary
                  </Text>
              </View>
              <View style={styles.chartView}>
              <LineChart
                style={styles.lineChart}
                data={barData}
                svg={{ stroke: 'rgb(134, 65, 244)' }}
                contentInset={{ top: 20, bottom: 20 }}
              >
                <Grid />
              </LineChart>
              </View>
            </View>
            {/* </View> */}
          </CardView>

          


          <CardView
            style={styles.cardViewStyle4}
            cardElevation={2}
            cardMaxElevation={2}
            cornerRadius={5}>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.progressCircle}>
                <Text style={{fontWeight: 'bold', fontSize: 17, fontFamily: "sans-serif-medium",
    color : "#9e9e9e",}}>
                  Marketing
                </Text>
                <Text style={styles.normalText}>
                  Business of promoting
                  </Text>
                <Text style={styles.normalText}>
                  products
                </Text>
              </View>
              <View style = {{paddingLeft:60}}>
              <ProgressCircle
                percent={18}
                radius={40}
                borderWidth={8}
                color="#ef5350"
                shadowColor="#ef9a9a"
                bgColor="#424242"

              >
                <Text style={{ fontSize: 18, color : "#9e9e9e" }}>{'18%'}</Text>
              </ProgressCircle></View>

            </View>
          </CardView>

          <CardView
            style={styles.cardViewStyle4}
            cardElevation={2}
            cardMaxElevation={2}
            cornerRadius={5}>
            <View style={{ flexDirection: 'row' }}>
              <View>
                <Text style={{fontWeight: 'bold', fontSize: 17, fontFamily: "sans-serif-medium",
    color : "#9e9e9e",}}>
                  Marketing
                </Text>
                <Text style={styles.normalText}>
                  An upcoming field
                </Text>
                {/* <View style={{ flexDirection: 'row' }}>
                <View style={{ flexDirection: 'column' }}> */}
                <Text style={styles.normalText}>
                  $34,000
                  </Text>
                <Text style={styles.normalText}>
                  Avg. Salary
                  </Text>
              </View>
              <View style = {{paddingLeft: 140}}>
              <PieChart

                style={styles.pieChart}
                data={pieData}
              /></View>
            </View>
            {/* </View> */}
          </CardView>


          <CardView
            style={styles.cardViewStyle4}
            cardElevation={2}
            cardMaxElevation={2}
            cornerRadius={5}>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.progressCircle}>
                <Text style={{fontWeight: 'bold', fontSize: 17, fontFamily: "sans-serif-medium",
    color : "#9e9e9e",}}>
                  Law
                </Text>
                <Text style={styles.normalText}>
                  Go for Corporate Law
                </Text>
              </View>
              <View style={styles.chartView}>
              <ProgressCircle
                percent={4}
                radius={40}
                borderWidth={8}
                color="#ab47bc"
                shadowColor="#ce93d8"
                bgColor="#424242"

              >
                <Text style={{ fontSize: 18 , color : "#9e9e9e"}}>{'4%'}</Text>
              </ProgressCircle></View>

            </View>
          </CardView>

          



         

          <CardView
            style={styles.cardViewStyle4}
            cardElevation={2}
            cardMaxElevation={2}
            cornerRadius={5}>
            <View style={{ flexDirection: 'row' }}>
              <View>
                <Text style={{fontWeight: 'bold', fontSize: 17, fontFamily: "sans-serif-medium",
    color : "#9e9e9e",}}>
                  Law
                </Text>
                <Text style={styles.normalText}>
                  An established field
                </Text>

                {/* <View style={{ flexDirection: 'column' }}> */}
                <Text style={styles.normalText}>
                  $15,600
                  </Text>
                <Text style={styles.normalText}>
                  Avg. Salary
                  </Text>
              </View>
              <View style={{paddingLeft:100}}>
              <LineChart
                style={styles.lineChart}
                data={data}
                svg={{ stroke: 'rgb(134, 65, 244)' }}
                contentInset={{ top: 20, bottom: 20 }}
                chartConfig={{ 
                  backgroundColor: "#ab47bc",
                }}
              >
                <Grid />
              </LineChart>
              </View>
            </View>
            {/* </View> */}
          </CardView>

        </ScrollView>
      </Container >

    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "sans-serif-medium",
    color : "#9e9e9e",
    

  },

  chartView: {
    paddingLeft: 80,
  },

  normalText: {
    fontFamily: "sans-serif-medium",
    color : "#9e9e9e",
    padding: 5,
  },

  iconStyle: {
    color: '#9e9e9e',
    marginLeft: 15,
  },
  cardViewStyle: {
    width: 185,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: 180,
    margin: 10,
    marginTop: 20,
    backgroundColor: "#424242",
    
    //"#616161"
  },
  progressBar: {
    width: 160,
    
  },
  numberProgress: {
    fontSize: 24,
  },
  cardViewStyle2: {
    width: 393,
    alignItems: 'center',
    margin: 10,
    padding: 10,
    backgroundColor: "#424242",
  },
  cardViewStyle3: {
    width: 393,
    padding: 10,
    justifyContent: 'space-evenly',
    // alignItems: 'center',
    margin: 10,
    //backgroundColor: "#616161",
    backgroundColor: "#424242",
  },
  cardViewStyle4: {
    width: 393,
    padding: 10,
    justifyContent: 'space-evenly',
    // alignItems: 'center',
    margin: 10,
    backgroundColor: "#424242",
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

