import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container :{
    flexDirection:'row',
    alignItems:'center',
    padding:20
  },
  image:{
    height:80,
    width:80,
    resizeMode:'contain'
  },
  midContainer:{
    flex:1,
    marginHorizontal:14
  },
  type:{
    fontWeight:'bold',
    fontSize:18,
    marginBottom:5
  },
  time:{
    color:'#5d5d5d'
  },
  rightContainer:{
    width:100,
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'flex-end'
  },
  price:{
    paddingLeft:4,
    fontWeight:'bold'
  }
});

export default styles;