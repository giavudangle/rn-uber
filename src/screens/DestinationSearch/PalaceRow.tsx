import React from 'react'
import { View, Text } from 'react-native'

import {Entypo} from '@expo/vector-icons'
import styles from './styles'

export default function PalaceRow({data}:{data:any}) {
  console.log('hehe');
  
  return (
    <View style={styles.row}>
      <View style={styles.iconContainer}>
        <Entypo name='location-pin' size={20} color='white'/>
        <Text style={styles.locationText}>{}</Text>
      </View>
    </View>
  )
}
