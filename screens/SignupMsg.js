import React from "react";
import { View, Text, StyleSheet } from "react-native";
class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "Signup Successfull"
    };
  }

  render() {
    return (
      <View style={styles.body}>
        <Text>
          <Text style={styles.text}>{this.state.msg}</Text>
        </Text>
      </View>
    );
  }
}
export default Image;
const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    alignContent: "center",
    marginLeft: 20
    // marginTop: 50
  },
  body: {
    backgroundColor: "pink",
    height: "100%"
  }
});
