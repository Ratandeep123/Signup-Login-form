import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
  Image
} from "react-native";

import moment from "moment";
import * as ImagePicker from "expo-image-picker";
import DateTimePicker from "react-native-modal-datetime-picker";

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "",
      image: "https://i.imgur.com/TkIrScD.png",
      isVisible: false,
      chooseDate: ""
    };
  }
  onDateChange(date) {
    this.setState({
      selectedStartDate: date
    });
  }
  handlePicker = datetime => {
    this.setState({
      isVisible: false,
      chooseDate: moment(datetime).format("YYYY - MM - DD")
    });
  };
  hidePicker = () => {
    this.setState({
      isVisible: false
    });
  };
  showPicker = () => {
    this.setState({
      isVisible: true
    });
  };
  // onSignupCheck = () => {
  //   // const { chooseDate } = this.state;
  //   // if (chooseDate.length === 12) {
  //   //   this.props.navigation.navigate("Image");
  //   // } else {
  //   //   alert("plz select date");
  //   // }
  //   if (chooseDate.length === 12) {
  //     setData(loginData);
  //     this.props.navigation.navigate("Image");
  //   } else {
  //     Alert.alert("Input paramters are not valid");
  //   }
  // };
  openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    const { uri } = pickerResult;
    if (uri) {
      this.setState({ image: uri });
    }
  };
  render() {
    // console.log(this.props.navigation.state.params);

    return (
      <View style={styles.body}>
        <View>{/* <Text>{this.state.chooseDate}</Text> */}</View>
        <Text style={styles.text}>{this.state.msg}</Text>
        <Image source={{ uri: this.state.image }} />
        <View style={styles.picBtn}>
          <Button
            title="+"
            onPress={() => {
              openImagePickerAsync;
            }}
          />
        </View>

        {this.state.image ? (
          <Image
            source={{ uri: this.state.image }}
            style={{
              height: 100,
              width: 100,
              borderRadius: 70,
              alignSelf: "center",
              marginTop: 30
            }}
          />
        ) : null}

        <View>
          <TouchableOpacity>
            <TextInput
              style={styles.InputBody}
              placeholder="Select date of birth"
              value={this.state.chooseDate}
              onTouchStart={this.showPicker}
            />
          </TouchableOpacity>
          <DateTimePicker
            isVisible={this.state.isVisible}
            mode="date"
            onConfirm={this.handlePicker}
            onCancel={this.hidePicker}
            datePickerModeAndroid={"spinner"}
          />
        </View>
        <View style={styles.DoneButton}>
          <Button
            title="Done"
            onPress={() => {
              this.state.chooseDate
                ? this.props.navigation.navigate("SignupMsg")
                : alert("Date not selected");
            }}
          />
        </View>
      </View>
    );
  }
}
export default Message;
const styles = StyleSheet.create({
  InputBody: {
    textAlign: "left",
    alignSelf: "center",
    width: "40%",
    marginLeft: 35,
    marginRight: 35,
    backgroundColor: "white",
    borderRadius: 5,
    height: 50,

    fontSize: 30,
    marginTop: 15,

    shadowOpacity: 1.5,
    shadowRadius: 3,
    shadowOffset: {
      height: 0,
      width: 0
    },
    elevation: 4
  },
  text: {
    fontSize: 40,
    textAlign: "center"
  },

  picBtn: {
    fontSize: 20,
    alignSelf: "center",
    backgroundColor: "blue",
    color: "white",
    width: 50
  },
  DoneButton: {
    width: 50,
    alignSelf: "center",
    marginTop: 20
  },
  body: {
    backgroundColor: "pink",
    height: "100%"
  }
});
