import React from 'react'
import { View, Text } from 'react-native'
import CovidMessage from '../../components/CovidMessage'
import HomeMap from '../../components/HomeMap'
import HomeSearch from '../../components/HomeSearch'

type HomeProps = {

}

export default function HomeScreen(props : HomeProps) {
  return (
    <View> 
      <HomeMap/>
      {/* <CovidMessage/>
      <HomeSearch/> */}
    </View>
  )
}
