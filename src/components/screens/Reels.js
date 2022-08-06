/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ReelContents from '../screenComponents/ReelContents';


const Reels = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return (
    <View
      style={{
        width: windowWidth,
        height: windowHeight,
        backgroundColor: 'black',
        position: 'relative',
      }}>
      <View
        style={{
          position: 'relative',
          top: 0,
          left: 0,
          right: 0,
          flexDirection: 'row',
          justifyContent: 'space-between',
          zIndex: 1,
          padding: 10,
        }}>
        <Text style={{fontSize: 20,color:'white', fontWeight: 'bold'}}>Reels</Text>
        <Feather name="camera" style={{fontSize: 25}} color="white" />
      </View>
      <ReelContents />
    </View>
  );
};

export default Reels;

const styles = StyleSheet.create({});
