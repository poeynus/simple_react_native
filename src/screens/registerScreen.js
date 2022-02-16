import React, {useState} from 'react';
import {View, StyleSheet, Alert, Text} from 'react-native';
import {Input} from 'react-native-elements';
import {NormalInput, ButtonInput, CustomButton} from '../cRouter';
import {COLOR_MARINE} from '../assets/constants.js';
import {
  duplicateUserID,
  duplicateUserEmail,
  duplicateUserName,
  register,
} from '../api/service';

export const RegisterScreen = ({navigation}) => {
  const [loadingStatus, setLoadingStatus] = useState({});
  const [userInfo, setUserInfo] = useState({});
  const [checkUser, setCheckUser] = useState({
    dupID: true,
    dupEmail: true,
    dupName: true,
  });

  const {idLoading, emailLoading, nameLoading, newLoading} = loadingStatus;
  const {userID, userPW, userCheckPW, userEmail, userName, userPhone} =
    userInfo;
  const {dupID, dupEmail, dupName} = checkUser;

  const onCheckID = e => {
    setLoadingStatus({...loadingStatus, idLoading: true});
    duplicateUserID(userID)
      .then(response => {
        response.data.data.map(item =>
          setCheckUser({...checkUser, dupID: item.result}),
        );
        Alert.alert('사용 가능합니다.');
        setLoadingStatus({...loadingStatus, idLoading: false});
      })
      .catch(error => {
        setCheckUser({...checkUser, dupID: true});
        Alert.alert('다른 것을 사용해주세요.');
        setLoadingStatus({...loadingStatus, idLoading: false});
      });
  };

  const onCheckEmail = () => {
    setLoadingStatus({...loadingStatus, emailLoading: true});
    duplicateUserEmail(userEmail)
      .then(response => {
        response.data.data.map(item =>
          setCheckUser({...checkUser, dupEmail: item.result}),
        );
        Alert.alert('사용 가능합니다.');
        setLoadingStatus({...loadingStatus, emailLoading: false});
      })
      .catch(error => {
        setCheckUser({...checkUser, dupEmail: true});
        Alert.alert('다른 것을 사용해주세요.');
        setLoadingStatus({...loadingStatus, emailLoading: false});
      });
  };

  const onCheckName = () => {
    setLoadingStatus({...loadingStatus, nameLoading: true});
    duplicateUserName(userName)
      .then(response => {
        response.data.data.map(item =>
          setCheckUser({...checkUser, dupName: item.result}),
        );
        Alert.alert('사용 가능합니다.');
        setLoadingStatus({...loadingStatus, nameLoading: false});
      })
      .catch(error => {
        setCheckUser({...checkUser, duName: true});
        Alert.alert('다른 것을 사용해주세요.');
        setLoadingStatus({...loadingStatus, nameLoading: false});
      });
  };

  const submit = () => {
    setLoadingStatus({...loadingStatus, newLoading: true});
    if (dupName === false && dupEmail === false && dupID === false) {
      register(userID, userPW, userEmail, userName, userPhone)
        .then(response => {
          Alert.alert(`${userName}님 환영합니다.`);
          setLoadingStatus({...loadingStatus, newLoading: false});
          navigation.navigate('Login');
        })
        .catch(error => {
          Alert.alert('입력 정보를 확인해주세요');
          setLoadingStatus({...loadingStatus, newLoading: false});
        });
    } else {
      Alert.alert('입력 정보를 확인해주세요');
      setLoadingStatus({...loadingStatus, newLoading: false});
    }
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
        onPress={onCheckID}
        loading={idLoading}
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
        onPress={onCheckEmail}
        loading={emailLoading}
        nativeID="userEmail"
      />
      <ButtonInput
        label="닉네임"
        btnTitle="중복 확인"
        placeholder="  닉네임(2~10자 이내)"
        value={userName}
        onChangeText={v => {
          setUserInfo({...userInfo, userName: v});
        }}
        onPress={onCheckName}
        loading={nameLoading}
        nativeID="userName"
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
          loading={newLoading}
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
