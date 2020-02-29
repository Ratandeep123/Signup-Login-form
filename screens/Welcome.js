import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.body}>
      <View style={styles.Button}>
        <Button title="Login" onPress={() => navigation.navigate("Login")} />
      </View>
      <View style={styles.button}>
        <Button title="Signup" onPress={() => navigation.navigate("Signup")} />
      </View>
    </View>
  );
};

export default Welcome;
const styles = StyleSheet.create({
  button: {
    fontSize: 50,
    width: 100,
    alignSelf: "center",
    marginTop: 50
  },
  Button: {
    fontSize: 50,
    width: 100,
    alignSelf: "center",
    marginTop: 100
  },
  text: {
    width: 100,
    fontSize: 20,
    alignSelf: "center"
  },
  body: {
    backgroundColor: "blue",
    height: "100%"
  }
});
