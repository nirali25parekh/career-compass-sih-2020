import React, { Component } from "react";
import { ImageBackground, View, StatusBar, Dimensions, Platform, StyleSheet, ScrollView, Image, FlatList } from "react-native";
import { Container, Icon, Button, H3, Text, Header, Linking, Right, Body, Title, Card, CardItem, Left } from "native-base";
import RedditItem from '../components/RedditItem'
import { ActivityIndicator } from "react-native-paper";

export default class DrawerScreen3 extends Component {

  state = {
    redditData: [],
    isReady: false,
  }

  componentDidMount = async () => {
    try {
      const personalityType = this.props.navigation.getParam('personalityType', 'NO-SHOW')
      var formData = new FormData()
      formData.append('file', personalityType)
      const results = await fetch('http://localhost:5000/reddit', {
        method: 'POST',
        body: formData,
      })
      const resultsJSON = await results.json()

      var redditData = []
      for (let i = 0; i< resultsJSON.length ;i++){
        redditData.push({
          subreddit: resultsJSON[i][0],
          domain: resultsJSON[i][4], 
          createdAt: resultsJSON[i][5],
          openLink: resultsJSON[i][1],
        })
      }
      this.setState({
        isReady: true,
        redditData: redditData
      })
    } catch (err) {
      console.log(err)
    }

  }
  render() {
    return (
      <Container style={{ backgroundColor: "#22252a" }} >
        <ScrollView>
          <Header style={{ backgroundColor: "#22252a" }}>
            <Body style={{ marginLeft: 40 }}>
              <Title style={{ color: "#9e9e9e", fontSize: 22 }}>Find Contacts</Title>
            </Body>
            <Right />
          </Header>
          {
            this.state.isReady
              ?
              <FlatList
                style={styles.flatlist}
                data={this.state.redditData}
                numColumns={2}
                renderItem={({ item }) => <RedditItem item={item} />}
                keyExtractor={item => item.id}
              />
              :
              <ActivityIndicator size="large" style={{ alignSelf: 'center' }} />
          }

{/* 

          <View style={styles.container}>
            <View style={{ flexDirection: 'column' }}>


              <CardView
                style={styles.cardViewStyle}
                cardElevation={2}
                cardMaxElevation={2}
                cornerRadius={5}>
                <Image style={{ marginTop: 20, width: 80, height: 80, borderRadius: 5 }}
                  source={{ uri: 'data:image/jpeg;base64,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' }} />
                <Text style={styles.mainName}>
                  Sebastian Wood
              </Text>
                <Text style={styles.normalText}>
                  @sebastian
              </Text>
                <View style={{ flexDirection: 'row', alignItems: 'stretch' }}>
                  <View style={{ margin: 20, flexDirection: 'row', alignItems: 'center' }}>
                    <Icon name="information-circle" />
                    <Text style={styles.normalText}> 150</Text>
                  </View>
                  <View style={{ margin: 20, flexDirection: 'row', alignItems: 'center' }}>
                    <Icon name="nuclear" />
                    <Text style={styles.normalText}> 280</Text>
                  </View>
                  <View style={{ margin: 20, flexDirection: 'row', alignItems: 'center' }}>
                    <Icon name="git-merge" />
                    <Text style={styles.normalText}> 190</Text>
                  </View>
                </View>

                <View>
                  <Text style={styles.normalText}> 620 contributions </Text>
                </View>
              </CardView>

            </View>
          </View> */}

        </ScrollView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',

  },
  flatlist: {
    alignSelf:'center',
    marginTop: 15,
    marginLeft: 10,
  },

})