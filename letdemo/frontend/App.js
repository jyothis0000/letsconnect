import { StatusBar } from 'expo-status-bar';
import React,{useState,useContext,useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppButton from './App/components/AppButton';
import AddDetails from './Screens/AddDetails';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import LoginScreen1 from './Screens/LoginScreen1';
import Profile from './Screens/Profile';
import RegisterScreen from './Screens/RegisterScreen';
import WelcomeScreen from './Screens/WelcomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import SideScreen from './Screens/SideScreen';

import Stack from './App/Naviagation/StackScreen';
import MyDrawer from './App/Naviagation/Drawer';
import StackScreens from './App/Naviagation/StackScreen';
import CustomSide from './App/components/CustomSide';
import AuthContext from './App/Auth/context';
// const Stack = createNativeStackNavigator();
function App() {

  const [user,setUser]=useState();

  const[loading,setLoading]=useState(false);
  
  
  

  
    const restoreToken=async()=>{
      const token=await authStorage.getToken()
      if (!token)return;
        
      else {
        setUser(jwtDecode(token));
      }
    }
  
 
 
  
  return (
    

    <AuthContext.Provider  value={{user,setUser}}>
       {user?<LoginScreen1/>:<StackScreens/>}
    </AuthContext.Provider>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
 flex:1,

  },
});

