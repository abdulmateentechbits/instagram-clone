/* eslint-disable prettier/prettier */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, Image} from 'react-native';
import Home from '../screens/Home';
import Search from '../screens/Search';
import Reels from '../screens/Reels';
import Activity from '../screens/Activity';
import Profile from '../screens/Profile';
import colors from '../../../assets/colors/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import profImage from '../../../assets/images/profile.jpg';

const ButtomTabNavigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarHideOnKeyboard:true,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 50,
          backgroundColor: colors.white,
        },
        tabBarIcon: ({focused, size, color}) => {
          let IconName;
          if (route.name === 'Home') {
            IconName = focused ? 'home-sharp' : 'ios-home-outline';
            size = focused ? size + 8 : size + 2;
            color = focused ? 'black' : color;
          }
          if (route.name === 'Search') {
            IconName = focused ? 'search' : 'ios-search-outline';
            size = focused ? size + 8 : size + 2;
            color = focused ? 'black' : color;
          }
          if (route.name === 'Reels') {
            IconName = focused ? 'plus-box' : 'plus-box-outline';
            size = focused ? size + 8 : size + 4;
            color = focused ? 'black' : color;
          }
          if (route.name === 'Activity') {
            IconName = focused ? 'ios-heart' : 'ios-heart-outline';
            size = focused ? size + 8 : size + 2;
            color = focused ? 'black' : color;
          }
          if (route.name === 'Profile') {
            IconName = focused ? 'ios-heart' : 'ios-heart-outline';
            size = focused ? size + 15 : size + 2;
            color = focused ? 'black' : color;
          }
          return route.name === 'Reels' ? (
            <MaterialCommunityIcons name={IconName} size={size} color={color} />
          ) : route.name === 'Profile' ? (
            <Image source={profImage} style={styles.tabBarProfileImage} />
          ) : (
            <Ionicons name={IconName} size={size} color={color} />
          );
        },
        headerShown: false,
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Reels" component={Reels} />
      <Tab.Screen name="Activity" component={Activity} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarProfileImage: {
    width: 35,
    height: 35,
    borderRadius: 100,
  },
});

export default ButtomTabNavigation;
