import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {SpeedDial} from 'react-native-elements';

export const CustomDial = ({navigation, isFocus}) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [isFocus]);

  return (
    <SpeedDial
      isOpen={open}
      icon={{name: 'edit', color: '#fff'}}
      openIcon={{name: 'close', color: '#fff'}}
      onOpen={() => setOpen(!open)}
      onClose={() => setOpen(!open)}>
      <SpeedDial.Action
        icon={{name: 'add', color: '#fff'}}
        title="글 쓰러 가기"
        onPress={() => navigation.navigate('UploadPost')}
      />
      <SpeedDial.Action
        icon={{name: 'add', color: '#fff'}}
        title="(미구현)"
        onPress={() => console.log('Delete Something')}
      />
    </SpeedDial>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
