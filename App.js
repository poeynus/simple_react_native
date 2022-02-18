/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  MainScreen,
  TermScreen,
  RegisterScreen,
  LoginScreen,
  AuthScreen,
  FindIDScreen,
  ChangePWScreen,
  UploadPostScreen,
  PostDetailScreen,
} from './src/sRouter';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

const App = ({navigation}) => {
  LogBox.ignoreAllLogs();
  useEffect(() => {
    AsyncStorage.getItem('@user', (err, result) => {
      if (result) {
        navigation.navigate('Main');
      } else {
        navigation.navigate('Auth');
      }
    });
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth">
        <Stack.Screen name="Auth" component={AuthScreen} />
        <Stack.Screen name="Terms" component={TermScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="FindID" component={FindIDScreen} />
        <Stack.Screen name="ChangePW" component={ChangePWScreen} />
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{gestureEnabled: false, headerShown: false}}
        />
        <Stack.Screen
          name="UploadPost"
          component={UploadPostScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PostDetail"
          component={PostDetailScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
