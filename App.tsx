import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import CovidMessage from './src/components/CovidMessage';
import Search from './src/components/HomeSearch';
import UberTypes from './src/components/UberTypes';
import DestinationSearch from './src/screens/DestinationSearch';
import HomeScreen from './src/screens/Home';
import SearchResults from './src/screens/SearchResults';


export default function App() {
  return (
      // <HomeScreen/>
    <SearchResults/>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
});
