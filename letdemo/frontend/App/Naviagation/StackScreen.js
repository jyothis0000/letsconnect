import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import AppButton from './App/components/AppButton';
import AddDetails from '../../Screens/AddDetails';
import { SimpleLineIcons } from '@expo/vector-icons'; 
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import LoginScreen1 from '../../Screens/LoginScreen1';
import Profile from '../../Screens/Profile';
import RegisterScreen from '../../Screens/RegisterScreen';
import WelcomeScreen from '../../Screens/WelcomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import Education from '../../Screens/Education';
import colors from '../config/colors'
//import SideScreen from './Screens/SideScreen';
import MyDrawer from './Drawer';
import ProfileEditscreen from '../../Screens/ProfileEditscreen';
import Experience from '../../Screens/Experience';
import Connect from '../../Screens/Connect';
import Search from '../../Screens/Skills';
import MainConnect from '../../Screens/MainConnect';

import MyConnections from '../../Screens/MyConnections';
const Stack = createNativeStackNavigator();
function StackScreens() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomeScreen"  >
        <Stack.Screen  name="WelcomScreen" component={WelcomeScreen} options={{headerShown:false}} />
        <Stack.Screen name="signin" component={LoginScreen1} />
         <Stack.Screen name="signup" component={RegisterScreen}  options={{title:"create a account",headerTintColor: '#fff', 
         headerStyle:{backgroundColor:"#2C78E4"}}}/>
         <Stack.Screen name="AddDetails" component={AddDetails}  options={{title:"Add details",headerTintColor: '#fff',headerStyle:{backgroundColor:"#2C78E4"}}}/>
        <Stack.Screen  name="Profile" component={MyDrawer}  options={{title:"Profile",headerTintColor: '#fff',headerStyle:{backgroundColor:"#2C78E4"}} } />
    <Stack.Screen name='ProfileEditscreen' component={ProfileEditscreen} options={{title:"Profile",headerTintColor: '#fff',headerStyle:{backgroundColor:"#2C78E4"}}}/>
    <Stack.Screen name='Education' component={Education} options={{title:"Education",headerTintColor: '#fff',headerStyle:{backgroundColor:"#2C78E4"}}}/>
    <Stack.Screen name='Experience' component={Experience} options={{title:"Experience",headerTintColor: '#fff',headerStyle:{backgroundColor:"#2C78E4"}}}/>
    <Stack.Screen name='Search' component={Search} options={{title:"Search",headerTintColor: '#fff',headerStyle:{backgroundColor:"#2C78E4"}}}/>
     <Stack.Screen name='MainConnect' component={MainConnect}  options={{title:"Connect ",headerTintColor: '#fff',headerStyle:{backgroundColor:"#2C78E4"}}}/>
     <Stack.Screen name='Connect'  component={Connect}  options={{title:"Connect ",headerTintColor: '#fff',headerStyle:{backgroundColor:"#2C78E4"}}}/>
      <Stack.Screen name='MyConnections' component={MyConnections} 
      options={{title:"MyConnections ",headerTintColor: '#fff',headerStyle:{backgroundColor:"#2C78E4"}}}/>
      </Stack.Navigator>
    </NavigationContainer>
    // <SideScreen></SideScreen>
  );
}
export default StackScreens;

const styles = StyleSheet.create({
  container: {
 flex:1,

  },
});