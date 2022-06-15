import React, { Children } from 'react';
import { StyleSheet, View,Image,Text, TextInput,Platform, TouchableOpacity} from 'react-native';
import Icons from '@expo/vector-icons/MaterialCommunityIcons';
import colors from '../config/colors';
import textInput from './TextInput';
import defaultstyle from '../config/default';
function AppTextInput ({icon,onChangeText,placeholder,keyboardType,secureTextEntry,autoCorrect,onBlur,maxLength}){
    return(
        <TouchableOpacity>
         <View style =
{ styles.container}>
 {icon && <Icons name={icon} size={20} style={styles.icon}> </Icons>}
<TextInput style={styles.Text} 
onChangeText={onChangeText}
placeholder={placeholder}
keyboardType={keyboardType}
secureTextEntry={secureTextEntry}
autoCorrect={autoCorrect}
onBlur={onBlur}
maxLength={maxLength}

></TextInput>

</View>    
        </TouchableOpacity>


    );

}
const styles= StyleSheet.create(
    {
  container:{
           
     backgroundColor:colors.buttoncolor,

     flexDirection:"row",
     width:"95%",
     padding:15,
     marginVertical:10,
borderWidth:1.5,
borderColor:"#B4B4B4",
left:10,

        },icon:{
marginRight:10
        },
       text:{
           height:30,
           width:"100%",
           backgroundColor:"white",
           borderWidth:5,
           color:colors.text,
           borderColor:"#B4B4B4"
       }
    }
)
export default AppTextInput;

