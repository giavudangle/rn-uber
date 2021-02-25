import React from 'react'
import { View, Text,StyleSheet,Dimensions, SafeAreaView } from 'react-native'
import MapView from 'react-native-maps';

import styles from './style'

export default function HomeMap() {
  return (
    <View style={styles.container}>
      <MapView 
      initialRegion={{
        latitude: 10.7805149,
        longitude: 106.6383909,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      style={styles.map} />
    </View>
  )
}
