import { AsyncStorage } from "react-native";

export async function setData(data) {
  try {
    const value = await AsyncStorage.setItem(
      "loginData:key",
      JSON.stringify(data)
    );

    if (value !== null) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
}
export async function getData() {
  try {
    console.log("eowrjije");
    const value = await AsyncStorage.getItem("loginData:key");
    // console.log(jSON.stringify(value));
    if (value !== null) {
      // We have data!!
      //   this.setState({
      // loginData: value
      //   });
      console.log("thats my value", value);
      return value;
    }
  } catch (error) {
    // Error retrieving data
  }
}
export function LocalApi(data) {
  const jsondata = JSON.parse(AsyncStorage.getItem("data"));
  console.log(jsondata);
  const res = jsondata.every(element => {
    if (email === data.email && password === data.password) {
      const payload = {
        email: email,
        password: password
      };
      return false;
    } else {
      return true;
    }
  });
  return res;
}
export function ValidateEmail(value) {
  if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
    return true;
  }
  return false;
}

export function ValidatePassword(value) {
  var paswd = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/;

  if (paswd.test(value)) {
    return true;
  }
  return false;
}

export function validateUserName(value) {
  var name = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;

  if (name.test(value)) {
    return true;
  }
  return false;
}
