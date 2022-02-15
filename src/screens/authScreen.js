import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {CustomButton} from '../cRouter.js';
import {COLOR_MINT, COLOR_MARINE} from '../assets/constants.js';

export const AuthScreen = ({navigation}) => {
  return (
    <View style={authStyle.container}>
      <CustomButton
        title={'로그인'}
        fontSize={23}
        loading={false}
        backgroundColor={COLOR_MINT}
        onPress={() => {
          navigation.navigate('Login');
        }}
      />
      <CustomButton
        title={'회원 가입'}
        fontSize={23}
        loading={false}
        backgroundColor={COLOR_MARINE}
        onPress={() => {
          navigation.navigate('Terms');
        }}
      />
    </View>
  );
};

const authStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
