import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HomeNavigator from './HomeNavigator';
import CustomDrawer from './CustomDrawer';

import {View,Text} from 'react-native';

const Drawer = createDrawerNavigator();



const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
      openByDefault
      drawerContent={props => (
        <CustomDrawer {...props}/>
      )}
      >
        <Drawer.Screen component={HomeNavigator} name='Home'/>
    

      </Drawer.Navigator>
     
    </NavigationContainer>
  )
}

export default RootNavigator;