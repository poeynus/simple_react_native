/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import type {Node} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TextInput,
  ScrollView,
} from 'react-native';

const IM = ({type}) => {
  if (type === 'one') {
    return (
      <View>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc-LaVCUX_5AZOncfaIrhQM7VE8LEIeuEk1w&usqp=CAU',
          }}
          style={styles.hearts}
        />
      </View>
    );
  } else if (type === 'two') {
    return (
      <View>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiOCWCqFKx1tl7p0NRbNEPQPc9cf0SX_cXVQ&usqp=CAU',
          }}
          style={styles.hearts}
        />
      </View>
    );
  }
};

const App: () => Node = () => {
  const [test, setTest] = useState(false);
  const [con, setCon] = useState('');

  const onChangeTe = e => {
    setCon(con);
  };
  return (
    <ScrollView>
      <Text style={{fontSize: 96}}>hihihi</Text>
      <Text style={{fontSize: 96}}>hihihi</Text>
      <Text style={{fontSize: 96}}>hihihi</Text>
      <Text style={{fontSize: 96}}>hihihi</Text>
      <Text style={{fontSize: 96}}>hihihi</Text>
      <Text style={{fontSize: 96}}>hihihi</Text>
      <Text style={{fontSize: 96}}>hihihi</Text>
      <Text style={{fontSize: 96}}>hihihi</Text>
      <Text style={{fontSize: 96}}>hihihi</Text>
      <View style={styles.container}>
        <Text style={styles.hello}>Hello World</Text>
        <IM type="one" />
        <IM type="two" />
        <Button
          onPress={() => {
            setTest(!test);
          }}
          title={test ? 'push' : 'thank'}
        />
        <TextInput
          defaultValue={con}
          onChangeText={onChangeTe}
          placeholder="input"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hello: {
    color: 'red',
  },
  hearts: {
    width: 100,
    height: 100,
  },
});

export default App;
