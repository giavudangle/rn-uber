import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'

import {Ionicons} from '@expo/vector-icons'


type Props = {
  id:string,
  type:string,
  price:number,
  duration:number,
}

export default function UberTypeList(props : Props) {
  
  const getCarImage = () => {
    if(props.type === 'Toyota'){
      
    }
    switch(props.type){
      case 'Toyota':
        return require('../../assets/images/Toyota.jpeg')
      case 'Mercedes':
        return require('../../assets/images/Mercedes.jpeg')
      case 'Mazda':
        return require('../../assets/images/Mazda.jpeg')
    }
  }

  return (
    <View style={styles.container}>
      <Image
        source={getCarImage()}
        style={styles.image}
      />

      
      <View style={styles.midContainer}>
        <Text style={styles.type}>
          {props.type} {' '}
          <Ionicons name='person' size={18}/> 
          4
        </Text>
       
        <Text style={styles.time}>
          {props.duration} minutes
        </Text>
      </View>

      <View style={styles.rightContainer}>
        <Ionicons name='pricetag' size={18} color='#00ff00'/>
        <Text style={styles.price}>
          {props.price} VND
        </Text>
      </View>


    </View>
  )
}
