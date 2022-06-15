import React from 'react';
import { View, StyleSheet, } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AppText from './Apptext';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
function SideBar({title}) {
  return (
    <View style={styles.container}>
<TouchableOpacity>
<AppText>{title}</AppText>

<Icon name="chevron-right" size={20} ></Icon>
</TouchableOpacity>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {

    flex:1
  }
});

export default SideBar;