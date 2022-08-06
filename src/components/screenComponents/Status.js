/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Animated,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Ionic from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import CustomStatusBar from '../ui/status_bar';

const Status = ({navigation, route}) => {
  const [heartColor, setHeartColor] = useState(false);
  const {name, image} = route.params;
  useEffect(() => {
    let timer = setTimeout(() => {
      navigation.goBack();
    }, 10000);
    Animated.timing(progress, {
      toValue: 5,
      duration: 10000,
      useNativeDriver: false,
    }).start();
    return ()=>clearTimeout(timer);
  }, [navigation, progress]);

  const [progress, setProgress] = useState(new Animated.Value(0));
  const animateStatusBar = progress.interpolate({
    inputRange: [0, 5],
    outputRange: ['0%', '100%'],
  });
  return (
    <View
      style={{
        backgroundColor: 'black',
        height: '100%',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <CustomStatusBar backgroundColor="black" barStyle="light-content" />
      {/* Status bar for animation */}
      <View
        style={{
          width: '95%',
          borderWidth: 1,
          backgroundColor: 'gray',
          height: 3,
          position: 'absolute',
          top: 18,
        }}>
        <Animated.View
          style={{
            height: '100%',
            backgroundColor: 'white',
            width: animateStatusBar,
          }}></Animated.View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          padding: 15,
          alignItems: 'center',
          width: '90%',
          position: 'absolute',
          top: 25,
          left: 0,
          marginBottom: 5,
        }}>
        <View
          style={{
            width: 30,
            height: 30,
            borderRadius: 100,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={image}
            style={{
              backgroundColor: 'orange',
              resizeMode: 'cover',
              width: '92%',
              height: '92%',
              borderRadius: 100,
            }}
          />
        </View>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 15,
              fontFamily: 'Roboto-Regular',
              paddingLeft: 20,
            }}>
            {name}
          </Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather
              name="more-vertical"
              style={{
                fontSize: 20,
                color: 'white',
                opacity: 0.6,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Image
        source={image}
        style={{width: '100%', height: hp('70%'), position: 'absolute'}}
      />
      <View
        style={{
          position: 'absolute',
          bottom: 5,
          left: 0,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <TextInput
          placeholder="Send message"
          placeholderTextColor="white"
          style={{
            borderColor: 'white',
            fontSize: 15,
            borderRadius: 15,
            width: wp('70%'),
            borderWidth: 1,
            marginLeft:10,
            color: 'white',
            paddingLeft: 20,
            fontFamily: 'Roboto-Medium',
          }}
        />
        <View
          style={{
            width: wp('30%'),
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => setHeartColor(!heartColor)}>
            <Entypo
              name="heart"
              style={{color: heartColor ? 'red' : 'white', fontSize: 25, marginRight:25}}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather name="send" style={{color: 'white', fontSize: 25}} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Status;

const styles = StyleSheet.create({});
