import React from 'react';
import { View, StyleSheet,Text,Button} from 'react-native';
import AppButton from '../App/components/AppButton';
function WelcomeScreen({navigation}) {
  return (
    <View style={styles.container}>
         
<Text style={styles.text}>Letz Connect </Text>
<View style={{marginTop:180,padding:40}}>
<AppButton title="Sign Up " color= "buttoncolor"   mypress={() =>navigation.push('signup')}></AppButton>
<AppButton title="Sign in " color= "buttoncolor" mypress= {() =>navigation.push('signin')}></AppButton>


</View>

    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

    backgroundColor:"#E5E5E5",
    flex:1,

  },
  

text :{
  
  color:'#539adb',

  justifyContent:'center',
 fontSize:48,
 top:100,
  padding:10,
  alignSelf:"center"
 
  
        }
});
export default WelcomeScreen;
