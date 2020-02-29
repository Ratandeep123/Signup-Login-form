import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Welcome from "../screens/Welcome";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import Message from "../screens/Message";
import LoginMessage from "../screens/LoginMessage";
import SignupMsg from "../screens/SignupMsg";

const AppNavigator = createStackNavigator({
  Welcome: {
    screen: Welcome
  },
  Login: {
    screen: Login
  },
  Signup: {
    screen: Signup
  },
  Message: {
    screen: Message
  },
  LoginMessage: {
    screen: LoginMessage
  },
  SignupMsg: {
    screen: SignupMsg
  }
});

export default createAppContainer(AppNavigator);
