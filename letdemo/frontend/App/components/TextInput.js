import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const textInput = ({ icon, ...otherProps }) => {
  const [text, setText] = useState("");
  return (
    <SafeAreaView>
      <View style={styles.sectionStyle}>
        <MaterialCommunityIcons
          name={icon}
          size={20}
          style={styles.imageStyle}
        />
        <TextInput onChangeText={(val) => setText(val)} {...otherProps} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  continer: {
    flex: 1,
  },

  sectionStyle: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#dbdbdb",
    borderWidth: 0.5,
    height: 40,
    borderRadius: 25,
    margin: 10,
  },
  imageStyle: {
    padding: 10,
    margin: 5,
    alignItems: "center",
  },
});

export default textInput;
