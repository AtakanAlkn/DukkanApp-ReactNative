import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import ProductsCard from '../../Components/ProductsCard';
import styles from './ProductsScreenStyle';
import Config from '../../../config';
import useFetch from '../../hooks/useFetch';
import Loading from '../../Components/Loading';
import Error from '../../Components/Error';

const ProductsScreen = ({navigation}) => {
  const {error, loading, products} = useFetch(Config.API_URL);

  const handleSelect = id => {
    navigation.navigate('Detail', {id});
  };

  const renderCard = ({item}) => {
    return (
      <ProductsCard product={item} onSelect={() => handleSelect(item.id)} />
    );
  };

  if (error) {
    return <Error />;
  }

  if (loading) {
    return <Loading />;
  }
  return (
    <View>
      <FlatList data={products} renderItem={renderCard} />
    </View>
  );
};
export default ProductsScreen;
