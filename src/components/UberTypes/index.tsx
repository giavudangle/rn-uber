import React from 'react'
import { View, Text } from 'react-native'
import UberTypeList from '../UberTypeList'

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
    type: 'RollRoyces',
    price: 360000,
    duration: 27,
  },
]


export default function UberTypes({type}:UberTypesProps|any) {
  return (
    <View>
      {UberTypesData.map(type => 
      <UberTypeList 
      id={type.id}
      price={type.price}
      duration={type.duration}
      type={type.type}/>)}
    </View>
  )
}
