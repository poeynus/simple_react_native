import React, {useState} from 'react';
import {COLOR_MARINE} from '../assets/constants.js';
import {View, StyleSheet, Text, Alert} from 'react-native';
import {ButtonInput, CustomButton, NormalInput} from '../cRouter';
import {checkEmail, checkEmailCode, chagePW} from '../api/service.js';

export const ChangePWScreen = ({navigation}) => {
  const [check, setCheck] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const {userEmail, userCode, userID, userPW} = userInfo;

  const submit = () => {
    chagePW(userID, userPW)
      .then(response => {
        Alert.alert('변경이 완료되었습니다.');
        navigation.navigate('Login');
      })
      .catch(error => {
        console.log(error);
        Alert.alert('다시 시도해주시기 바랍니다.');
      });
  };
  return (
    <View style={style.container}>
      <View style={{flex: 0.1}} />
      <Text style={style.text}>비밀번호 재설정</Text>
      <ButtonInput
        label="이메일 인증"
        btnTitle="코드 발급"
        placeholder="  이메일을 확인해주세요"
        value={userEmail}
        onChangeText={v => {
          setUserInfo({...userInfo, userEmail: v});
        }}
        onPress={() => {
          checkEmail(userEmail)
            .then(response => {
              setIsClick(true);
              Alert.alert('이메일을 확인해주세요');
            })
            .catch(error => {
              Alert.alert('존재하지 않는 이메일 입니다.');
            });
        }}
      />
      {isClick && (
        <ButtonInput
          label="이메일 확인"
          btnTitle="코드 확인"
          placeholder="  인증코드 6자"
          value={userCode}
          onChangeText={v => {
            setUserInfo({...userInfo, userCode: v});
          }}
          onPress={() => {
            checkEmailCode(userEmail, userCode)
              .then(response => {
                setCheck(true);
                Alert.alert('인증 되었습니다.');
              })
              .catch(error => {
                setCheck(false);
                Alert.alert('인증코드가 일치하지 않습니다.');
              });
          }}
        />
      )}
      {check && (
        <>
          <NormalInput
            label="아이디"
            placeholder="  아이디를 입력해주세요"
            inputColor="black"
            onChangeText={v => {
              setUserInfo({...userInfo, userID: v});
            }}
            entry={false}
            value={userID}
          />
          <NormalInput
            label="비밀번호 재설정"
            placeholder="  새 비밀번호를 입력해주세요"
            inputColor="black"
            onChangeText={v => {
              setUserInfo({...userInfo, userPW: v});
            }}
            entry={true}
            value={userPW}
          />
          <View style={style.buttonview}>
            <CustomButton
              title={'비밀번호 재설정'}
              fontSize={23}
              loading={false}
              backgroundColor={COLOR_MARINE}
              onPress={submit}
            />
          </View>
        </>
      )}
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
