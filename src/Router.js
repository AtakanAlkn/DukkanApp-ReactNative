import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductsScreen from './Screens/ProductsScreen';
import DetailScreen from './Screens/DetailScreen';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Products"
          component={ProductsScreen}
          options={{
            title: 'DÜKKAN',
            headerStyle: {backgroundColor: '#90caf9'},
            headerTitleAlign: 'center',
            headerTitleStyle: {
              color: 'white',
            },
          }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{
            title: 'DÜKKAN',
            headerStyle: {backgroundColor: '#90caf9'},
            headerTitleAlign: 'center',
            headerTitleStyle: {
              color: 'white',
            },
            headerTintColor: 'white',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
