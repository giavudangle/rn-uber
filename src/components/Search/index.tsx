import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import {AntDesign,MaterialIcons} from '@expo/vector-icons'

export default function Search() {
  return (
    <View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>Where do you go ?</Text>
     

      <View style={styles.timeContainer}>
        <AntDesign name='clockcircle' size={16}/>
        <Text>Now</Text>
        <MaterialIcons name={'keyboard-arrow-down'} size={16}/>
      </View>

      </View>

    </View>
  )
}
