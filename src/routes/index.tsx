import Home from '../screens/Home';
import DestinationSearch from '../screens/DestinationSearch';
import SearchResults from '../screens/SearchResults';

import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';



const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{headerShown:false}}
      >
        <Stack.Screen name={"Home"} component={Home}/>
        <Stack.Screen name={'DestinationSearch'} component={DestinationSearch}/>
        <Stack.Screen name={'SearchResults'} component={SearchResults}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigator;