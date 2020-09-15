import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  StatusBar,
  Platform,
} from "react-native";

const SecondScreen = () => {
  const [names, setNames] = useState(["old", "value"]);
  const val = names.toString();
  return (
    <SafeAreaView style={styles.container}>
      <Text>VOILAAAAAAA....!! A Name Scientist....!!</Text>
    </SafeAreaView>
  );
};

export default SecondScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BFC9CA",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
