import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 10,
    borderWidth: 1,
    backgroundColor: '#C4B0FF',
  },
  image: {
    minHeight: 100,
    width: 100,
    resizeMode: 'contain',
    backgroundColor: 'white',
  },
  secondContainer: {
    justifyContent: 'space-between',
    flex: 1,
    padding: 5,
  },
  title: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    textAlign: 'right',
    fontStyle: 'italic',
    fontSize: 15,
  },
});
