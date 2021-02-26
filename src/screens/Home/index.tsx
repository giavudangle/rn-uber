import React,{useState,useEffect} from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import CovidMessage from '../../components/CovidMessage'
import HomeMap from '../../components/HomeMap'
import HomeSearch from '../../components/HomeSearch'
import * as Location from 'expo-location';

import styles from './styles';

export default function HomeScreen() {
  const [location, setLocation] = useState<any>(null);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      console.log(location);
      
      setLocation(location);
    })();
  }, []);




  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mapContainer}>
        <HomeMap />
      </View>

      <View style={styles.covidMessageContainer}>
        <CovidMessage />
      </View>

      <View style={styles.homeSearchContainer}>
        <HomeSearch />
      </View>

    </SafeAreaView>
  )
}


