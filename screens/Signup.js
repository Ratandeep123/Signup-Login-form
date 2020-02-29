import React, { Component } from "react";
import {
  setData,
  ValidateEmail,
  ValidatePassword,
  validateUserName
} from "./LocalApi";
import { View, Text, TextInput, StyleSheet, Button, Alert } from "react-native";
import { AsyncStorage } from "react-native";
class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    };
  }
  handleSubmit = () => {
    const { username, email, password } = this.state;
    const loginData = { username: username, email: email, password: password };

    if (
      ValidateEmail(email) &&
      ValidatePassword(password) &&
      validateUserName(username)
    ) {
      setData(loginData);
      this.props.navigation.navigate("Message", {
        username: username,
        email: email,
        password: password,
        location: "Signup"
      });
    } else {
      Alert.alert("Input paramters are not valid");
    }
  };

  emailValidate = email => {
    const emailValue = email.trim();
    const isValidEmailPattern = emailRegex(emailValue);
    this.setState({
      validEmail: isValidEmailPattern,
      emailAddress: emailValue.toLowerCase() || ""
    });
  };
  render() {
    return (
      <View style={styles.body}>
        <Text style={styles.text}>Signup Here</Text>
        <TextInput
          style={styles.InputBody}
          placeholder="username"
          autoCapitalize="characters"
          value={this.state.username}
          keyboardType="default"
          onChangeText={username => this.setState({ username })}
        />
        <TextInput
          style={styles.InputBody}
          placeholder="email"
          autoCapitalize="characters"
          keyboardType="email-address"
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
        />

        <TextInput
          style={styles.InputBody}
          placeholder="password"
          autoCapitalize="characters"
          secureTextEntry={true}
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
        />

        <View style={styles.button}>
          <Button title="Signup" onPress={() => this.handleSubmit()} />
        </View>
      </View>
    );
  }
}
export default Signup;
const styles = StyleSheet.create({
  InputBody: {
    textAlign: "left",
    marginLeft: 35,
    marginRight: 35,
    backgroundColor: "white",
    borderRadius: 5,
    height: 50,
    fontSize: 20,
    marginTop: 15,
    paddingRight: 10,
    shadowOpacity: 1.5,
    shadowRadius: 3,
    shadowOffset: {
      height: 0,
      width: 0
    },
    elevation: 4
  },
  button: {
    fontSize: 50,
    width: 350,
    alignSelf: "center",
    marginTop: 20
  },
  body: {
    backgroundColor: "blue",
    height: "100%"
  },
  text: {
    fontSize: 40,
    textAlign: "center",
    marginTop: 50,
    color: "white"
  }
});
