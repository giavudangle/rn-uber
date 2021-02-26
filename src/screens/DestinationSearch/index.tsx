import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, SafeAreaView } from 'react-native'

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import PalaceRow from './PalaceRow';

import styles from './styles';



export default function DestinationSearch() {
  const [originPlace, setOriginPalace] = useState(null);
  const [destinationPalace, setDestinationPalace] = useState<any>(null);


  useEffect(() => {
    if (originPlace && destinationPalace) {
      console.log('Redirect result');

    }

  }, [originPlace, destinationPalace]);


  return (
    <SafeAreaView>
      <View style={styles.container}>
        <GooglePlacesAutocomplete
           styles={{
            textInput: styles.textInput,
            container: {...styles.autoCompleteContainer,top:10},
            listView: styles.listView,
            separator:styles.separator
          }}
          suppressDefaultStyles
          placeholder='From'
          fetchDetails
          enablePoweredByContainer={false}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            setDestinationPalace({ data, details })
            console.log(data, details);
          }}
          query={{
            key: 'YOUR API KEY',
            language: 'en',
          }}
        />

        <GooglePlacesAutocomplete
          styles={{
            textInput: styles.textInput,
            container: styles.autoCompleteContainer,
            listView: styles.listView,
            separator:styles.separator
          }}
          placeholder='Destination'
          suppressDefaultStyles
          fetchDetails
          enablePoweredByContainer={false}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            setDestinationPalace({ data, details })
            console.log(data, details);
          }}
          query={{
            key: 'YOUR API KEY',
            language: 'en',
          }}
          renderRow={(data) => <PalaceRow data={data}/>}
        />

        <View style={styles.circle}>

        </View>
        <View style={styles.line}>
          
        </View>

        <View style={styles.square}>
          
        </View>

      </View>
    </SafeAreaView>
  )
}
