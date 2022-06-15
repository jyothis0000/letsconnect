import React from "react";
import { Text, StyleSheet, Platform } from "react-native";
import colors from "../config/colors";
import defaultstyle from "../config/default";
const AppText = ({ children, text, style }) => {
  return (
    <Text style={defaultstyle.text}>
      {children}
      {text}
    </Text>
  );
};

export default AppText;
const styles = StyleSheet.create({
 
});
