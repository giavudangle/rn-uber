import React from 'react'
import { View, Text,Pressable } from 'react-native'
import styles from './styles'
import UberTypeList from '../UberTypeList'
import HomeMap from '../HomeMap'

type UberTypesProps = {
  id:string,
  type: string,
  price: number,
  duration: number,
}
const UberTypesData = [ 
  {
    id: '0',
    type: 'Toyota',
    price: 220000,
    duration: 45,
  },
  {
    id: '1',
    type: 'Mercedes',
    price: 270000,
    duration: 30,
  },
  {
    id: '2',
    type: 'Mazda',
    price: 360000,
    duration: 27,
  },
]


export default function UberTypes({type}:UberTypesProps|any) {
  const confirmBooking = () => {
    console.warn('press');
  }

  return (
    <>
        {
        UberTypesData.map(type => 
          <UberTypeList 
          key={type.id}
          id={type.id}
          price={type.price}
          duration={type.duration}
          type={type.type}/>)
        }

        <Pressable 
        onPress={confirmBooking} 
        style={{
          width:'80%',
          backgroundColor:'black',
          padding:10,
          margin:20,
          alignSelf:'center'
        }}
        >
          <Text
          style={{
            textAlign:'center',
            color:'#fff',
            fontWeight:'bold'
          }}>
            Booking
          </Text>
        </Pressable>
    </>
  )
}
