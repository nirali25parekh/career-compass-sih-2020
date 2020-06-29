import React from 'react'
import { View, TextInput, Button, TouchableOpacity, StyleSheet, Text, Image, TouchableHighlight, Animated } from 'react-native'
import { Icon , Container, Header, Left, Right, Body,Title} from 'native-base'
import { Switch } from 'react-native-switch'

const source = require("../../assets/nouristic_logo.png")

export default class LoginScreen extends React.Component {
    
    state = {
        switchValue: false,
        username: '',
        password: '',
    }
    render() {
        return (
            <Container>
            <Header style={{backgroundColor: "#22252a"}}>

                <Body style={{marginLeft: 40}}>
                    <Title>Login Page</Title>
                </Body>
                <Right />
            </Header>

            <View style={styles.container}>

                <View style={styles.outerBox}>


                    <View style={styles.inputContainer}>
                        <Icon name="person" style={styles.iconStyle} />
                        <TextInput style={styles.inputs}
                            placeholder="Username"
                            onChangeText={this.setUsername} />
                    </View>

                    <View style={styles.inputContainer}>
                        <Icon name="lock" style={styles.iconStyle} />
                        <TextInput style={styles.inputs}
                            placeholder="Password"
                            secureTextEntry={true}
                            onChangeText={(password) => this.setPassword(password)} />
                    </View>

                    <View style={styles.rememberMeContainer}>
                        <Text style={styles.switchTextStyle}>
                            Remember Me
                        </Text>
                        <Switch
                            value={this.state.switchValue}
                            onValueChange={this.setSwitchValue}
                            disabled={false}
                            backgroundActive={'#db6574'}
                            backgroundInactive={'gray'}
                            circleActiveColor={'white'}
                            circleInActiveColor={'white'}
                        />
                    </View>

                    <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={this._loginButtonPressed}>
                        <Text style={styles.loginText}>Login</Text>
                    </TouchableHighlight>

                </View>
            </View>
            </Container>
        );
    }

    setUsername = username => {
        this.setState({ username: username })
    }

    setPassword = password => {
        this.setState({ password: password })
    }

    setSwitchValue = (switchValue) => {
        console.warn(switchValue)
        this.setState(prevState => ({
            switchValue: !prevState.switchValue
        }));

    }

    _loginButtonPressed = () => {
        this.props.navigation.navigate('Drawer')
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#db6574', //red
    },
    iconStyle: {
        color: '#22252a',
        marginLeft: 15,
    },
    outerBox: {
        // top: 90,
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: '#22252a',//black
        opacity: 0.9,
        paddingVertical: 40,
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal: 20,
    },
    rememberMeContainer: {
        marginLeft: "auto",
        flexDirection: "row",
        marginVertical: 20,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 17,
    },
    switchStyle: {
        color: 'white',
    },
    inputContainer: {
        borderBottomColor: 'black',
        backgroundColor: '#ffffff',
        opacity: 1,
        borderRadius: 30,
        borderBottomWidth: 1,
        width: 300,
        height: 45,
        marginVertical: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1,
    },
    switchTextStyle: {
        color: "white",
        marginRight: 8,
        fontWeight: "700"
    },
    inputIcon: {
        width: 30,
        height: 30,
        marginLeft: 15,
        justifyContent: 'center'
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 12,
        width: 250,
        borderRadius: 30,
    },
    loginButton: {
        backgroundColor: "#7cc576",
        opacity: 1,
    },
    loginText: {
        color: 'white',
    }
});
