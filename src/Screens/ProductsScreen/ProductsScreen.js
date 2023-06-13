import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, ActivityIndicator, TextInput} from 'react-native';
import ProductsCard from '../../Components/ProductsCard';
import CategoryCard from '../../Components/CategoryCard';
import styles from './ProductsScreenStyle';
import Config from '../../../config';
import useFetch from '../../hooks/useFetch';
import Loading from '../../Components/Loading';
import Error from '../../Components/Error';

const ProductsScreen = ({navigation}) => {
  const {error, loading, products} = useFetch(Config.API_URL);

  products.map(item => {
    //console.log(item.category);
  });
  const [text, setText] = useState([]);

  const handleCategorySelect = category => {
    const filteredText = products.filter(product => {
      const searchedText = category.toLowerCase();
      const currentTitle = product.category.toLowerCase();
      return currentTitle.includes(searchedText);
    });
    setText(filteredText);
    console.log(category);
  };

  useEffect(() => {
    setText(products);
  }, [products]);

  const handleSelect = id => {
    navigation.navigate('Detail', {id});
  };

  const onSearch = t => {
    const filteredText = products.filter(product => {
      const searchedText = t.toLowerCase();
      const currentTitle = product.title.toLowerCase();
      return currentTitle.includes(searchedText);
    });
    setText(filteredText);
  };

  const renderCard = ({item}) => {
    //console.log(item.category);
    return (
      <ProductsCard product={item} onSelect={() => handleSelect(item.id)} />
    );
  };

  /* const renderCategoryCard = ({item}) => {
    return <CategoryCard category={item.category} />;
  };
  */

  if (error) {
    return <Error />;
  }

  if (loading) {
    return <Loading />;
  }
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Ara..."
        onChangeText={onSearch}
      />
      <FlatList
        data={text}
        renderItem={renderCard}
        ListHeaderComponent={<CategoryCard onSelect={handleCategorySelect} />}
      />
    </View>
  );
};
export default ProductsScreen;
