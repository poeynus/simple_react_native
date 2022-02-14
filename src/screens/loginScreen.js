import React, {useState} from 'react';
import {NormalInput, CustomButton} from '../cRouter';
import {View, StyleSheet, Text, Alert, AppState} from 'react-native';
import {COLOR_MARINE} from '../assets/constants.js';
import {login} from '../api/service';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const LoginScreen = ({navigation}) => {
  const [userInfo, setUserInfo] = useState({});
  const {userID, userPW} = userInfo;

  const submit = () => {
    login(userID, userPW)
      .then(response => {
        response.data.data.map(item =>
          AsyncStorage.setItem('user', JSON.stringify(item)),
        );
        navigation.navigate('Home');
      })
      .catch(error => {
        console.log(error);
        Alert.alert('아이디 또는 비밀번호가 일치하지 않습니다.');
      });
  };

  return (
    <View style={style.container}>
      <View style={{flex: 0.1}} />
      <Text style={style.text}>로그인</Text>
      <NormalInput
        label="아이디"
        placeholder="  아이디"
        inputColor="black"
        onChangeText={v => {
          setUserInfo({...userInfo, userID: v});
        }}
        entry={false}
        value={userID}
      />
      <NormalInput
        label="비밀번호"
        placeholder="  비밀번호"
        inputColor="black"
        onChangeText={v => {
          setUserInfo({...userInfo, userPW: v});
        }}
        entry={true}
        value={userPW}
      />
      <View style={style.buttonview}>
        <CustomButton
          title={'로그인'}
          fontSize={23}
          loading={false}
          backgroundColor={COLOR_MARINE}
          onPress={submit}
        />
      </View>
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
