import React from 'react';
import { View, StyleSheet, Button,Text } from 'react-native';
import AppText from '../App/components/Apptext';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import colors from '../App/config/colors';
function Education({navigation}) {
  return (
    <View style={styles.container}>
<Text style={styles.text}>EXPERIENCE</Text>

  <Icons name='circle-edit-outline' size={30} color={colors.secondary} style={styles.Icons}
  onPress={()=>navigation.navigate('Experience')}> </Icons> 
  
  <View style={styles.container1}>


<AppText>FULL STACK DEVELOPER</AppText>
<AppText>CURRENT WORKING COMPANY</AppText>
<AppText>MAR 2019 1 YEAR 28 DAYS </AppText>
</View>

<Icons name='circle-edit-outline' size={30} color={colors.secondary} style={styles.Icons} onPress={()=>navigation.navigate('Experience')}> </Icons> 

<View style={styles.container2}>


<AppText>FULL STACK DEVELOPER</AppText>
<AppText>CURRENT WORKING COMPANY</AppText>
<AppText>MAR 2019 1 YEAR 28 DAYS </AppText>
</View>
<View style={styles.container3}>
<Text style={styles.text}>EDUCATION</Text>
<Icons name='circle-edit-outline' size={30} color={colors.secondary} style={styles.Icons}> </Icons> 
<View style={styles.container4}>


<AppText>COLLEGE NAME</AppText>
<AppText>COURSE NAME</AppText>
<AppText>2017-2018 </AppText>
</View>
</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#E5E5E5",
    flex:1,
    
  },
  create:{
    color:"blue",
    fontSize:12
  },
  text:{
    justifyContent:"flex-start",
    alignSelf:"flex-start",
left:40,
    color:"blue",
    fontSize:20
},
  container1:{
    justifyContent:"flex-start",
    alignSelf:"center",
   left:40,
    top:5,
    backgroundColor:"#F7F7FA",
    height:100,
    width:400
  },
  Icons:{
      left:285,
paddingHorizontal:40,
paddingTop:20
  },
  container2:{
    justifyContent:"flex-start",
    alignSelf:"center",
   left:40,
    top:30,
    backgroundColor:"#F7F7FA",
    height:100,
    width:400
  },
  container3:{
      top:60
  },
  container4:{
    justifyContent:"flex-start",
    alignSelf:"center",
   left:40,
    top:10,
    backgroundColor:"#F7F7FA",
    height:100,
    width:400
  }
});

export default Education;