import React from 'react'
import { View, Text } from 'react-native'

type HomeProps = {

}

export default function HomeScreen(props : HomeProps) {
  return (
    <View style={{
      height:300,
      backgroundColor:'#3edafc',
      justifyContent:'center',
      alignItems:'center'
    }}>
      <Text>Home Screen</Text>
    </View>
  )
}
