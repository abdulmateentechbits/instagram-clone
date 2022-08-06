/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';

const StoriesCard = ({item, navigation}) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.push('Status', {
          name: item.name,
          image: item.image,
        })
      }>
      <View
        style={{
          position: 'relative',
          paddingHorizontal: 8,
          paddingVertical: 5,
          marginLeft: item.id === 1 ? 5 : 0,
        }}>
        {/* only for the first story */}
        {item.id === 1 && (
          <View
            style={{
              position: 'absolute',
              bottom: 29,
              right: 10,
              zIndex: 1,
            }}>
            <Entypo
              name="circle-with-plus"
              style={{
                fontSize: 20,
                color: '#405de6',
                backgroundColor: 'white',
                borderRadius: 100,
              }}
            />
          </View>
        )}
        {/* For all story */}
        <View
          style={{
            width: 65,
            height: 65,
            borderRadius: 100,
            borderWidth: item.id === 1 ? 0 : 1.8,
            borderColor: '#c13584',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={item.image}
            style={{
              width: '92%',
              height: '92%',
              borderRadius: 100,
              resizeMode: 'cover',
              backgroundColor: 'orange',
            }}
          />
        </View>
        <Text style={{textAlign: 'center', fontSize: 10, marginTop: 5}}>
          {item.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default StoriesCard;

const styles = StyleSheet.create({});
