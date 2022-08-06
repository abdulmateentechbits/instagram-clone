/* eslint-disable prettier/prettier */
import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import storiesData from '../../../assets/data/stories_data';
import StoriesCard from '../ui/stories_card';
import { useNavigation } from '@react-navigation/native';

const Stories = () => {
  const navigation = useNavigation();

  return (
    <View>
      <FlatList
      data={storiesData}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({item})=><StoriesCard item={item} navigation={navigation} />}
      keyExtractor={(item)=>item.id }

      />
    </View>
  );
};

export default Stories;

const styles = StyleSheet.create({});
