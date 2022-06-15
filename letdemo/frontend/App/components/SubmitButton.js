import React from "react";
import { Text, StyleSheet, Platform } from "react-native";
import { useFormikContext } from "formik"
import AppButton from "./AppButton";
const SubmitButton = ({title,color,onLongPress}) => {
const {handleSubmit}= useFormikContext();
  return (
    <AppButton title={title}  color={color}   mypress={handleSubmit}
 onLongPress={onLongPress}
    ></AppButton>
  );
};

export default SubmitButton;
const styles = StyleSheet.create({
 
});
