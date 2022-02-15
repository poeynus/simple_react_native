import React from 'react';
import {COLOR_MARINE} from '../assets/constants.js';
import {View, StyleSheet, Text, Alert} from 'react-native';

export const FindIDScreen = () => {
  return (
    <View style={style.container}>
      <View style={{flex: 0.1}} />
      <Text style={style.text}>아이디 찾기</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  text: {
    fontSize: 30,
    flex: 0.3,
    textAlign: 'center',
  },
  buttonview: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
