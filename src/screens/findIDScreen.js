import React, {useState} from 'react';
import {COLOR_MARINE} from '../assets/constants.js';
import {View, StyleSheet, Text, Alert} from 'react-native';
import {Button} from 'react-native-elements';
import {NormalInput, CustomButton} from '../cRouter.js';
import {findIDByEmail} from '../api/service.js';

export const FindIDScreen = () => {
  const [loadingStatus, setLoadingStatuse] = useState({});
  const [userInfo, setUserInfo] = useState({});

  const {userPhone, userEmail} = userInfo;
  const {isFindPhone, isLoading} = loadingStatus;

  return (
    <View style={style.container}>
      <View style={{flex: 0.1}} />
      <Text style={style.text}>아이디 찾기</Text>
      <Text style={style.othertext}>아이디를 찾을 방식을 선택하세요.</Text>
      <View style={style.buttonvertical}>
        <Button
          title={'휴대전화'}
          fontSize={23}
          loading={false}
          buttonStyle={{width: 120, height: 100}}
          backgroundColor={COLOR_MARINE}
          onPress={() => {
            setLoadingStatuse({...loadingStatus, isFindPhone: true});
          }}
        />
        <Button
          title={'이메일'}
          fontSize={23}
          loading={false}
          buttonStyle={{width: 120, height: 100}}
          backgroundColor={COLOR_MARINE}
          onPress={() => {
            setLoadingStatuse({...loadingStatus, isFindPhone: false});
          }}
        />
      </View>
      {isFindPhone ? (
        <View style={style.selectview}>
          <NormalInput
            label="휴대폰"
            placeholder="  01012345678"
            inputColor="black"
            onChangeText={v => {
              setUserInfo({...userInfo, userPhone: v});
            }}
            entry={false}
            value={userPhone}
          />
          <View style={style.buttonhorizontal}>
            <CustomButton
              title={'미구현'}
              fontSize={20}
              loading={isLoading}
              backgroundColor={COLOR_MARINE}
              onPress={() => {
                Alert.alert('미구현');
              }}
            />
          </View>
        </View>
      ) : (
        <View style={style.selectview}>
          <NormalInput
            label="이메일"
            placeholder="  example01@naver.com"
            inputColor="black"
            onChangeText={v => {
              setUserInfo({...userInfo, userEmail: v});
            }}
            entry={false}
            value={userEmail}
          />
          <View style={style.buttonhorizontal}>
            <CustomButton
              title={'아이디 찾기'}
              fontSize={20}
              loading={isLoading}
              backgroundColor={COLOR_MARINE}
              onPress={() => {
                setLoadingStatuse({...loadingStatus, isLoading: true});
                findIDByEmail(userEmail)
                  .then(response => {
                    response.data.data.map(
                      item => Alert.alert(`아이디는 ${item.userID} 입니다.`),
                      setLoadingStatuse({...loadingStatus, isLoading: false}),
                    );
                  })
                  .catch(error => {
                    Alert.alert('존재하지 않는 이메일입니다.'),
                      setIsLoading(false);
                  });
              }}
            />
          </View>
        </View>
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
  buttonvertical: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  othertext: {
    fontSize: 20,
    flex: 0.08,
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonhorizontal: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectview: {
    marginTop: 100,
  },
});
