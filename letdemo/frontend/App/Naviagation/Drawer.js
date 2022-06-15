import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from '../../Screens/Profile';
import SideScreen from '../../Screens/SideScreen';
import CustomSide from '../components/CustomSide';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName= "Profile"  drawerContent={CustomSide} >
      <Drawer.Screen

        name="Profile"
        component={Profile}
        
        options={{ drawerLabel: 'Profile', }}
      />
      {/* <Drawer.Screen
        name="SideScreen"
        component={SideScreen}
        options={{ drawerLabel: 'SideScreen' }}
      />
       */}
    </Drawer.Navigator>
  );
}

export default  MyDrawer;
  