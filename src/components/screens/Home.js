/* eslint-disable jsx-quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomStatusBar from '../ui/status_bar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Stories from '../screenComponents/Stories';
import Post from '../screenComponents/Post';

const Home = () => {
  return (
    <View style={styles.container}>
      {/* Status bar */}
      <CustomStatusBar backgroundColor="white" barStyle="dark-content" />
      {/* header start */}
      <View style={styles.headerContainer}>
        <View style={styles.headerLefttSide}>
          <Text style={styles.Instalogo}>Instagram</Text>
          <Ionicons
            name="chevron-down"
            style={{fontSize: 20, color: 'black', marginLeft: 10}}
          />
        </View>
        <View style={styles.headerRightSide}>
          <Ionicons
            name="chatbubble-ellipses-outline"
            style={{color: 'black', marginLeft: 25, fontSize: 23}}
          />
        </View>
      </View>
      {/* header end */}
      {/* Stories Start */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <Stories />
        <Post />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical:20,
          }}>
          <Ionicons name="ios-reload-circle-sharp"  style={{fontSize:60, opacity:0.6}}/>
        </View>
      </ScrollView>
      {/* Stories End */}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
  },
  headerContainer: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 20,
  },
  headerLefttSide: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Instalogo: {
    fontFamily: 'Lobster-Regular',
    fontSize: 26,
    color: 'black',
  },
  headerRightSide: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
