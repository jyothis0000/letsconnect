import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

import colors from "./colors";

export default{
  text: {
  color:colors.text,
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
}
