import React from 'react'
import { View, Text,StyleSheet, Pressable,Image } from 'react-native'

import {DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer'

export default function CustomDrawer(props:any) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{backgroundColor:'black',padding:15}}>

        {/* User Avatar Section*/}

        <View style={{
          flexDirection:'row',
          justifyContent:'space-between',
          alignItems:'center'
        }}>
          <Image
            source={require('../assets/profile.jpg')}
            style={{
              backgroundColor:'#cacaca',
              width:70,
              height:70,
              borderRadius:60
            }}
          />
          
          <View style={{marginRight:26}}>
            <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>Vu Dang</Text>
            <Text style={{color:'white',fontSize:16,fontWeight:'400'}}>Diamond Member</Text>
            <Text style={{color:'white',fontSize:14,fontWeight:'300'}}>5.0 *</Text>
          </View>
        </View>



        {/* Messages Section*/}
        <View style={{
          borderTopWidth:1,
          borderBottomWidth:1,
          borderTopColor:'#eee',
          borderBottomColor:'#eee',
          paddingVertical:10,
          marginVertical:30
        }}>
          <Text style={{color:'white'}}>Messages * </Text>
        </View>


        {/* Account Section*/}
        <Pressable style={{paddingVertical:20,marginTop:-20}} onPress={() => console.warn('Press')}>
          <Text style={{color:'white'}}>Become a driver </Text>
        </Pressable>

        <Pressable style={{paddingVertical:5}}  onPress={() => console.warn('Press')}>
          <Text style={{color:'#ddd'}}>Learn more about account</Text>
        </Pressable>
      </View>



      <DrawerItemList {...props}/>
    </DrawerContentScrollView>
  )
}


const styles = StyleSheet.create({

})