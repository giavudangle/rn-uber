import React from 'react'
import { View, Text,StyleSheet,Dimensions, SafeAreaView,Image,FlatList } from 'react-native'
import MapView , {Marker} from 'react-native-maps';

import styles from './style'

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
    heading: 360,
  }, 
  {
    id: '3',
    type: 'Toyota',
    latitude: 10.777911,
    longitude: 106.656189,
    heading: -50,
  },
];


type MarkerType = {
  id:string,
  type:string,
  latitude:number,
  longitude: number
  heading: number,
}

const getCarTop = (car:MarkerType) => {
  switch(car.type){
    case 'Toyota':
      return require('../../assets/images/top-toyota.png')
    case 'Mercedes':
      return require('../../assets/images/top-mercedes.png')
    case 'Mazda':
      return require('../../assets/images/top-mazda.png')
  }
}


export default function HomeMap() {
  return (
    <View style={styles.container}>
      <MapView 
      showsUserLocation={true}
      initialRegion={{
        latitude: 10.7805149,
        longitude: 106.6383909,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      style={styles.map} >
        
      
      {mockData.map((car) => (
        <Marker 
          key={car.id}
          coordinate={{latitude:car.latitude,longitude:car.longitude}}
        >
        <Image 
          style={{
            width:50,
            height:50,
            resizeMode:'contain',
            transform:[{
              rotate: `${car.heading}deg`
            }]
          }}
          source={getCarTop(car)}/>
        </Marker>
      ))}
      
       
      </MapView>
    </View>
  )
}
