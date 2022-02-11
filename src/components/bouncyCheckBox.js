import React from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {COLOR_MARINE, COLOR_WHITE} from '../assets/constants';
import {StyleSheet} from 'react-native';

export const CustomCheckBox = ({size, isChecked, text, onPress, cstyle}) => {
  return (
    <BouncyCheckbox
      size={size}
      style={cstyle}
      isChecked={isChecked}
      fillColor={COLOR_MARINE}
      unfillColor={COLOR_WHITE}
      text={text}
      iconStyle={{borderColor: COLOR_MARINE, borderRadius: 1}}
      textStyle={style.checktext}
      disableBuiltInState
      onPress={onPress}
    />
  );
};

const style = StyleSheet.create({
  checktext: {
    fontSize: 20,
    textDecorationLine: 'none',
  },
});
