import React from 'react';
import { View, StyleSheet, Image,TouchableOpacity, Linking } from 'react-native';
import AppText from './Apptext';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import SideBar from './SideBar';

function CustomSide({navigation}) {
  return (
    <View style={styles.container}
    
    ><Image source={require('../../assets/Rectangle.png')} style={{width:280,height:200}}></Image>
    
    <View style={styles.container1}>

    <TouchableOpacity  onPress={()=>navigation.navigate('Education')} >
  <AppText> EDUCATION                    <SideBar></SideBar> </AppText>
  </TouchableOpacity>
  <TouchableOpacity style={{padding:5}} onPress={()=>navigation.navigate('Search')}    >
<AppText>SKILLS                              <SideBar></SideBar>     </AppText>
</TouchableOpacity>
<TouchableOpacity style={{padding:5}} onPress={()=>navigation.navigate('MainConnect')}>
<AppText>Connect to people            <SideBar></SideBar>  </AppText>
</TouchableOpacity>

<TouchableOpacity style={{padding:5}}  onPress={()=>Linking.openURL('https://www.facebook.com/')} 
  > 
<AppText>My connections                 <SideBar></SideBar> </AppText>
</TouchableOpacity>
<TouchableOpacity style={{padding:5}} onPress={()=>Linking.openURL('https://www.facebook.com/')}>
<AppText> Share Profile                    <SideBar></SideBar> </AppText>
</TouchableOpacity>              
    </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"#E5E5E5",
  },
container1:{
  marginTop:40,

},
icon:{
  justifyContent:"center",
  alignSelf:"center"
}
});

export default CustomSide;