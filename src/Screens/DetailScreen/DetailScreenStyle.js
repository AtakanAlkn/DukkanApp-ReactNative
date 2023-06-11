import {StyleSheet, Dimensions} from 'react-native';

const window = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: window.width,
    height: window.height / 3,
    resizeMode: 'contain',
    backgroundColor: 'white',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
    margin: 10,
  },
  description: {
    margin: 10,
  },
  price: {
    textAlign: 'right',
    margin: 10,
    color: 'black',
  },
});
