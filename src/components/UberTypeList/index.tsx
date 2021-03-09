import React from 'react'
import { View, Text, Image, Pressable } from 'react-native'
import styles from './styles'

import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'


type CarDetailTypes = {
  id: string,
  type: string,
  price: number,
  duration: number,
  isSelected: boolean,
  onSelect: () => any

}

export default function UberTypeList(carDetail: CarDetailTypes) {

  console.log(carDetail);
  
  const { type, onSelect, isSelected, price, duration } = carDetail;


  const getCarImage = () => {
    if (type === 'Toyota') {

    }
    switch (type) {
      case 'Toyota':
        return require('../../assets/images/Toyota.jpeg')
      case 'Mercedes':
        return require('../../assets/images/Mercedes.jpeg')
      case 'Mazda':
        return require('../../assets/images/Mazda.jpeg')
    }
  }

  return (
    <TouchableOpacity
      onPress={onSelect}
    >

      <View
        style={[styles.container, {
          backgroundColor: isSelected ? '#CAD5E2' : 'white'
        }]}>
        <Image
          source={getCarImage()}
          style={styles.image}
        />


        <View style={styles.midContainer}>
          <Text style={styles.type}>
            {type} {' '}
            <Ionicons name='person' size={18} />
          4
        </Text>

          <Text style={styles.time}>
            {duration} minutes
        </Text>
        </View>

        <View style={styles.rightContainer}>
          <Ionicons name='pricetag' size={18} color='#00ff00' />
          <Text style={styles.price}>
            {price} VND
        </Text>
        </View>


      </View>
    </TouchableOpacity>

  )
}
