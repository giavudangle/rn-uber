import React from 'react'
import { View, Text } from 'react-native'
import UberTypes from '../../components/UberTypes'





type UberTypesProps = {
  id:string,
  type: string,
  price: number,
  duration: number,
}


export default function SearchResults() {
  return (
    <View>
      <UberTypes/>
    </View>
  )
}
