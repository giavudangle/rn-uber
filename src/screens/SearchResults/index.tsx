import { ParamListBase, RouteProp, useRoute } from '@react-navigation/core'
import React, { useState } from 'react'
import { View, Text } from 'react-native'
import HomeMap from '../../components/HomeMap'
import RouteMap from '../../components/RouteMap'
import UberTypes from '../../components/UberTypes'

import styles  from './styles'

export default function SearchResults() {
  const route =useRoute();
  const {originPlace,destinationPlace} : any  = route.params;
  const typeState = useState(null);

  const onSubmit = async () => {
    const [type] = typeState;
    if(!type){
      console.warn('Must choose car');
      
    }
  }
  
  
  return (
    <View style={styles.container}>
      <View style={styles.mapContainerFlex}>
        <RouteMap origin={originPlace} destination={destinationPlace} />
      </View>
      <View style={styles.uberTypesContainer}>
        <UberTypes onSubmit={onSubmit} typeState={typeState}/>
      </View>    
    </View>
  )
}
