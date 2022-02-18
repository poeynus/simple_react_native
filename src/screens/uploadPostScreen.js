import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, Alert} from 'react-native';
import {COLOR_MARINE} from '../assets/constants';
import {CustomHeader, NormalInput, CustomButton} from '../cRouter';
import {Dropdown} from 'react-native-element-dropdown';
import {getPostList, uploadPost} from '../api/service';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const UploadPostScreen = ({navigation}) => {
  const [category, setCategory] = useState([]);
  const [postInfo, setPostInfo] = useState({});
  const [userInfo, setUserInfo] = useState({});
  const [isFocus, setIsFocus] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {userID, userName} = userInfo;
  const {
    postCategory,
    nameStore,
    postTitle,
    postContent,
    postURL,
    costOrderMin,
    costOrderRemain,
  } = postInfo;

  useEffect(() => {
    getPostList()
      .then(response => {
        response.data.data.map(item => {
          setCategory(item.category);
        });
      })
      .catch(error => {
        console.log(error);
      });

    AsyncStorage.getItem('@user', (err, result) => {
      setUserInfo(JSON.parse(result));
    });
  }, []);

  const renderLabel = () => {
    if (postCategory || isFocus) {
      return (
        <Text style={[style.label, isFocus && {color: 'blue'}]}>카테고리</Text>
      );
    }
    return null;
  };

  const submit = () => {
    setIsLoading(true);
    uploadPost(
      nameStore,
      postCategory,
      postTitle,
      postContent,
      postURL,
      parseInt(costOrderMin),
      parseInt(costOrderRemain),
      userID,
      userName,
    )
      .then(response => {
        Alert.alert('글이 등록되었습니다.');
        setIsLoading(false);
        navigation.goBack();
      })
      .catch(error => {
        Alert.alert('다시 시도해주세요');
        setIsLoading(false);
      });
  };

  return (
    <>
      <CustomHeader navigation={navigation} />
      <View style={style.vcontainer}>
        <View style={{flex: 0.1}} />
        <Text style={style.text}>게시글 작성</Text>
        <View style={style.twoinput}>
          <View style={style.container}>
            {renderLabel()}
            <Dropdown
              style={[style.dropdown, isFocus && {borderColor: 'blue'}]}
              placeholderStyle={style.placeholderStyle}
              selectedTextStyle={style.selectedTextStyle}
              inputSearchStyle={style.inputSearchStyle}
              iconStyle={style.iconStyle}
              data={category}
              search
              maxHeight={300}
              labelField="categoryName"
              valueField="postCategory"
              placeholder={!isFocus ? '카테고리 선택' : '...'}
              searchPlaceholder="검색하기"
              value={postCategory}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={item => {
                setPostInfo({...postInfo, postCategory: item.postCategory});
                setIsFocus(false);
              }}
            />
          </View>
          <NormalInput
            label="가게 이름"
            placeholder="  가게 이름"
            inputColor="black"
            onChangeText={v => {
              setPostInfo({...postInfo, nameStore: v});
            }}
            value={nameStore}
            width={200}
          />
        </View>
        <NormalInput
          label="게시글 제목"
          placeholder="  게시글 제목"
          inputColor="black"
          onChangeText={v => {
            setPostInfo({...postInfo, postTitle: v});
          }}
          value={postTitle}
        />
        <NormalInput
          label="게시글 내용"
          placeholder="  게시글 내용"
          inputColor="black"
          onChangeText={v => {
            setPostInfo({...postInfo, postContent: v});
          }}
          value={postContent}
        />
        <NormalInput
          label="오픈채팅 주소"
          placeholder="  오픈채팅 주소"
          inputColor="black"
          onChangeText={v => {
            setPostInfo({...postInfo, postURL: v});
          }}
          value={postURL}
        />
        <View style={style.twoinput}>
          <NormalInput
            label="배달 최소 주문 금액"
            placeholder="  배달 최소 주문 금액"
            inputColor="black"
            onChangeText={v => {
              setPostInfo({...postInfo, costOrderMin: v});
            }}
            value={costOrderMin}
            width={195}
          />
          <NormalInput
            label="현재 필요한 금액"
            placeholder="  현재 필요한 금액"
            inputColor="black"
            onChangeText={v => {
              setPostInfo({...postInfo, costOrderRemain: v});
            }}
            value={costOrderRemain}
            width={195}
          />
        </View>
        <View style={style.buttonview}>
          <CustomButton
            title={'글 올리기'}
            fontSize={23}
            loading={isLoading}
            backgroundColor={COLOR_MARINE}
            onPress={submit}
          />
        </View>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  vcontainer: {
    flex: 1,
    flexDirection: 'column',
  },
  text: {
    fontSize: 30,
    flex: 0.3,
    textAlign: 'center',
  },
  buttonview: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    padding: 16,
    width: 200,
  },
  dropdown: {
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: '#f2f2f2',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
    color: 'gray',
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  twoinput: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
