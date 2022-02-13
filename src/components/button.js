import React from 'react';
import {Button} from 'react-native-elements/dist/buttons/Button';

export const CustomButton = ({
  title,
  fontSize,
  loading,
  backgroundColor,
  onPress,
}) => {
  return (
    <Button
      title={title}
      titleStyle={{fontWeight: 'bold', fontSize: fontSize}}
      loading={loading}
      buttonStyle={{
        backgroundColor: backgroundColor,
        borderRadius: 5,
      }}
      containerStyle={{
        marginHorizontal: 50,
        height: 50,
        width: 200,
        marginVertical: 10,
      }}
      onPress={onPress}
      type="button"
    />
  );
};
