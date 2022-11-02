/* eslint-disable no-unused-vars */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeStackNavigator from './src/navigator/Navigation';

const App = () => {
  return (
    <NavigationContainer>
      <HomeStackNavigator />
    </NavigationContainer>
  );
};

export default App;
