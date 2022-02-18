import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {
  CustomButton,
  CustomHeader,
  CustomList,
  CustomDial,
} from '../cRouter.js';
import {COLOR_MINT, COLOR_MARINE} from '../assets/constants.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/native';

export const MainScreen = ({navigation}) => {
  const isFocus = useIsFocused();
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    AsyncStorage.getItem('@user', (err, result) => {
      setUserInfo(JSON.parse(result));
    });
  }, [isFocus]);

  return (
    <>
      <CustomHeader navigation={navigation} />
      <CustomList navigation={navigation} isFocus={isFocus} />
      <CustomDial navigation={navigation} isFocus={isFocus} />
    </>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
