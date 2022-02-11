import React, {useState} from 'react';
import {View, StyleSheet, Text, Alert} from 'react-native';
import {CustomCheckBox, HorizontalLine, CustomButton} from '../cRouter';
import {COLOR_MARINE} from '../assets/constants';

export const TermScreen = ({navigation}) => {
  const [checked, setChecked] = useState({
    first: false,
    second: false,
    third: false,
  });

  const {first, second, third} = checked;

  const allCheck = () => {
    if (first === false || second === false || third === false) {
      setChecked({...checked, first: true, second: true, third: true});
    } else {
      setChecked({...checked, first: false, second: false, third: false});
    }
  };

  const onSubmit = (chekOne, checkTwo) => {
    if (chekOne === true && checkTwo === true) {
      navigation.navigate('Register');
    } else {
      Alert.alert('필수 약관에 동의해주시기 바랍니다.');
    }
  };

  return (
    <View style={style.container}>
      <View style={{flex: 0.1}} />
      <Text style={style.text}>약관 동의</Text>

      <HorizontalLine textWidth={50} backgroundColor="black" text="Check" />
      <CustomCheckBox
        cstyle={style.checkbox}
        size={30}
        isChecked={first}
        text="이용약관 동의 (필수)"
        onPress={() => {
          setChecked({...checked, first: !first});
        }}
      />
      <CustomCheckBox
        cstyle={style.checkbox}
        size={30}
        isChecked={second}
        text="개인정보 수집 이용 동의 (필수)"
        onPress={() => {
          setChecked({...checked, second: !second});
        }}
      />
      <CustomCheckBox
        cstyle={style.checkbox}
        size={30}
        isChecked={third}
        text="개인정보 제3자 제공 동의 (선택)"
        onPress={() => {
          setChecked({...checked, third: !third});
        }}
      />
      <HorizontalLine textWidth={40} backgroundColor="black" text="All" />
      <CustomCheckBox
        cstyle={style.checkbox}
        size={30}
        isChecked={first && second && third}
        text="전체 동의"
        onPress={allCheck}
      />
      <View style={style.buttonview}>
        <CustomButton
          title={'회원 가입'}
          fontSize={23}
          loading={false}
          backgroundColor={COLOR_MARINE}
          onPress={() => {
            onSubmit(first, second);
          }}
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
    flex: 0.15,
    textAlign: 'center',
  },
  checkbox: {
    flex: 0.1,
    margin: 15,
  },
  checktext: {
    fontSize: 15,
    textDecorationLine: 'none',
  },
  buttonview: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
