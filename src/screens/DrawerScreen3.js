import React, { Component } from "react";
import { ImageBackground, View, StatusBar, Dimensions, Platform, StyleSheet, ScrollView, Image } from "react-native";
import { Container, Icon, Button, H3, Text, Header, Right, Body, Title, Card, CardItem, Left } from "native-base";
import ProgressCircle from 'react-native-progress-circle'
import * as Progress from 'react-native-progress';
import CardView from 'react-native-cardview'
import { BarChart, Grid, PieChart, LineChart } from 'react-native-svg-charts'

const deviceHeight = Dimensions.get("window").height;
const launchscreenBg = require("../../assets/launchscreen-bg.png");

export default class DrawerScreen3 extends Component {
  componentDidMount() {
    console.disableYellowBox = true;
  }
  render() {
    return (
      <Container style={{ backgroundColor: "#22252a"}} >
        <ScrollView>
          <Header style={{ backgroundColor: "#22252a" }}>

            <Body style={{ marginLeft: 40 }}>
              <Title style={{color: "#9e9e9e" , fontSize: 22}}>Find Contacts</Title>
            </Body>
            <Right />
          </Header>

          <View style={styles.container}>
            <View style={{ flexDirection: 'column' }}>

              <CardView
                style={styles.cardViewStyle}
                cardElevation={2}
                cardMaxElevation={2}
                cornerRadius={5}>
                <Image style={{ marginTop: 20,width: 80, height: 80, borderRadius: 5 }}
                  source={{uri: 'https://i.pinimg.com/originals/f3/c6/8e/f3c68ef3a73b98a0414dd9cbd8fa696e.jpg'}} />
                <Text style={styles.mainName}>
                  Richard Nevoreski
              </Text >
                <Text style={styles.normalText}>
                  @richardnevo
              </Text>
                <View style={{ flexDirection: 'row', alignItems: 'stretch' }}>
                  <View style={{ margin: 20, flexDirection: 'row', alignItems: 'center' }}>
                    <Icon name="information-circle" />
                    <Text style={styles.normalText}> 150</Text>
                  </View>
                  <View style={{ margin: 20, flexDirection: 'row', alignItems: 'center' }}>
                    <Icon name="nuclear" />
                    <Text style={styles.normalText}> 340</Text>
                  </View>
                  <View style={{ margin: 20, flexDirection: 'row', alignItems: 'center' }}>
                    <Icon name="git-merge" />
                    <Text style={styles.normalText}> 460</Text>
                  </View>
                </View>

                <View>
                  <Text style={styles.normalText}> 950 contributions </Text>
                </View>
              </CardView>

              <CardView
                style={styles.cardViewStyle}
                cardElevation={2}
                cardMaxElevation={2}
                cornerRadius={5}>
                <Image style={{ marginTop: 20,width: 80, height: 80, borderRadius: 5 }}
                  source={{uri: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEBUQEA8PFRAVFQ8QEA8SDxAQEBUQFRUWFhUSFRUYHSggGBolHRUVITEhJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGhAQGisdHR0tLSstKy0tLS0rKystLS0tLS0tLS0tKy0tLS0tLi0tLS0tLS0tLSstLSsrLS0tLS0rLf/AABEIARMAtwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAACAAEDBQYEBwj/xABHEAABAwIDBAYFCAgEBwEAAAABAAIRAwQSITEFBkFREyJhcYGRBzKhscEjQlJicoKy0RQkM5Kz4fDxQ3OiwiU1U3ST0uI0/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAECBAMF/8QAIBEBAQACAgIDAQEAAAAAAAAAAAECESExAxIEIkGxYf/aAAwDAQACEQMRAD8AiDUYCUIgFKTQnhOAnCBoSRQnhAMJQihPCgBCQaue72nQojr1Wz9EHE7yCz93vXUmKVJozyc8l8j7sAeai2JktagtTFqxzd47vEZcz7JpiI7/AOamt976kw9lM9nWpnwdmFHtD1aqE0KkbvdbggVadWmD8+GvZ/pM+xXVCqyq0Ppva9h0c0hw7u/sVtoMQhIUhCYhBEQhKkKEhShGQgIUhCAoIyEBClKjcghcEkRSQXACdPCcBEkE6eE8KAMJ4TpwEDRxOQ1JOQhZTbW8rXE0qDhhGTq0Ez2MHHv/ALlb8bTMforCRID6xHFvBnsk+HArMU2kCcMxxGf91TKrYwRdGfGfnZ+7IKRmY0z4mQPak2g5zcQJBmSMwPbou5luTmJzAjImeapwvJXCaeseOTp8c/ggqgCMpPI5tI5SMwrO4ojRocDGeUQUFpsaq85h3PMEaaqdxPrVayiXNgCW5nCRMdkrmsL+rZVsdLTRzHThcOThz7VuNn7Iw5we2fFVm8Wxm4S4awSPyKrj5JvS2XhuttLsraVK6pdLSPY9h9Zro9U/nxXSQvM92NqfotwCZ6N8U6g7CcnRzB95Xp9Rq7s6BwQlSFAUAEICFIQgKkRlRuUpUbkQicE6ZxToLqE4CSdQkk4CcJ0DQiYEyG5/Zv19V2muiDzi6rG5u3uGbXVDh49UQGjyAPitVb7HBYJaJ81kN0GYq7CeEkntLT8V6hbgCI5Qsnmuq2fHxlikt9igEiBwjWO1dzNmvaP2ZwkzlhI8iMjor+0pAnRWtO2GpCpjbXe4SKOhsVtQNOESMw6AIK7TsxrRoJHEK6ptAXPcK1RO2cuKIAIVBf0pEFae9GZVFdM1XP8AXXKcPNd4dm9HUdA6pzHceC3e7F501pTcSMTR0b45tynviCqLeyjLQY6wy8EXo9rx01IzqyoOWeR+C2eO7jzPJjrKxqyhKNyAro5o3ISiKAoAco3IygcpQicnTOSQXiIJk4ChJ04TJ0Dom8kKdqDzTd5ppXZYfmvLDpwJH9d69FtnZx25dyw21Lfob98QAT0jQPrAH/281rtj1C5gJ1hZPPP1r+PfxprFytm1FR2ataLVzxasnQaiiqnJHhRBisqq69NU17TWmq0gVT7SocQqVbe2H3hpYmniRmqTc5+C9w8HtqN55iCPctXtGlGUarGuY+neMLNQ9pHDI5nw1HcFo8N4ZPPjzt6C9Rlc1hemqHEtyBIa6IxDnH9aroK7y7m2bLG43VC5RlGSgKlAHIHBG5AVKEZTpOSQXaIJgnChJ0kk4QMnCRSQZDfi2+VpVPpNLD905fiVnuxUIpgu+tn4lQbw0H1WkHJzHzTBILXA8vonTJLduXUsIyILwQdQZORWbyXcavHjcMp/rbWlPOQrRjwFiKG262ItazCGZFxyk81VbY3trgwx9EuERB6RwJ0ybK5Y41oucnb011cKGrdhoknLmsFsfbN30oZcEYgQHNIwkT7D4LX7VoB1Emc49qXhaarhv967anIdVbiHCVUXG8TqrJY0tHBzoaD5qpsdgtrOLqjT0XWb1SGvLjlixdnLuXdabp2wJc97XkjCWw0kjKIAnPLVX1i5/e3hzWz6tapLy0siJBkz2Rqqq9tv1pscQ9pz0PD2ErZ7O2LRoyW0wBwyIE8hnnHNZzbUsuWP4SO2OHxUTLkyx45Wdu0BjQBBgyORmI8wUZQUXAgu4F1QjuxGE5WnCaxjH5rvOmKAoihV3MJQuREoHKQBSSckiF2EQQhOoSJJNKUoHSTSlKCK4phwMjh/ZVvQ9BcEDJryCOU6a8tFbkqt2uzJjvoktHOIxAf6SuHlx/Wrw57nrfxaXewW1odUl7RmGAdU8iRx8Um7KpDJlq2cgHuZmANIyn2qz2NcSwQcoCuWHiuEa7jGVutnNa2SwTrigT/UqxDsdDjoj2zVBCLZtHFSIGid1eain2LElpnXwWhpWzIyjuWarzRqQMpntzXZZ7XOHFh5gx2HWFELIsr+n1YHkvPt5Wddv3u/NbGrtltRvVIPCJEjw4FY7eJ0umDzUztTyT6O+zqBzARyB/eAd8VIVzbLYG0WRxAd55+6F0Erbj08zO7yujFCSkUMqypygcUpQuQCSnQuKSIXgKeUIKeVCTynQynQOmSSQJce1CejOWQLXeWRnwK60L2ggg6EEHuKrlj7TS2Gfrdh2HeAdU8CR+XshW1/tptMBozecmtGZKy1j1H4XcDhd8D46+KvBZ4MVUNxOdEZ8ANP65rH1dPSmf1Bf1XYMQEugyJiZUWxt48ILX9V3aoKu1WNdgr/ACTj6rXggOHYdD3ApVm278i5k9yvJD2qp25e1bm4w0nYWAAkjj2SrWzOBmHOIzTW7KbAeipvqHIdSmcMzEYiI9qr9ofpVWt0MClTB65aZeeTWnQE9mk81bhE3t221s2u7qNwlpgPGWfx7Vw7zsDX4RnhBce4LSWzW0Ww2A1oKxW37zEXEHrP0I1DBxVJzXPK6i8pU8DGs+i1rfIAJFUewt4BUJt7ktbcNJZiMBtQgxrwdI048OQvHthbGAJQkpEoSVIRKAlOhKASkhcUkF6E4KFJQDSlAnQFKUpgnhA0pIa9VlNpdUe1rRmXOcGjzKy21N9GNltszGf+o+W057G6u9iC92jQj5UcBDxzbz7wrHZd7LcM5cF5LtLaVe4/bVXOGoZMUx3MGXjqrzdbbLw0seScEFp44e3nC4+XDfMd/D5NfV6NtW3ZVZFRgc3kRPj3qXY9Y08mvbAzioMR8HKDZV22szUcj3pOsDMc1xlbZZlNWbdt9e9Vzn1WtBkxTbB4DI+SoqJNWoHxDGyWzqXaSrMbHGpb5kn3qalRa2TOgU1Msk4mmf3husLQySMRz4dUarKMaaji8jLRv2dArHea46SvhByGXnr7AibRwsgDkI+AUziOE+1tY/eKnFy/tbQee99Gm8+1xU+z94rmiA3EKjBkG1MyByDtfOV078W/R3r2fRZbM8W0abfgqMLUwNlab1W78qgdTd2jGz94Z+YCtqNanUE03seObXB3uXnIakKcGRIPAgwfNB6OQgJWJt9sXVPSsXD6NTr+05+1WFLel4/aUWnmWOLfYZ96DROSVRT3kt3et0je9s/hJTKUtonBQgpKAYUN7e0qLcVaoxgOmI5nuGp8FW7z7Y/RaMsjpXy2noYj1nxxiR4kLzuvUfUdjqPc9x+c5xJ7s+HYg299vrRblRpvqH6Tvk2fmfILOXu8t3W/xCxv0KfUHn6x81VBqIBEBeC44nEk8yZPmU8IkLigFyutybHp7rowczTuHN7XNZiA8SFTPWi9G1TDtS2E5OdWpn79GoB7SE1s3rmLvZdw+3fInCfWbxWzoXrazA5rhiGvAqk3hotZd1KUQYbVA+q+cx94OXBSZByMHmMlmymrp6GGXHtP1qKt1GRPtnLtVRtfbbWMLWZuOS4a1B51e4+z3Lhda5pwtcreI57WiS4vdmdfFaLduy6a6pNjqtcKjuWFhn2kAeKradOFrtwGS24rcG/JtPa1uN34m+SnCe2civl+njryffepi2hcH61MeVJipWq53xb/AMQuB9an/CYqgBab288oTpF0Dt5JmzxUB0kkkAkJJFJB6uCiaowUbCiWC3zuekuy2cqYawd8YnHzIHgqYBPVqmo8vOri5573GfinCIIBJJJAyUJFGgiwwrPdKt0e0LV3K5th4OqNafYSq8qfY/8A+qh/n238VqD1r0p2Zp3Ftct0PSW9TtkY2T+6/wA1UU2BzZ4wvSd8NnNubYtc2R1X9oAPrDkQDK89fYvtnBj4I+a8aOHwPZ/dcfPjZfaNfxs5Z6oC06SYTilKnc3tH8k7IhZ7k2TFxXcNafzW73YsjR2W2R1qjTVdOs1TMHuBA8FiKtuaz20WAl1RzWCBOZgE+A9gXqu1WBtNtMDIQI7Bl+S0/GnNrH8zLiR8776j/iVz9tn8JiqArffb/mV1/mAeTGBVIC7XtkCW8UyIoXKAkydMgZJJJB6mCuHeK6NK1qPb6xAYDyLyGz4AldgKzu/F3DKdEfOJqO+y3IDzJ/dRLJAIkKdECTJJIEU4SSagUKSwq9HXpvicFWjUiYnC9ronhohUNYkSRqASO8IPaNiX1+wk1KzqlNxcTTfDgMRnqnUN4YZiNFbbVdSqUyK9N7QY6zZe0Hg6Rm3yK69lUW1KDHgZOa1w7iJVha0QQWOAMCIPFq63V7Vls6YOtYuo5E46Z9WoPce1QikZgCSchAzM8FvjshmEsgGmdAc8vonuXLsbYLKNV1QnFH7JpzwGMzPHkPHvWXP43P16bvH8z6/bv+n3Z2E22+XqkB4acRJAZTBziefM+XbTHa95Xuq1Smf1QQ2nRc0AFrRGIHVrjmfHTJWG0rLHUaHVX1HE4ywkhjGjkzQGfHVdlO1FKg6BBOQWrHHHCajDnnlnd14DvHc9Le3FSIxVqvVmYhxbE+C4QujbA/Wrj/uLn+K5cy5VYRd/figOqJBxQJIp0xQMkmSQeoNKxm+D8V1E+rTptPfLnf7gtjS1XnW0KpdWqPJmalTPsDiB7AEEBSBSJQAoJE6ZJAUp2oJTg5oDlBUCNM4IPefR5cdLsy3M5im1h72dQ/hWkDJAcNQsD6GLrFZvpf8ATq1G+Dof/vK9BtHZlp5q6qO6vW02Ys5ccOECST2Dmq9t5W/wqcT898k+DR+a722wNQuOgyHedV1ZBX6Qq7SycC6pUcXVHauPLgByCk2nkGM+sF3uVVtOp8o3kM/JR3R857RfiuKzudau7zqOKiUVNxOZ1OZ7zmpVyXJC1OSmGiB0JTkoSUCKSFJB6NeV+jo1HjVrHkd8Ze2F523ILW723WGi2mDm90n7Lc/fCyaBi3kgcfNGmdB1QO0o1BTyMeKmBQIhLROkQgkSQtOSJB6B6FbzDcV6J0c2nUA7QS1x9rV644YXyvAvRzedDtSieD+kpHxGIe1gXv8AWKvOkVJTGveU7xIUdJ2v9cAjVlQByodr1IFR30adV3k0lXWLNZreyrhoXbvo21wR39G9QPALf1R3BSoKeiNc1zPToTqkSgYlCU5KElAkkMpILneetiuSODGtaPLEfxKqU93XNV7qh1cSY5DgPKFBhQMgepe9CS0IIGiDMf2XUCuSs8nsHvUtCpLfYe9B0BJCClKA2IpUTTmpEB2tyaNalWH+HUp1PBrgT7AV9NtIexrhxAI8Qvl2s2QvoH0c7W/Sdn0iT8oxrWP72iJVsUVf0RmR4/15KZ8x2LnqZGQpmukfBX5/EIyMwsrv/wBWzuzzt6g8xHxWqnNYf0nXB/RKw+o0HuL2j4oh4sxEhCclclzDUpFM1MXIGcUE8kj5+5JxQLx8kkwCSCbPgmxokxagjcSU2ABSQAueo8uyGiCOq6cgry32NFn0wM1D8pA06Pl38VQ1IGS2m79Ym1pzwxN8A4oMxKIFTbRtuiqlo9X1mfZPDw08FzBAZUoKhRUzwQG5eieifafRjCT1ekdSd96HtPm4hedFXO6l4ab6jZycGPHe0/8A0PJWx7RX0KRmiAhc+zK/SU2P5tHuUtU4T2LpFScc1576Sng2d0eIdbMHd0tMleh1BlK8w9JNSLa4bzqW/wCNp+Ci9UeWtScck4Q1FyXJCU8oSUDJpCRKjKCQuTICkg6C48vcmLzy9yOVG6nOunJBBUqzlr3Ji50aADtXUABwUNUg6oOyy2BWqYXOwtYYOIkElpzkAfFaljGsaGNENaAAFFs136vS+wz3I3FSOHbFt0jJHrtkjtHEf1yWeBWslZ7atFrKnVIh3Ww8ioHNKQMIQnQTI7SphqA94PiPzhRMOSZ5jPlmg+g90rnFa0j9VvuVzVqSIPmsV6PbvFZtz9XLwlbKnVk6cNPiu29TamgW9YxhPcvOfStlScObqJPfi/kvQXCHLB+lpv6uXR86jP7380vSHlYUdQ5owonHNcXQ8oSU5KYoBKAo3ICgclJCkg606SZBHVJ0C53shdRUFVBr9nZW9L7DT5iUbkNqfkqcfQZ+EJOKkJZm7qYnudzJju0CvryphpuPYQO85fFZwDgoCCdCeaKUDsMFG4KKVKDkg9J9F90OiNMnWY7xkV6WBxXh25d6abjHB0+BH917Vs64D6LHc2tPsXbHpSjrLF+lIYrBx5Ooz/5Gj4rbOgrJb/0sVhXbyZj/AHHB/wDtU5dIjxkHJQNUrz1SudpXB0SpihlKUCKAoiUBKBkkxKSDuSSSQCVG5JJBqLA/I0/sNRlJJSK/bLiGAcCc/BVCSSgC5MxJJAadqSSC33WPyrvue8r2bYJ/Vmff/EUkl2w6UydznFUm8YxUKoOYNOqCOwsKSStUR4WfVCjckks7oZpySSSQMmKSSAHJJJIP/9k='}} />

                <Text style={styles.mainName}>
                  Samuel Watson
              </Text>
                <Text style={styles.normalText}>
                  @samwatson
              </Text>
                <View style={{ flexDirection: 'row', alignItems: 'stretch' }}>
                  <View style={{ margin: 20, flexDirection: 'row', alignItems: 'center' }}>
                    <Icon name="information-circle" />
                    <Text style={styles.normalText}> 80</Text>
                  </View>
                  <View style={{ margin: 20, flexDirection: 'row', alignItems: 'center' }}>
                    <Icon name="nuclear" />
                    <Text style={styles.normalText}> 420</Text>
                  </View>
                  <View style={{ margin: 20, flexDirection: 'row', alignItems: 'center' }}>
                    <Icon name="git-merge" />
                    <Text style={styles.normalText}> 272</Text>
                  </View>
                </View>

                <View>
                  <Text style={styles.normalText}> 410 contributions </Text>
                </View>
              </CardView>

              <CardView
                style={styles.cardViewStyle}
                cardElevation={2}
                cardMaxElevation={2}
                cornerRadius={5}>
               <Image style={{ marginTop: 20,width: 80, height: 80, borderRadius: 5 }}
                  source={{uri: 'data:image/jpeg;base64,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'}} />
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
          </View>

        </ScrollView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',

  },
  iconStyle: {
    color: '#9e9e9e',
    marginLeft: 15,
  },

  mainName: {
    fontFamily: "sans-serif-medium",
    color : "#9e9e9e",
    padding: 5,
  },

  normalText: {
    fontFamily: "sans-serif-light",
    color : "#9e9e9e",
    padding: 5,
  },
  cardViewStyle: {
    width: Dimensions.get('screen').width * 0.9,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: 240,
    margin: 10,
    backgroundColor: "#404040"
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