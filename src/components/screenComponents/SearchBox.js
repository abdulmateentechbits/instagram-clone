/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const SearchBox = () => {
  return (
    <View
      style={{
        width: wp('100%'),
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        paddingVertical: 10,
      }}>
      <Ionicons name="search" style={{
        fontSize:18,
        opacity:0.7,
        position:'absolute',
        left:20,
        zIndex:1,
      }} />
      <TextInput placeholder="Search" placeholderTextColor="#909090" style={{
        width:wp('94%'),
        backgroundColor:'#EBEBEB',
        borderRadius:10,
        padding:4,
        fontSize:15,
        paddingLeft:40,
        alignItems:'center',
        justifyContent:'center',
      }} />
    </View>
  );
};

export default SearchBox;

const styles = StyleSheet.create({});
