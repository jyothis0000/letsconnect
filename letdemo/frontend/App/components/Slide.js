import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import AppText from './Apptext';
function Slide({name,size,color, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}> 
         <View style={styles.container}>
      <AppText>Next</AppText>
<Icon name={name} size={size} color={color} > </Icon>

    </View>
    </TouchableOpacity>
 
  );
}

const styles = StyleSheet.create({
  container: {
flexDirection:"row",
justifyContent:"center"
  }
});

export default Slide;