import React from 'react'
import { View, Text } from 'react-native'
import HomeMap from '../../components/HomeMap'
import UberTypes from '../../components/UberTypes'

import styles  from './styles'



type UberTypesProps = {
  id:string,
  type: string,
  price: number,
  duration: number,
}


export default function SearchResults() {
  return (
    <View style={styles.container}>
      <View style={styles.mapContainerFlex}>
        <HomeMap/>
      </View>
      <View style={styles.uberTypesContainer}>
        <UberTypes/>
      </View>    
    </View>
  )
}
