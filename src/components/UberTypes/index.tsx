import React from 'react'
import { View, Text,Pressable } from 'react-native'
import styles from './styles'
import UberTypeList from '../UberTypeList'
import HomeMap from '../HomeMap'


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

type UberTypeProps = {
  typeState:any,
  onSubmit: () => any
}



export default function UberTypes({typeState,onSubmit}:UberTypeProps) {

  const [selectedType,setSelectedType] = typeState;

 

  return (
    <>
        {
        UberTypesData.map(car => 
          <UberTypeList
            key={car.id}
            id={car.id}
            type={car.type}
            duration={car.duration}
            price={car.price}
            isSelected={car.type ===  selectedType}
            onSelect={() => setSelectedType(car.type)}
          />)
        }

        <Pressable 
        onPress={onSubmit} 
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
