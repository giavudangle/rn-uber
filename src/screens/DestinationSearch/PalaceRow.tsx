import React from 'react'
import { View, Text } from 'react-native'

import {Entypo} from '@expo/vector-icons'
import styles from './styles'

export default function PalaceRow({data}:{data:any}) {

  return (
    <View style={styles.row}>
      <View style={styles.iconContainer}>
        {data.description === 'Home'
          ?<Entypo name='home' size={20} color='white'/>
          :<Entypo name='location-pin' size={20} color='white'/>
        }
      </View>
        <Text style={styles.locationText}>{data.description}</Text>
    </View>
  )
}
