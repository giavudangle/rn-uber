import { useRoute } from '@react-navigation/core'
import React from 'react'
import { View, Text } from 'react-native'
import HomeMap from '../../components/HomeMap'
import RouteMap from '../../components/RouteMap'
import UberTypes from '../../components/UberTypes'

import styles  from './styles'


export default function SearchResults() {
  const route =useRoute();

  
  console.log(route);
  
  return (
    <View style={styles.container}>
      <View style={styles.mapContainerFlex}>
        <RouteMap/>
      </View>
      <View style={styles.uberTypesContainer}>
        <UberTypes/>
      </View>    
    </View>
  )
}
