import React from 'react'
import { View, Text } from 'react-native'

import {AntDesign} from '@expo/vector-icons'

import styles from './styles';

export default function CovidMessage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel on if necessary</Text>
      <Text style={styles.text}>
      Vietnam recorded nine new Covid-19 cases in current hotspot Hai Duong Wednesday, 
      taking the latest outbreak’s tally to 820.
      </Text>
      <View style={styles.learnMoreContainer}>
        <Text style={styles.learnMore}>Learn more</Text>
        <AntDesign name='arrowright'  size={20} color='#fff'/>
      </View>
      
    </View>
  )
}
