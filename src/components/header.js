import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Header, Icon} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const CustomHeader = ({navigation}) => {
  return (
    <Header
      leftComponent={
        <View style={style.headerLeft}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Main');
            }}>
            <Text style={style.textstyle}>배달의 친구</Text>
          </TouchableOpacity>
        </View>
      }
      rightComponent={
        <View style={style.headerRight}>
          <TouchableOpacity
            onPress={() => {
              console.log('ji');
            }}>
            <Text style={style.textstyle}>MY</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{marginLeft: 10}}
            onPress={() => {
              AsyncStorage.getAllKeys().then(AsyncStorage.multiRemove);
              navigation.navigate('Auth');
            }}>
            <Text style={style.textstyle}>로그아웃</Text>
          </TouchableOpacity>
        </View>
      }
      centerComponent={{text: '같이 주문해요!', style: style.heading}}
    />
  );
};

const style = StyleSheet.create({
  heading: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerRight: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 5,
  },
  headerLeft: {
    display: 'flex',
    marginTop: 5,
  },
  textstyle: {
    color: 'white',
    fontWeight: 'bold',
  },
});
