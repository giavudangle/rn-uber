import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import CovidMessage from './src/components/CovidMessage';
import Search from './src/components/Search';
import HomeScreen from './src/screens/Home';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <HomeScreen/>
      <CovidMessage/>
      <Search/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
});
