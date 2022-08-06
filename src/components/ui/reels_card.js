/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Video from 'react-native-video';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

const ReelsCard = ({item, index, currentIndex}) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  // console.log("item: ",item.video);
  const videoRef = useRef(null);
  const [mute, setMute] = useState(false);
  const [like, setLike] = useState(item.isLike);
  const onBuffer = buffer => {
    console.log('Buffer: ', buffer);
  };

  const onError = error => {
    console.log('error: ', error);
  };

  return (
    <View
      style={{width: windowWidth, height: windowHeight, position: 'relative'}}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => setMute(!mute)}
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
        }}>
        <Video
          videoRef={videoRef}
          onBuffer={onBuffer}
          onError={onError}
          repeat={true}
          resizeMode="cover"
          paused={currentIndex === index ? false : true}
          source={item.video}
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
          }}
        />
      </TouchableOpacity>
      <Ionicons
        name="volume-mute"
        style={{
          fontSize: mute ? 20 : 0,
          color: 'white',
          position: 'absolute',
          top: windowHeight / 2.3,
          left: windowWidth / 2.3,
          backgroundColor: 'rgba(52,52,52,0.6)',
          borderRadius: 100,
          padding: mute ? 10 : 0,
        }}
      />
      <View
        style={{
          position: 'absolute',
          width: windowWidth,
          bottom: 80,
          padding: 10,
          zIndex: 1,
        }}>
        <View style={{}}>
          <TouchableOpacity style={{width: 150}}>
            <View
              style={{width: 100, flexDirection: 'row', alignItems: 'center'}}>
              <View
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 100,
                  backgroundColor: 'white',
                  margin: 10,
                }}>
                <Image
                  source={item.postProfile}
                  style={{
                    width: '100%',
                    height: '100%',
                    resizeMode: 'cover',
                    borderRadius: 100,
                  }}
                />
              </View>
              <Text style={{color: 'white', fontSize: 12}}>{item.title}</Text>
            </View>
          </TouchableOpacity>
          <Text style={{color: 'white', fontSize: 14, marginHorizontal: 10}}>
            {item.description}
          </Text>
          <View style={{flexDirection: 'row', padding: 10}}>
            <Ionicons
              name="ios-musical-note"
              style={{color: 'white', fontSize: 16}}
            />
            <Text style={{color: 'white'}}>Original audio</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 140,
          right: 0,
          alignItems: 'center',
          flexDirection: 'column',
        }}>
        <TouchableOpacity
          onPress={() => {
            setLike(!like);
          }}
          style={{padding: 10}}>
          <AntDesign
            name={like ? 'heart' : 'hearto'}
            style={{color: like ? 'red' : 'white', fontSize: 25}}
          />
          <Text style={{color:'white', fontSize: 16}}>{item.likes}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{padding: 10}}>
          <Ionicons
            name="ios-chatbubble-outline"
            style={{color: 'white', fontSize: 25}}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{padding: 10}}>
          <Ionicons
            name="paper-plane-outline"
            style={{color: 'white', fontSize: 25}}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{padding: 10}}>
          <Feather
            name="more-vertical"
            style={{color: 'white', fontSize: 25}}
          />
        </TouchableOpacity>
        <View
        style={{
          width: 30,
          height: 30,
          borderRadius: 10,
          borderWidth: 2,
          borderColor: 'white',
        }}>
        <Image
          source={item.postProfile}
          style={{
            width: '100%',
            height: '100%',
            resizeMode: 'cover',
            borderRadius: 100,
          }}
        />
      </View>
      </View>
    </View>
  );
};

export default ReelsCard;

const styles = StyleSheet.create({});
