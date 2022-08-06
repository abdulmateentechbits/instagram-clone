/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  ProfileBody,
  ProfileBottons,
} from '../../components/screenComponents/ProfileBody';
import TopTabNavigation from '../navigation/topTabNavigation';

const Profile = () => {
  let circles = [];
  let numsOfCircle = 10;
  for (let index = 0; index < numsOfCircle; index++) {
    circles.push(
      <View key={index}>
        {index === 0 && (
        <View
          style={{
            width: 60,
            height: 60,
            borderWidth: 1,
            opacity: 0.7,
            marginHorizontal: 7,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius:100,
          }}>
          <Entypo name="plus" size={30} />
        </View>
        )
       }
        {index !== 0 && (
        <View
          style={{
            width: 60,
            height: 60,
            borderWidth: 1,
            opacity: 0.3,
            marginHorizontal: 5,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius:100,
            backgroundColor:'black',
          }}>
          {/* <Entypo name="plus" size={30} /> */}
        </View>
        )
       }
      </View>,
    );
  }
  return (
    <View style={{width: '100%', height: '100%', backgroundColor: 'white'}}>
      <View style={{width: '100%', padding: 10}}>
        <ProfileBody
          name="mateentechibits"
          accountName="Abdul Mateen"
          profileImage={require('../../../assets/images/profile.jpg')}
          followers="999K"
          followings="578"
          post="890"
        />
        <ProfileBottons
          id={0}
          name="mateentechibits"
          accountName="Abdul Mateen"
          profileImage={require('../../../assets/images/profile.jpg')}
        />
      </View>
      <View>
        <Text style={{padding: 10, letterSpacing: 1, fontSize: 14}}>
          Story Highlights
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{paddingVertical: 5, paddingHorizontal: 10}}>
            {circles}
        </ScrollView>
      </View>
      <TopTabNavigation />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
