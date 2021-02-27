import { useNavigation } from '@react-navigation/core';
import React, { useState, useEffect,useRef } from 'react'
import { View, Text, TextInput, SafeAreaView,Alert } from 'react-native'

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_API_KEY } from '../../config';
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
  const [originPlace, setOriginPlace] = useState<any>(null);
  const [destinationPlace, setDestinationPlace] = useState<any>(null);

  const navigation = useNavigation();



  const checkNavigation = () => {
    if (originPlace && destinationPlace) {
      navigation.navigate('SearchResults',{
        originPlace,
        destinationPlace
      })
    }
  }

  useEffect(() => {
    checkNavigation();
  }, [originPlace, destinationPlace]);





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
            setOriginPlace({data,details})
          }}
          predefinedPlaces={[homePalace, workPalace]}
          renderDescription={(data: any) => data.description || data.vicinity}
          query={{
            key: GOOGLE_API_KEY,
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
            setDestinationPlace({ data, details })
          }}
          query={{
            key: GOOGLE_API_KEY,
            language: 'en',
          }}
          renderRow={( data) => <PalaceRow data={data}/>}
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
