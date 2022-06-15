
import React,{useState} from 'react';
import { View, StyleSheet,FlatList,ScrollView } from 'react-native';
import Screen from "../components/Screens"
import ImageInput from './ImageInput';
import * as ImagePicker from 'expo-image-picker';



function ImageInputList({imageuris=[],onRemove,onAddImage}) {

 
    

  return (
    <View>
 <ScrollView horizontal style={styles.container}>
 
       <ImageInput onchangeImage={(uri)=>onAddImage(uri)} style={styles.image} />
       {imageuris.map((uri)=>(<ImageInput onchangeImage={()=>onRemove(uri)} image={uri} />)) }
    
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
 flexDirection:"row",

paddingHorizontal:30,
paddingVertical:15,

marginVertical:10
  },
  image:{
  
    paddingHorizontal:30,
    paddingVertical:15,
    
marginVertical:10
  }
});

export default ImageInputList;