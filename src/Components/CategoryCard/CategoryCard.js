import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './CategoryCardStyle';
import usePressed from '../../hooks/usePressed';

const CategoryCard = ({onSelect}) => {
  const [ispressed, press, category] = usePressed();
  const [ispressed2, press2, category2] = usePressed();
  const [ispressed3, press3, category3] = usePressed();
  const [ispressed4, press4, category4] = usePressed();

  const handlePress1 = () => {
    press("men's");
    onSelect(category);
  };

  const handlePress2 = () => {
    press2("women's");
    onSelect(category2);
  };
  const handlePress3 = () => {
    press3('jewelery');
    onSelect(category3);
  };
  const handlePress4 = () => {
    press4('electronics');
    onSelect(category4);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.button,
          {backgroundColor: ispressed ? 'green' : '#90caf9'},
        ]}
        onPress={handlePress1}>
        <Text style={styles.text}>men's clothing</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          {backgroundColor: ispressed2 ? 'green' : '#90caf9'},
        ]}
        onPress={handlePress2}>
        <Text style={styles.text}>women's clothing</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          {backgroundColor: ispressed3 ? 'green' : '#90caf9'},
        ]}
        onPress={handlePress3}>
        <Text style={styles.text}>jewelery</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          {backgroundColor: ispressed4 ? 'green' : '#90caf9'},
        ]}
        onPress={handlePress4}>
        <Text style={styles.text}>electronics</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CategoryCard;
