import React from 'react'
import { View, TextInput, Button, TouchableOpacity, StyleSheet, Text, Image, TouchableHighlight, Picker } from 'react-native'
import { Icon, Header, Container, Left, Right, Body,Title } from 'native-base'
import { CheckBox } from 'react-native-elements'

const source = require("../../assets/db6574-01.png")

export default class MySignUpScreen extends React.Component {
    componentDidMount() {
        console.disableYellowBox = true;
      }
      
    state = {
        switchValue: false,
        username: '',
        email: '',
        password: '',
        age: '',
        hasAgreedToTerms: false,
        education: '',
    }
    render() {
        return (
            <Container>
            <Header style={{backgroundColor: "#22252a"}}>
                {/* <Left/> */}
                <Body style={{marginLeft: 40}}>
                    <Title>SignUp Page</Title>
                </Body>
                <Right />
            </Header>

            <View style={styles.container}>
                <View style={styles.outerBox}>


                    {/* username */}
                    <View style={styles.inputContainer}>
                        <Icon name="person" style={styles.iconStyle} />
                        <TextInput style={styles.inputs}
                            placeholder="Username"
                            onChangeText={(username) => this.setUsername(username)} />
                    </View>

                    {/* email */}
                    <View style={styles.inputContainer}>
                        <Icon name="mail" style={styles.iconStyle} />
                        <TextInput style={styles.inputs}
                            placeholder="Email"
                            keyboardType="email-address"
                            autoCapitalize='none'
                            onChangeText={(email) => this.setEmail(email)} />
                    </View>

                    {/* password */}
                    <View style={styles.inputContainer}>
                        <Icon name="lock" style={styles.iconStyle} />
                        <TextInput style={styles.inputs}
                            placeholder="Password"
                            secureTextEntry={true}
                            onChangeText={(password) => this.setPassword(password)} />
                    </View>

                    {/* age */}
                    <View style={styles.inputContainer}>
                        <Icon name="calendar" style={styles.iconStyle} />
                        <TextInput style={styles.inputs}
                            placeholder="Age"
                            keyboardType="number-pad"
                            onChangeText={(age) => this.setPassword(age)} />
                    </View>

                    {/* education */}
                    <View style={styles.inputContainer}>
                        <Icon name="school" style={styles.iconStyle} />
                        <Picker
                            selectedValue={this.state.user}
                            style={{ height: 50, width: 250 }}
                            mode='dropdown'
                            onValueChange={this.setEducation}>
                            <Picker.Item label="High School" value="High School" />
                            <Picker.Item label="Associate degree" value="Associate degree" />
                            <Picker.Item label="Bachelor's degree" value="Bachelor's degree" />

                            <Picker.Item label="Master's degree" value="Master's degree" />

                            <Picker.Item label="Doctoral degree" value="Doctoral degree" />

                        </Picker>
                    </View>

                    {/* terms and conditions */}
                    <CheckBox
                        title='I agree to the terms and conditions'
                        checked={this.state.hasAgreedToTerms}
                        onPress={this._checkBoxPressed}
                        textStyle={styles.checkBoxTextStye}
                        size={24}
                        containerStyle={styles.checkBoxContainerStyle}
                    />


                    <TouchableHighlight style={[styles.buttonContainer, styles.signUpButton]} onPress={this._signUpButtonPressed}>
                        <Text style={styles.signUpText}>Sign Up</Text>
                    </TouchableHighlight>

                </View>
            </View>
            </Container>
        );
    }

    _checkBoxPressed = (hasAgreedToTerms) => {
        this.setState(prevState => ({
            hasAgreedToTerms: !prevState.hasAgreedToTerms
        }))
    }

    setUsername = username => {
        this.setState({ username: username })
    }

    setEmail = email => {
        this.setState({ email: email })
    }

    setAge = age => {
        this.setState({ age: age })
    }

    setPassword = password => {
        this.setState({ password: password })
    }

    setEducation = (itemValue) => {
        console.warn(itemValue)
        this.setState({ education: itemValue })
    }

    _signUpButtonPressed = () => {
        this.props.navigation.navigate('LoginScreen')
    }
}

const styles = StyleSheet.create({
    checkBoxTextStye: {
        color: 'white',
        fontSize: 12,
    },
    checkBoxContainerStyle: {
        backgroundColor: 'rgba(255,255,255,0)',
        borderColor: 'rgba(255,255,255,0)',
        right: -20,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#db6574', //red
    },
    termsText: {
        color: 'white',
    },
    iconStyle: {
        color: '#22252a',
        marginLeft: 15,
    },
    outerBox: {
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: '#22252a',//black
        opacity: 0.9,
        paddingVertical: 40,
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
    signUpButton: {
        backgroundColor: "#7cc576",
        opacity: 1,
    },
    signUpText: {
        color: 'white',
    }
});
