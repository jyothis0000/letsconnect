import React from 'react';
import  { View, StyleSheet,Image, Text, Button ,TouchableOpacity} from 'react-native';
//import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import AppButton from '../App/components/AppButton';
import AppText from '../App/components/Apptext';
import Cameras from '../App/components/Camera';
import ImageInput from '../App/components/ImageInput';
import ImageInputList from '../App/components/ImageInputList';
import colors from '../App/config/colors';
import {MaterialcommunityIcons} from 'react-native-vector-icons/MaterialCommunityIcons'
function ProfileEditscreen(props) {
  return (
    <View style={styles.container}>
    
    
      
    <Image  source={require('../assets/sas.jpg')} style={styles.image}></Image>

<View style={styles.containers}> 
<AppText>USER NAME</AppText>
<AppText>HIGHER EDUCATION</AppText>
<AppText>CURRENT WORKING COMPANY </AppText>
</View>

<View style={styles.container1}>

<Text style={styles.text}>EXPERIENCE</Text>
<AppText>FULL STACK DEVELOPER</AppText>
<AppText>CURRENT WORKING COMPANY</AppText>
<AppText>MAR 2019 1 YEAR 28 DAYS </AppText>
</View>
<View style={styles.container3}>
<Text style={styles.text}>EDUCATION</Text>
<AppText>COLLEGE NAME</AppText>
<AppText>COURSE NAME</AppText>
<AppText>2017-2020</AppText>
</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      
    backgroundColor:"#E5E5E5",
    flex:1,
 
    
  },
  containers:{
      justifyContent:"center",
      alignSelf:"center",
      alignItems:"center",
      top:40,

  },
  container1:{
    justifyContent:"flex-start",
    alignSelf:"center",
   left:40,
    top:80,
    backgroundColor:"#F7F7FA",
    height:150,
    width:400
  },
  text:{
      justifyContent:"flex-start",
      alignSelf:"flex-start",
  left:40,
      color:"blue",
      fontSize:20
  },
  container3:{
    justifyContent:"flex-start",
    alignSelf:"center",
  left:40,
    top:100,
    backgroundColor:"#F7F7FA",
    height:150,
    width:400
  },
  image:{
      height:50,
      width:50,
      justifyContent:"center",
      alignContent:"center",
      alignSelf:"center"
  }
});

export default ProfileEditscreen;