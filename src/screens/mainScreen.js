import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {CustomButton, CustomHeader, CustomList} from '../cRouter.js';
import {COLOR_MINT, COLOR_MARINE} from '../assets/constants.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const MainScreen = ({navigation}) => {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    AsyncStorage.getItem('@user', (err, result) => {
      setUserInfo(JSON.parse(result));
    });
  }, []);

  return (
    <>
      <CustomHeader navigation={navigation} />
      <CustomList />
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
