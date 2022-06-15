import React from 'react';
import { View, StyleSheet,Image, TouchableOpacity } from 'react-native';
import AppText from '../App/components/Apptext';
import Slide from '../App/components/Slide';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
function SideScreen({navigation}) {
  return (
    <View style={styles.container}>

        <Image  source={require('../assets/av.png')} style={styles.image}></Image>
        
  <View style={styles.container1}>
  <TouchableOpacity >
  <AppText> EDUCATION              <Icon name="chevron-right" size={20} style={styles.Icon}></Icon> </AppText>
  </TouchableOpacity>
  <TouchableOpacity>
<AppText>SKILLS                        <Icon name="chevron-right" size={20}></Icon> </AppText>
</TouchableOpacity>
<TouchableOpacity>
<AppText>Connect to people        <Icon name="chevron-right" size={20}></Icon> </AppText>
</TouchableOpacity>

<TouchableOpacity>
<AppText>MY connections          <Icon name="chevron-right" size={20}></Icon> </AppText>
</TouchableOpacity>
<TouchableOpacity>
<AppText> Share Profile  </AppText>
</TouchableOpacity>

</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#E5E5E5",
    flex:1,
paddingBottom:40,


  },
  image:{
    height:100,
    width:100,
backgroundColor:"grey"

},
container1:{
    marginBottom:20,
top:40,


},
icon:{
    justifyContent:"center",
    alignSelf:"center"
}
});


export default SideScreen;
