import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './DetailScreenStyle';
import useFetch from '../../hooks/useFetch';
import Config from '../../../config';
import Error from '../../Components/Error';
import Loading from '../../Components/Loading';

const DetailScreen = ({route}) => {
  const {id} = route.params;
  const {error, loading, products} = useFetch(Config.API_URL + '/' + id);

  if (error) {
    return <Error />;
  }

  if (loading) {
    return <Loading />;
  }
  return (
    <View style={styles.container}>
      <Image source={{uri: products.image}} style={styles.image} />
      <Text style={styles.title}>{products.title}</Text>
      <Text style={styles.description}>{products.description}</Text>
      <Text style={styles.price}>{products.price}</Text>
    </View>
  );
};

export default DetailScreen;
