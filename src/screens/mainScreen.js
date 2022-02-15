import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {CustomButton} from '../cRouter.js';
import {COLOR_MINT, COLOR_MARINE} from '../assets/constants.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const MainScreen = ({navigation}) => {
  const [userInfo, setUserInfo] = useState({id: 0, userID: '', userName: ''});

  useEffect(() => {
    AsyncStorage.getItem('@user', (err, result) => {
      setUserInfo(JSON.parse(result));
    });
  }, []);

  return (
    <View style={mainStyle.container}>
      <CustomButton
        title={'로그아웃'}
        fontSize={23}
        loading={false}
        backgroundColor={COLOR_MINT}
        onPress={() => {
          AsyncStorage.getAllKeys().then(AsyncStorage.multiRemove);
          navigation.navigate('Auth');
        }}
      />
      <Text>{userInfo.id}</Text>
      <Text>{userInfo.userID}</Text>
      <Text>{userInfo.userName}</Text>
    </View>
  );
};

const mainStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
