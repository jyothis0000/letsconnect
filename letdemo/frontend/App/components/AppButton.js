import React from 'react';
//import {useDeviceOrientation} from  '@react-native-community/hooks';
import { Platform, SafeAreaView, StyleSheet, View,TouchableOpacity,Image ,Text} from 'react-native';
import colors from '../config/colors';
function  AppButton({title, mypress, color= "primary",disabled,onLongPress})
{
    return(
<TouchableOpacity   style={[styles.button, { backgroundColor:colors[color]}]}
     onPress={mypress} disabled={disabled} onLongPress={onLongPress}>
    <Text style ={ styles.text}>{title}</Text>

</TouchableOpacity>
    );
}



const styles= StyleSheet.create(
    {
        button:{
            backgroundColor:"blue",
            height:40,
            width:"100%",
        
           justifyContent:'center',
           alignItems:'center',
           padding:15,
           marginVertical:10,
           borderWidth:2.8,
           borderColor:"#B4B4B4",
           borderRadius:5


        },
        text:{
  color:'black',
  fontSize:18,
  textTransform:'uppercase',
  fontWeight:'bold'

        }
    }
)

export default AppButton;






