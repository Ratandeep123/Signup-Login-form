import React, { Component } from "react";
import { getData, ValidateEmail, ValidatePassword } from "./LocalApi";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  // autoCapitalize,
  // placeholder,
  // keyboardType,
  Button,
  Alert
} from "react-native";
import { AsyncStorage } from "react-native";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  _storeData = async data => {
    try {
      await AsyncStorage.getItem("loginData:key", JSON.stringify(data));
    } catch (error) {}
  };
  handleSubmit = async () => {
    const { email, password } = this.state;

    if (ValidateEmail(email) && ValidatePassword(password)) {
      const loginData = {
        eamil: this.state.email,
        password: this.state.passWord
      };

      const res = await getData(loginData);

      const responseObj = JSON.parse(res);
      console.log(responseObj.password);

      if (
        responseObj.email === this.state.email &&
        responseObj.password === this.state.password
      )
        this.props.navigation.navigate("LoginMessage", {
          email: email,
          password: password,
          location: "Login",
          username: responseObj.username
        });
      else {
        alert("email or password is invalid");
      }
    } else {
      Alert.alert("Input paramters are not valid");
    }
  };
  render() {
    return (
      <View style={styles.body}>
        <Text style={styles.text}>Login</Text>

        <TextInput
          style={styles.InputBody}
          placeholder="email"
          inputType="email"
          autoCapitalize="characters"
          underlineColorAndroid="transparent"
          keyboardType="email-address"
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
        />
        <TextInput
          style={styles.InputBody}
          placeholder="password"
          inputType="password"
          autoCapitalize="characters"
          keyboardType="password"
          secureTextEntry={true}
          onChangeText={password => this.setState({ password })}
        />
        <View style={styles.button}>
          <Button title="Login" onPress={() => this.handleSubmit()} />
        </View>
      </View>
    );
  }
}
export default Login;
const styles = StyleSheet.create({
  InputBody: {
    textAlign: "center",
    // width: "80%",
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
    shadowOffset: {},
    elevation: 4
  },
  button: {
    fontSize: 50,
    width: 350,
    alignSelf: "center",
    marginTop: 20,
    height: 50,
    color: "black"
  },
  text: {
    fontSize: 40,
    textAlign: "center",
    marginTop: 50,
    color: "white"
  },
  body: {
    backgroundColor: "blue",
    height: "100%"
  }
});
