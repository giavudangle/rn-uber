import React, { useState } from 'react'
import { View, Text,TextInput, SafeAreaView } from 'react-native'

import styles from './styles';

export default function DestinationSearch() {
  const [fromText,setFromText] = useState('');
  const [destinationText,setDestinationText] = useState('');



  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TextInput
        value={fromText}
        onChangeText={(text) => setFromText(text)}
        style={styles.textInput} 
        placeholder='From'/>
        <TextInput 
        onChangeText={(text) => setDestinationText(text)}
        value={destinationText}
        style={styles.textInput} 
        placeholder='Where To ?'
        />  
      </View>
    </SafeAreaView>
  )
} 
