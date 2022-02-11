import React from "react";
import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Launches from "./pages/Launches";
import Launch from "./pages/Launch";

const Stack = createStackNavigator();

const Navigation = () => {
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
