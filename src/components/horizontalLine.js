import React from 'react';
import {View, Text} from 'react-native';

export const HorizontalLine = ({textWidth, backgroundColor, text}) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <View style={{flex: 1, height: 1, backgroundColor: backgroundColor}} />
      <View>
        <Text style={{width: textWidth, textAlign: 'center'}}>{text}</Text>
      </View>
      <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
    </View>
  );
};
