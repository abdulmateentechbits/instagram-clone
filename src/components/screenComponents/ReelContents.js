/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React, { useState } from 'react';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import videoData from '../../../assets/data/reels_data';
import ReelsCard from '../ui/reels_card';

const ReelContents = () => {
    const [currentIndex,setCurrentIndex] = useState(0);

    const handleChangeIndexValue = ({index})=>{
        setCurrentIndex(index);
    };

  return (
    <View>
      <SwiperFlatList
      data={videoData}
      onChangeIndex={handleChangeIndexValue}
      vertical={true}
      renderItem={({item,index})=>(<ReelsCard  item={item} index={index} currentIndex={currentIndex} />)}
      keyExtractor={(data,index)=>data.id}

      />
    </View>
  );
};

export default ReelContents;

const styles = StyleSheet.create({});
