import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import CovidMessage from '../../components/CovidMessage'
import HomeMap from '../../components/HomeMap'
import HomeSearch from '../../components/HomeSearch'

import styles from './styles';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mapContainer}>
        <HomeMap />
      </View>

      <View style={styles.covidMessageContainer}>
        <CovidMessage />
      </View>

      <View style={styles.homeSearchContainer}>
        <HomeSearch />
      </View>

    </SafeAreaView>
  )
}


