import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor:'#b8b8b8',
    margin:10,
    justifyContent:'space-between',
    flexDirection:'row',
    alignItems:'center',
    padding:10
  },
  inputText:{
    fontSize:18,
    fontWeight:'500',
    color:'#6e6e6e'
  },
  timeContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    width:100,
    backgroundColor:'#fff',
    padding:10,
    borderRadius:100
  },
  historyContainer:{
    flexDirection:'row',
    alignItems:'center',
    padding:20,
    borderBottomWidth:1,
    borderColor:'#a3a3a3'
  },
  iconContainer:{
    backgroundColor:'#b3b3b3',
    padding:10,
    borderRadius:25
  },
  destinationText:{
    marginLeft:10,
    fontWeight:'500',
    fontSize:16
  }
})

export default styles;