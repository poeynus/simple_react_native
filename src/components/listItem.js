import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import {ListItem, Avatar} from 'react-native-elements';
import {getPostList} from '../api/service';
import {COLOR_MARINE} from '../assets/constants';

export const CustomList = () => {
  const [postList, setPostList] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    getPostList()
      .then(response => {
        response.data.data.map(item => {
          setPostList(item.postList), setCategory(item.category);
        });
      })
      .catch(error => console.log(error));
  }, []);

  const renderPost = ({item}) => (
    <ListItem bottomDivider>
      <Avatar
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyGnV38qI3kabyXoa6e9eOn9960Lcnzj3jGA&usqp=CAU',
        }}
      />
      <ListItem.Content>
        <Text style={style.textTitle}>{item.postTitle}</Text>
        <Text>
          가게: <Text style={style.textStore}>{item.nameStore}</Text>
        </Text>
        <Text style={style.textTime}>{item.postUpTime}</Text>
      </ListItem.Content>
    </ListItem>
  );

  return (
    <FlatList
      keyExtractor={item => {
        item.postNum;
      }}
      data={postList}
      renderItem={renderPost}
    />
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTitle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  textStore: {color: COLOR_MARINE},
  textTime: {
    color: 'gray',
    fontSize: 14,
  },
});
