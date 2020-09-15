import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  Platform,
  TextInput,
  Image,
  Button,
} from "react-native";

const FirstScreen = ({ callbackFunc }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      {/* logo container */}
      <View style={styles.logo}>
        <Image source={require("../../assets/logo.jpg")} style={styles.image} />
        <Text style={{ fontSize: 11 }}>
          I don't own this logo
          <AntDesign name="meho" size={12} color="black" />
        </Text>
      </View>
      {/* Input Fields */}
      <View style={styles.field}>
        <Text style={styles.text}>Enter your Name:</Text>
        <TextInput
          placeholder="First Name"
          placeholderTextColor="#E74C3C"
          style={styles.textInput}
          keyboardType="default"
          onChangeText={(text) => setFirstName(text)}
        />
        <TextInput
          placeholder="Last Name"
          placeholderTextColor="#E74C3C"
          style={styles.textInput}
          onChangeText={(text) => setLastName(text)}
        />
      </View>
      {/* Button */}
      <Button
        onPress={() => console.log("hi")}
        title="Be A Scientist!"
        color="#841584"
      />
    </SafeAreaView>
  );
};

export default FirstScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#BFC9CA",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  field: {
    flex: 1,
    margin: 5,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 75,
  },
  logo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    width: "100%",
    fontSize: 18,
    margin: 2,
  },
  textInput: {
    fontSize: 18,
    width: "48%",
    color: "#16A085",
    margin: 2,
    padding: 2,
    borderWidth: 1,
    borderColor: "#34495E",
    borderStyle: "dashed",
    borderRadius: 1,
  },
});
