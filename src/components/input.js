import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Input} from 'react-native-elements';
import {COLOR_MINT, COLOR_WHITE} from '../assets/constants';

export const NormalInput = ({
  onChangeText,
  placeholder,
  label,
  inputColor,
  value,
  entry,
  width,
}) => {
  return (
    <Input
      label={label}
      placeholder={placeholder}
      onChangeText={onChangeText}
      inputContainerStyle={{
        borderColor: inputColor,
        borderWidth: 1,
        borderRadius: 5,
      }}
      value={value}
      labelStyle={{marginBottom: 10}}
      secureTextEntry={entry}
      containerStyle={{width: width}}
    />
  );
};

export const ButtonInput = ({
  onChangeText,
  btnTitle,
  inputColor,
  placeholder,
  label,
  value,
  onPress,
  loading,
}) => {
  return (
    <View style={style.btnContainer}>
      <Input
        label={label}
        placeholder={placeholder}
        onChangeText={onChangeText}
        inputContainerStyle={{
          borderColor: inputColor,
          borderWidth: 1,
          borderRadius: 5,
        }}
        value={value}
        labelStyle={{marginBottom: 10}}
        containerStyle={{width: 290}}
      />
      <Button
        title={btnTitle}
        containerStyle={{
          width: 90,
          marginRight: 10,
        }}
        loadingProps={{
          size: 'small',
          color: COLOR_WHITE,
        }}
        loading={loading}
        titleStyle={{fontSize: 15, fontWeight: 'bold'}}
        onPress={onPress}
      />
    </View>
  );
};

const style = StyleSheet.create({
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
