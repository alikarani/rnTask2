import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GetPostScreen from '../screens/GetPostScreen';
import CreatePostScreen from '../screens/CreatePostScreen';
import LoginScreen from '../screens/LoginScreen';

const Auth = createNativeStackNavigator();
const App = createNativeStackNavigator();

export const AuthStack = () => {
  return (
    <Auth.Navigator
      headerMode="screen"
      screenOptions={{
        headerShown: false,
      }}>
      <Auth.Screen name="Login" component={LoginScreen} />
    </Auth.Navigator>
  );
};

export const AppStack = () => {
  return (
    <App.Navigator
      headerMode="screen"
      screenOptions={{
        headerShown: false,
      }}>
      <App.Screen name="GetPost" component={GetPostScreen} />
      <App.Screen name="CreatePost" component={CreatePostScreen} />
    </App.Navigator>
  );
};
