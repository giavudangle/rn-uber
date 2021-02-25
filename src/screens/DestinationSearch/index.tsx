import React, { useState,useEffect } from 'react'
import { View, Text,TextInput, SafeAreaView } from 'react-native'

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import styles from './styles';



export default function DestinationSearch() {
  const [originPlace,setOriginPalace] = useState(null);
  const [destinationPalace,setDestinationPalace] = useState<any>(null);

  
  useEffect(() => {
    if(originPlace && destinationPalace){
      console.log('Redirect result');
      
    }
    
  }, [originPlace,destinationPalace]);
  
  
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <GooglePlacesAutocomplete
        placeholder='Search'
        fetchDetails
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          setDestinationPalace({data,details})
          console.log(data, details);
        }}
        query={{
          key: 'YOUR API KEY',
          language: 'en',
        }}
      />
      
      <GooglePlacesAutocomplete
        placeholder='Search Destination'
        fetchDetails
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          setDestinationPalace({data,details})
          console.log(data, details);
        }}
        query={{
          key: 'YOUR API KEY',
          language: 'en',
        }}
      />

      </View>

      
    </SafeAreaView>
  )
} 
