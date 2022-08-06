/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable prettier/prettier */
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Keyboard,
} from 'react-native';
import React, {useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import postData from '../../../assets/data/posts_data';
import {useNavigation} from '@react-navigation/native';

const Post = () => {
  const navigation = useNavigation();
  return (
    <View>
      {postData.map((data, index) => {
        const [liked, setliked] = useState(data.isLiked);
        const [bookmark, setBookmark] = useState(false);
        return (
          <View
            key={data.id}
            style={{
              paddingBottom: 10,
              borderBottomColor: 'gray',
              borderBottomWidth: 0.1,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 15,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  source={data.personImage}
                  style={{width: 40, height: 40, borderRadius: 100}}
                />
                <View style={{paddingLeft: 5}}>
                  <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                    {data.postTitle}
                  </Text>
                </View>
              </View>
              <Feather name="more-vertical" size={20} />
            </View>
            <View
              style={{
                position: 'relative',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={data.postImage}
                style={{width: '100%', height: 400}}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: 20,
                paddingVertical: 15,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity onPress={() => setliked(!liked)}>
                  <AntDesign
                    name={liked ? 'heart' : 'hearto'}
                    style={{
                      paddingRight: 18,
                      fontSize: 20,
                      color: liked ? 'red' : 'black',
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Ionicons
                    name="ios-chatbubble-outline"
                    style={{
                      paddingRight: 10,
                      fontSize: 20,
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Feather
                    name="navigation"
                    style={{
                      paddingRight: 10,
                      fontSize: 20,
                    }}
                  />
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={() => setBookmark(!bookmark)}>
                <FontAwesome
                  name={bookmark ? 'bookmark' : 'bookmark-o'}
                  size={20}
                />
              </TouchableOpacity>
            </View>
            <View style={{paddingHorizontal: 20}}>
              <Text>
                Liked by {liked ? 'you and ' : ''}{' '}
                {liked ? data.likes + 1 : data.likes}
              </Text>
              <Text>
                <Text
                  style={{fontWeight: '700', fontSize: 14, paddingVertical: 2}}>
                  {data.postTitle}
                </Text>
                {data.description}
              </Text>
              <Text style={{paddingVertical: 5}}>
                View all {data.comments} comments
              </Text>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    source={data.personImage}
                    style={{
                      width: 25,
                      height: 25,
                      backgroundColor: 'orange',
                      borderRadius: 100,
                      marginRight: 20,
                    }}
                  />
                  <TextInput
                    placeholder="Add a comment... "
                    style={{opacity: 0.5}}
                  />
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Entypo
                    name="emoji-happy"
                    style={{fontSize: 15, color: 'lightgreen', marginRight: 10}}
                  />
                  <Entypo
                    name="emoji-neutral"
                    style={{fontSize: 15, color: 'pink', marginRight: 10}}
                  />
                  <Entypo
                    name="emoji-sad"
                    style={{fontSize: 15, color: 'red', marginRight: 10}}
                  />
                  <TouchableOpacity onPress={() => Keyboard.dismiss()}>
                    <Feather
                      name="send"
                      style={{color: 'black', fontSize: 15}}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({});
