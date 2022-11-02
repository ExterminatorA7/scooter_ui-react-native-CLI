/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Detail = props => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Feather name="chevron-left" color="#FFF" size={25} />
        </TouchableOpacity>
        <Feather name="shopping-cart" color="#FFF" size={25} />
      </View>
      <Image source={require('../img/2.png')} style={styles.img} />
      <View style={styles.cont3}>
        <Text style={styles.title}>Maxx Scooter</Text>
        <Text style={styles.subtitle}>Kyte Energy Magnum Pro STD</Text>
        <View style={styles.cont2}>
          <Text style={{...styles.title, flex: 2, marginTop: 0}}>Colors</Text>
          <View style={styles.selected}>
            <View style={styles.c1} />
          </View>
          <View style={styles.c2} />
          <View style={styles.c3} />
        </View>
        <Text style={styles.text}>
          Kyte Energy Magnum Pro STD Price: The price of the Kyte Energy Magnum
          Pro STD in Delhi is Rs 80,999 (Ex-showroom).
        </Text>
        <View style={styles.cont1}>
          <FontAwesome name="heart-o" color="#000" size={25} />
          <TouchableOpacity
            style={styles.btn}
            onPress={() => props.navigation.navigate('Home')}>
            <Text style={styles.btnText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#121212',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 25,
  },
  cont1: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 25,
  },
  cont2: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginVertical: 25,
  },
  cont3: {
    flex: 1,
    backgroundColor: '#FFF',
    width: '100%',
    borderTopLeftRadius: 25,
    borderTopEndRadius: 25,
    paddingHorizontal: 25,
  },
  img: {
    height: '45%',
    width: '50%',
  },
  title: {
    fontSize: 25,
    marginTop: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  subtitle: {
    fontSize: 20,
    color: '#474747',
    marginTop: 15,
  },
  c3: {
    height: 20,
    width: 20,
    borderRadius: 15,
    backgroundColor: '#529CC0',
  },
  c2: {
    height: 20,
    width: 20,
    borderRadius: 15,
    backgroundColor: '#529C47',
    marginHorizontal: 10,
  },
  c1: {
    height: 20,
    width: 20,
    borderRadius: 15,
    backgroundColor: '#E2443B',
  },
  selected: {
    borderColor: '#E2443B',
    height: 30,
    width: 30,
    borderRadius: 24,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 15,
    paddingRight: 30,
    lineHeight: 25,
  },
  btn: {
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: '#E2443B',
    paddingHorizontal: 80,
    paddingVertical: 10,
    textAlign: 'centre',
    borderRadius: 10,
  },
  btnText: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 20,
    color: '#FFF',
  },
});
