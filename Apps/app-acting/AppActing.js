import React from "react";
import FirstScreen from "../first-screen/FirstScreen";
import SecondScreen from "../second-screen/SecondScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

class AppActing extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
    };

    this.Stack = createStackNavigator();
  }

  userDetails = (name) => {
    this.setState({ name });
  };

  render() {
    return (
      <NavigationContainer>
        <this.Stack.Navigator initialRouteName="firstscreen">
          <this.Stack.Screen
            name="firstscreen"
            options={{ title: "Creative-U" }}
          >
            {(props) => (
              <FirstScreen {...props} passUserDetails={this.userDetails} />
            )}
          </this.Stack.Screen>
          <this.Stack.Screen name="secondscreen">
            {(props) => <SecondScreen {...props} getUserDetails={this.state} />}
          </this.Stack.Screen>
        </this.Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default AppActing;
