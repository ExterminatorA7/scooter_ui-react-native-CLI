/* eslint-disable no-unused-vars */
import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Home = props => {
  // let [fontsLoaded] = useFonts({
  //   Montserrat_400Regular,
  //   Montserrat_600SemiBold,
  //   Montserrat_700Bold,
  // });
  return (
    <View style={styles.container}>
      <Image source={require('../img/1.png')} style={styles.img} />
      <Text style={styles.title}>Maxx Scooter</Text>
      <Text style={styles.detail}>
        With an updated motor, and integrated anti-theft tech the maxx scooters
        are custom-tunded for the ultimate riding experience
      </Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => props.navigation.navigate('Detail')}>
        <Text style={styles.text}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#121212',
  },
  img: {
    height: '50%',
    width: '120%',
    resizeMode: 'contain',
  },
  title: {
    color: '#FFF',
    fontSize: 30,
    marginTop: 20,
  },
  detail: {
    marginTop: 30,
    color: '#FFF',
    fontSize: 18,
    textAlign: 'center',
    paddingHorizontal: 20,
    lineHeight: 30,
  },
  btn: {
    marginTop: 50,
    marginBottom: 5,
    backgroundColor: '#E2443B',
    paddingHorizontal: 140,
    paddingVertical: 10,
    textAlign: 'centre',
    borderRadius: 10,
  },
  text: {
    fontSize: 30,
    color: '#FFF',
  },
});
