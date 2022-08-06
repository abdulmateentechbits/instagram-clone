/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
// In App.js in a new project
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ButtomTabNavigation from '../navigation/buttomTabNavigation';
import Status from '../screenComponents/Status';
import FriendProfile from '../screenComponents/FriendProfile';
import EditProfile from '../screenComponents/EditProfile';

function HomeNavigation() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Bottom" component={ButtomTabNavigation} />
        <Stack.Screen name="Status" component={Status} />
        <Stack.Screen name="FriendProfile" component={FriendProfile} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default HomeNavigation;
