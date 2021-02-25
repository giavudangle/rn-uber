import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#4080F7',
    padding:10,
    borderTopLeftRadius:10,
    borderTopRightRadius:10
  },
  title:{
    fontSize:18,
    color:'#fff',
    fontWeight:'600'
  },
  text:{
    fontSize:16,
    color:'#fff',
    paddingVertical:8
  },
  learnMore:{
    color:'#fff',
    fontWeight:'bold'
  },
  learnMoreContainer:{
    flexDirection:'row', 
    justifyContent:'flex-start',
    alignItems:'center',
    paddingVertical:6
  }
})

export default styles;