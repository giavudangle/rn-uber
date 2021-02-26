import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    height: '100%',
    justifyContent: 'space-around',
    backgroundColor: 'tomato'
  },
  textInput: {
    height: 50,
    padding: 20,
    backgroundColor: '#eee',
    marginVertical: 4,
    marginHorizontal:25,
    borderRadius:50
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10

  },
  iconContainer: {
    backgroundColor: '#a2a2a2',
    padding: 10,
    borderRadius: 50,
    marginRight: 15
  },
  separator: {
    backgroundColor: 'tomato',
    height: 1
  },
  listView: {
    position: 'absolute',
    top: 105,
  },
  autoCompleteContainer: {
    position: 'absolute',
    top: 80,
    left: 10,
    right: 10
  },
  locationText: {

  },
  line:{
    width:2,
    height:50,
    backgroundColor:'white',
    position:'absolute',
    top:50,
    left:19,
    
  },
  circle:{
    width:10,
    height:10,
    backgroundColor:'white',
    position:'absolute',
    top:35,
    left:15,
    borderRadius:500
  },
  square:{
    width:10,
    height:10,
    backgroundColor:'white',
    position:'absolute',
    top:105,
    left:15
  }
})

export default styles;

