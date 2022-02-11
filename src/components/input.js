import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Input, Button} from 'react-native-elements';

export const NormalInput = ({
  onChangeText,
  placeholder,
  label,
  inputColor,
  value,
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
