import React from "react";
import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Launches from "./pages/Launches";
import Launch from "./pages/Launch";

const Stack = createStackNavigator();

const Navigation = () => {
  const defaultNavOptions = {
    headerBackTitle: " ", // Used to avoid routeName showing in Nav
    headerStyle: {
      backgroundColor: "black",
      borderBottomWidth: 0,
      elevation: 0,
      height: 100,
      shadowOpacity: 0,
    },
    headerTintColor: "black",
    // eslint-disable-next-line react/display-name
    // headerTitle: () => <Logo height={28} width={75} />,
  };

  return (
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator initialRouteName="Launches">
        <Stack.Screen name="Launches" component={Launches} />
        <Stack.Screen name="Launch" component={Launch} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
