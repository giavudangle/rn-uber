import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import {AntDesign,MaterialIcons} from '@expo/vector-icons'



export default function HomeSearch() {
  return (
    <View>
      {/* Search Container */}
      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>Where do you go ?</Text>
    
      <View style={styles.timeContainer}>
        <AntDesign name='clockcircle' size={16}/>
        <Text>Now</Text>
        <MaterialIcons name={'keyboard-arrow-down'} size={16}/>
      </View>

      </View>

      {/* History trips */}

      <View style={styles.historyContainer}>
        <View style={styles.iconContainer}>
          <AntDesign color='white' size={16} name='clockcircle'/>
        </View>
        <Text style={styles.destinationText}>Van Hanh Mall</Text>
      </View>

      <View style={styles.historyContainer}>
        <View style={[styles.iconContainer,{backgroundColor:'#2A67E1'}]}>
          <AntDesign color='white' size={16} name='home'/>
        </View>
        <Text style={styles.destinationText}>Home</Text>
      </View>

      <View style={styles.historyContainer}>
        <View style={[styles.iconContainer,{backgroundColor:'#2A67E1'}]}>
          <AntDesign color='white' size={16} name='taobao-circle'/>
        </View>
        <Text style={styles.destinationText}>Movie Theater</Text>
      </View>

     

    </View>
  )
}
