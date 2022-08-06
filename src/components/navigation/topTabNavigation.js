/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Ionicon from 'react-native-vector-icons/Ionicons';
import imageProfile from '../../../assets/images/post1.jpg';

const TopTabNavigation = () => {
  const Tab = createMaterialTopTabNavigator();
  let square = [];
  let numberOfSquare = 7;
  for (let index = 0; index < numberOfSquare; index++) {
    square.push(
      <View key={index}>
        <View
          style={{
            width: 130,
            height: 150,
            marginVertical: 0.8,
            backgroundColor: 'black',
            opacity: 0.5,
          }}>
          <Image source={imageProfile} style={{width:'100%', height:'100%'}} />
        </View>
      </View>,
    );
  }
  const Posts = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{width: '100%', height: '100%'}}>
        <View
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'white',
            flexWrap: 'wrap',
            flexDirection: 'row',
            paddingVertical: 5,
            justifyContent: 'space-between',
          }}>
          {square}
        </View>
      </ScrollView>
    );
  };
  const Videos = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{width: '100%', height: '100%'}}>
        <View
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'white',
            flexWrap: 'wrap',
            flexDirection: 'row',
            paddingVertical: 5,
            justifyContent: 'space-between',
          }}>
          {square}
        </View>
      </ScrollView>
    );
  };
  const Tags = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{width: '100%', height: '100%'}}>
        <View
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'white',
            flexWrap: 'wrap',
            flexDirection: 'row',
            paddingVertical: 5,
            justifyContent: 'space-between',
          }}>
          {square}
        </View>
      </ScrollView>
    );
  };
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarShowLabel: false,
        tabBarIndicatorStyle: {
          backgroundColor: 'black',
          height: 1.5,
        },
        tabBarIcon: ({focused, color}) => {
          let iconName;
          if (route.name === 'Posts') {
            iconName = focused ? 'ios-apps-sharp' : 'ios-apps-sharp';
            color = focused ? 'black' : 'gray';
          } else if (route.name === 'Videos') {
            iconName = focused ? 'ios-play-circle' : 'ios-play-circle-outline';
            color = focused ? 'black' : 'gray';
          } else if (route.name === 'Tags') {
            iconName = focused ? 'ios-person' : 'ios-person-outline';
            color = focused ? 'black' : 'gray';
          }
          return <Ionicon name={iconName} color={color} size={22} />;
        },
      })}>
      <Tab.Screen name="Posts" component={Posts} />
      <Tab.Screen name="Videos" component={Videos} />
      <Tab.Screen name="Tags" component={Tags} />
    </Tab.Navigator>
  );
};

export default TopTabNavigation;
