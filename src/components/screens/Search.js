/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import SearchBox from '../screenComponents/SearchBox';
import SearchContent from '../screenComponents/SearchContent';

const Search = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const [image, setImage] = useState(null);
  const getData = data => {
    setImage(data);
  };
  return (
    <View
      style={{
        width: wp('100%'),
        height: hp('100%'),
        backgroundColor: 'white',
        position: 'relative',
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SearchBox />
        <SearchContent data={getData} />
        <TouchableOpacity
          style={{
            marginBottom: 55,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <AntDesign name="pluscircleo" size={40} style={{opacity: 0.6}} />
        </TouchableOpacity>
      </ScrollView>
      {image ? (
        <View
          style={{
            position: 'absolute',
            zIndex: 1,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(52,52,52,52,0.8)',
          }}>
          <StatusBar backgroundColor="#525252" barStyle="dark-content" />
          <View
            style={{
              position: 'absolute',
              top: windowHeight / 6,
              left: windowWidth / 18,
              backgroundColor: 'white',
              width: wp('89%'),
              height: hp('68%'),
              borderRadius: 15,
              zIndex: 1,
              elevation: 50,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 10,
                paddingHorizontal: 15,
              }}>
              <Image
                source={image}
                style={{
                  width: wp('7%'),
                  height: hp('4%'),
                  borderRadius: 100,
                }}
              />
              <View style={{paddingLeft: 8}}>
                <Text style={{fontSize: 12, fontWeight: '600'}}>
                  abdul_mateen_02
                </Text>
              </View>
            </View>
            <Image source={image} style={{width: '100%', height: '80%'}} />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                width: '100%',
                padding: 8,
              }}>
              <Ionicons name="ios-heart-outline" size={26} />
              <Ionicons name="ios-person-circle-outline" size={26} />
              <Feather name="navigation" size={26} />
            </View>
          </View>
        </View>
      ) : null}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({});
