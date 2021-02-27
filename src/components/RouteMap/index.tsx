import React from 'react'
import { View, Text, StyleSheet, Dimensions, SafeAreaView, Image, FlatList } from 'react-native'
import MapView, { Marker, Polyline } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_API_KEY } from '../../config';

import styles from './styles'

const mockData = [
  {
    id: '0',
    type: 'Mercedes',
    latitude: 10.7805149,
    longitude: 106.6361969,
    heading: 130,
  },
  {
    id: '1',
    type: 'Toyota',
    latitude: 10.770626,
    longitude: 106.644996,
    heading: 0,
  },
  {
    id: '2',
    type: 'Mazda',
    latitude: 10.7779114,
    longitude: 106.6418975,
    heading: 250,
  },
  {
    id: '3',
    type: 'Toyota',
    latitude: 10.777911,
    longitude: 106.656189,
    heading: 30,
  },
];



const getCarTop = (car: string) => {
  switch (car) {
    case 'Toyota':
      return require('../../assets/images/top-toyota.png')
    case 'Mercedes':
      return require('../../assets/images/top-mercedes.png')
    case 'Mazda':
      return require('../../assets/images/top-mazda.png')
  }
}





export default function RouteMap(props: any) {

  const originCoors = props.origin.details.geometry.location;
  const destinationCoors = props.destination.details.geometry.location;

  const originLoc = {
    latitude: originCoors.lat,
    longitude: originCoors.lng,
  };

  const destinationLoc = {
    latitude: destinationCoors.lat,
    longitude: destinationCoors.lng,
  };



  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: 10.7805149,
          longitude: 106.6383909,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={styles.map} >

        <MapViewDirections
          origin={originLoc}
          destination={destinationLoc}
          apikey={GOOGLE_API_KEY}
          strokeWidth={5}
          strokeColor="black"
        />


        <Marker
          coordinate={originLoc}
          title='Your location'
        />
        <Marker
          coordinate={destinationLoc}
          title='Destination'
        />

        <Marker     
          key={100}
          coordinate={originLoc}
        >
        <Image 
          style={{
            width:50,
            height:50,
            resizeMode:'contain',
            transform:[{
              rotate:'180deg'
            }]
          }}
          source={getCarTop('Toyota')}/>
        </Marker>

      </MapView>
    </View>
  )
}
