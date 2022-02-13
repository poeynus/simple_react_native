import React, {useState} from 'react';
import {View, StyleSheet, Text, Alert} from 'react-native';
import {Input} from 'react-native-elements';
import {NormalInput, ButtonInput, CustomButton} from '../cRouter';
import {COLOR_MARINE} from '../assets/constants.js';
import {
  duplicateUserID,
  duplicateUserEmail,
  duplicateUserName,
  registerNew,
} from '../api/service';

export const RegisterScreen = () => {
  const [userInfo, setUserInfo] = useState({});
  const [checkUser, setCheckUser] = useState({});

  const {userID, userPW, userCheckPW, userEmail, userName, userPhone} =
    userInfo;

  const {dupID, dupEmail, dupName} = checkUser;

  const dupResult = result => {
    let msg = '';
    if (result) {
      msg = '다른 것을 사용해주세요.';
    } else {
      msg = '사용 가능합니다.';
    }

    return Alert.alert(msg);
  };

  const submit = () => {
    console.log(userInfo);
    registerNew(userID, userPW, userEmail, userName, userPhone)
      .then(response => {
        Alert.alert('이메일을 통해 인증해주세요');
      })
      .catch(error => {
        Alert.alert('입력 정보를 확인해주세요');
        console.log(error);
      });
  };

  return (
    <View style={style.container}>
      <View style={{flex: 0.1}} />
      <Text style={style.text}>회원 가입</Text>
      <ButtonInput
        label="아이디"
        btnTitle="중복 확인"
        placeholder="  example01"
        value={userID}
        onChangeText={v => {
          setUserInfo({...userInfo, userID: v});
        }}
        onPress={() => {
          duplicateUserID(userID)
            .then(response => {
              response.data.data.map(item =>
                setCheckUser({...checkUser, dupID: item.result}),
              );
              dupResult(false);
            })
            .catch(error => {
              setCheckUser({...checkUser, dupID: true});
              console.log(error);
              dupResult(true);
            });
        }}
      />
      <NormalInput
        label="비밀번호"
        placeholder="  Password"
        inputColor="black"
        onChangeText={v => {
          setUserInfo({...userInfo, userPW: v});
        }}
        entry={true}
        value={userPW}
      />
      <NormalInput
        label="비밀번호 확인"
        placeholder="  Password2"
        inputColor="black"
        onChangeText={v => {
          setUserInfo({...userInfo, userCheckPW: v});
        }}
        entry={true}
        value={userCheckPW}
      />
      <ButtonInput
        label="이메일"
        btnTitle="중복 확인"
        placeholder="  example@nav.com"
        value={userEmail}
        onChangeText={v => {
          setUserInfo({...userInfo, userEmail: v});
        }}
        onPress={() => {
          duplicateUserEmail(userEmail)
            .then(response => {
              response.data.data.map(item =>
                setCheckUser({...checkUser, dupEmail: item.result}),
              );
              dupResult(false);
            })
            .catch(error => {
              setCheckUser({...checkUser, dupEmail: true});
              dupResult(true);
            });
        }}
      />
      <ButtonInput
        label="닉네임"
        btnTitle="중복 확인"
        placeholder="  닉네임(2~10자 이내)"
        value={userName}
        onChangeText={v => {
          setUserInfo({...userInfo, userName: v});
        }}
        onPress={() => {
          duplicateUserName(userName)
            .then(response => {
              response.data.data.map(item =>
                setCheckUser({...checkUser, dupName: item.result}),
              );
              dupResult(false);
            })
            .catch(error => {
              setCheckUser({...checkUser, duName: true});
              dupResult(true);
            });
        }}
      />
      <NormalInput
        label="전화번호"
        placeholder="  01012345678"
        inputColor="black"
        onChangeText={v => {
          setUserInfo({...userInfo, userPhone: v});
        }}
        value={userPhone}
      />
      <View style={style.buttonview}>
        <CustomButton
          title={'회원 가입'}
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
