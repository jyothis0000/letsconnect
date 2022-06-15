import React,{useState} from 'react';
import { View, StyleSheet,Text, Button } from 'react-native';
import AppTextInput from '../App/components/AppTextInput';
import AppText from '../App/components/Apptext';
import { ScrollView } from 'react-native-web';

import CheckBox from 'react-native-check-box'

function Experience(props) {
  return (

  
    <View style={styles.container}>
 <Text> COMPANY *</Text> 
<AppTextInput placeholder="ADD  COMPANY ">
    

</AppTextInput>
<Text> TITLE </Text> 
<AppTextInput placeholder="Add TITLE ">

</AppTextInput>
<Text>FROM * </Text> 
<AppTextInput placeholder="FROM THE YEAR " />
<Text>TO *</Text> 
<AppTextInput placeholder="TO THE YEAR  " />
<CheckBox
    style={{ padding: 10}}
  //  onClick={this.props.checked}
    leftText={"I currently working here "}
/>

<Text>Location(OPTIONAL) </Text> 
<AppTextInput placeholder="Add Location" />

<Text>Description(OPTIONAL) </Text> 
<AppTextInput placeholder="Add Description" />

<Button title='SAVE'></Button>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {

    backgroundColor:"#E5E5E5",
    flex:1,
   
  }
});

export default Experience;