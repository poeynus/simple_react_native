import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, Alert} from 'react-native';
import {COLOR_MARINE} from '../assets/constants';
import {getSomePost} from '../api/service';
import {useIsFocused} from '@react-navigation/native';
import {CustomCard, CustomHeader, CustomButton} from '../cRouter';
import {Linking} from 'react-native';

export const PostDetailScreen = ({route, navigation}) => {
  const {postID} = route.params;
  const isFocus = useIsFocused();

  const [postInfo, setPostInfo] = useState([]);
  const [commentInfo, setCommentInfo] = useState({});

  useEffect(() => {
    getSomePost(postID)
      .then(response => {
        response.data.data.map(item => {
          setPostInfo(item.content);
        });
      })
      .catch(error => {
        console.log(error);
      });
  }, [isFocus]);

  return (
    <>
      <CustomHeader navigation={navigation} />
      <View style={style.vcontainer}>
        <View style={{flex: 0.1}} />
        {postInfo &&
          postInfo.map(data => (
            <>
              <Text style={style.text}>지금은 먹어도 살 안쪄</Text>
              <CustomCard
                postCategory={data.postCategory}
                nameStore={data.nameStore}
                postTitle={data.postTitle}
                postContent={data.postContent}
                postURL={data.postURL}
                costOrderMin={data.costOrderMin}
                costOrderRemain={data.costOrderRemain}
                postState={data.postState}
                postUpTime={data.postUpTime}
                userName={data.userName}
                userID={data.userID}
                postNum={data.postNum}
              />
              <View style={style.buttonview}>
                <CustomButton
                  title={'오픈 채팅 하러 가기'}
                  fontSize={23}
                  loading={false}
                  backgroundColor={COLOR_MARINE}
                  onPress={() => {
                    Linking.openURL(data.postURL);
                  }}
                />
              </View>
            </>
          ))}
      </View>
    </>
  );
};

const style = StyleSheet.create({
  vcontainer: {
    flex: 1,
    flexDirection: 'column',
  },
  buttonview: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 26,
    flex: 0.2,
    textAlign: 'center',
  },
  buttonview: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
