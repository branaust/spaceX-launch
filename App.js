import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Apollo from "./Apollo";
import Navigation from "./Navigation";

export default function App() {
  return (
    <Apollo>
      <Navigation />
    </Apollo>
  );
}
