import { useNavigation } from '@react-navigation/core';
import React, { useState, useEffect,useRef } from 'react'
import { View, Text, TextInput, SafeAreaView } from 'react-native'

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import PalaceRow from './PalaceRow';

import styles from './styles';

const homePalace = {
  description: 'Home',
  geometry: {
    location: {
      lat: 10.7805149,
      lng: 106.6361969,
    }
  }
}

const workPalace = {
  description: 'Work',
  geometry: {
    location: {
      lat: 10.770626,
      lng: 106.644996,
    }
  }
}


export default function DestinationSearch() {
  const [originPlace, setOriginPalace] = useState<any>(null);
  const [destinationPalace, setDestinationPalace] = useState<any>(null);


  const checkNavigation = () => {
    if (originPlace && destinationPalace) {
      navigation.navigate('SearchResults',{
        originPlace,
        destinationPalace
      })
      //console.warn('Ok to navigate');    
    }
  }

  useEffect(() => {
    checkNavigation();
  }, [originPlace, destinationPalace]);

  const navigation = useNavigation();

  const currentLoc = useRef(null);


  return (
    <SafeAreaView>
      <View style={styles.container}>
        <GooglePlacesAutocomplete
          styles={{
            textInput: styles.textInput,
            container: {...styles.autoCompleteContainer,top:10} ,
            listView: {...styles.listView,top:150},
            separator: styles.separator
          }}
          
          currentLocation={true}
          currentLocationLabel='Current location'
          suppressDefaultStyles
          placeholder='From'
          fetchDetails
          enablePoweredByContainer={false}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            //setOriginPalace({data,details}) need api key
            setOriginPalace({data,details})
            
            //console.log(data, details);
            console.log('set from');

            
          }}
          predefinedPlaces={[homePalace, workPalace]}

          renderDescription={(data) => data.description || ''}
          query={{
            key: 'YOUR API KEY',
            language: 'en',
          }}
          renderRow={(data) => <PalaceRow data={data} />}
        />

        <GooglePlacesAutocomplete
          styles={{
            textInput: styles.textInput,
            container: styles.autoCompleteContainer,
            listView: styles.listView,
            separator: styles.separator
          }}
          placeholder='Destination'
          suppressDefaultStyles
          fetchDetails
          enablePoweredByContainer={false}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            setDestinationPalace({ data, details })
            //console.log(data, details);
            console.log('set to');

          }}
          query={{
            key: 'YOUR API KEY',
            language: 'en',
          }}
          predefinedPlaces={[homePalace, workPalace]}
          renderRow={(data) => <PalaceRow data={data} />}
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
