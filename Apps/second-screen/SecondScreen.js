import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  StatusBar,
  Platform,
  FlatList,
} from "react-native";

const SecondScreen = ({ getUserDetails }) => {
  const [nameList, setNameList] = useState();
  const [len, setLen] = useState(0);

  const permArr = [];
  const usedChars = [];

  let j = 0;

  useEffect(() => {
    const k = permute(getUserDetails.name);
    generateList(k);
  }, [getUserDetails]);

  const permute = (input) => {
    let i,
      ch,
      chars = input.split("");
    for (i = 0; i < chars.length; i++) {
      ch = chars.splice(i, 1);
      usedChars.push(ch);
      if (chars.length == 0) permArr[permArr.length] = usedChars.join("");
      permute(chars.join(""));
      chars.splice(i, 0, ch);
      usedChars.pop();
    }
    return permArr;
  };

  const generateList = (k) => {
    setLen(k.length);
    setNameList(
      <FlatList
        data={k}
        renderItem={({ item }) => (
          <Text style={{ color: "#76448A" }}>{item}</Text>
        )}
        keyExtractor={() => {
          ++j;
          return j.toString();
        }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 25, color: "#873600", paddingBottom: 7 }}>
        VoilAaaa...! A Name Scientist!!
      </Text>
      <Text style={{ paddingBottom: 5 }}>
        Your nick name just yielded{" "}
        <Text style={{ color: "#76448A" }}>{len}</Text> combinations below:
      </Text>
      {nameList}
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
