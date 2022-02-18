import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Card} from 'react-native-elements';

export const CustomCard = ({
  postCategory,
  nameStore,
  postTitle,
  postContent,
  postURL,
  costOrderMin,
  costOrderRemain,
  postState,
  postUpTime,
  userName,
  userID,
  postNum,
}) => {
  return (
    <View style={{marginBottom: 20}}>
      <Card>
        <Card.Title style={{fontSize: 20}}>{postTitle}</Card.Title>
        <Card.Divider />
        <View style={style.vcontainer}>
          <View style={{marginLeft: 20}}>
            <Text style={style.stitle}>가게 이름</Text>
            <Text style={style.store}>{nameStore}</Text>
          </View>
          <View style={{marginLeft: 20}}>
            <Text style={style.stitle}>내용</Text>
            <Text style={style.store}>{postContent}</Text>
          </View>
          <View style={{marginLeft: 20}}>
            <Text style={style.stitle}>배달 최소 주문 금액</Text>
            <Text style={style.store}>{costOrderMin} 원</Text>
          </View>
          <View style={{marginLeft: 20}}>
            <Text style={style.stitle}>현재 필요한 금액</Text>
            <Text style={style.store}>{costOrderRemain} 원</Text>
          </View>
        </View>
      </Card>
    </View>
  );
};

const style = StyleSheet.create({
  vcontainer: {justifyContent: 'center'},
  stitle: {marginBottom: 5, fontWeight: 'bold', fontSize: 18},
  store: {fontSize: 24, marginBottom: 30},
});
