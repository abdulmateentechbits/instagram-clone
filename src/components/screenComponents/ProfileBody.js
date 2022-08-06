/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

export const ProfileBody = ({
  id,
  name,
  profileImage,
  follow,
  post,
  followers,
  accountName,
  followings,
}) => {
  return (
    <View>
      {accountName ? (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{fontSize: 16, fontWeight: '600'}}>{accountName}</Text>
            <Feather
              name="chevron-down"
              style={{color: 'black', fontSize: 20, opacity: 0.6}}
            />
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Feather
              name="plus-square"
              style={{paddingHorizontal: 15}}
              size={25}
              color="black"
            />
            <Feather
              name="menu"
              style={{paddingHorizontal: 15}}
              size={25}
              color="black"
            />
          </View>
        </View>
      ) : null}
      {/* account name                                                                */}
      <View>
        {accountName ? (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              paddingVertical: 10,
            }}>
            <View style={{alignItems: 'center'}}>
              <Image
                source={profileImage}
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 100,
                  resizeMode: 'cover',
                }}
              />
              <Text style={{paddingVertical: 10, fontWeight: 'bold'}}>
                {name}
              </Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
                {post}
              </Text>
              <Text style={{fontSize: 15, color: 'black'}}>Posts</Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
                {followers}
              </Text>
              <Text style={{fontSize: 15, color: 'black'}}>Followers</Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <Text style={{fontSize: 15, fontWeight: 'bold', color: 'black'}}>
                {followings}
              </Text>
              <Text style={{fontSize: 15, color: 'black'}}>Following</Text>
            </View>
          </View>
        ) : null}
      </View>
    </View>
  );
};

export const ProfileBottons = ({id, name, accountName, profileImage}) => {
  const navigation = useNavigation();
  const [follow, setfollow] = useState(follow);
  return (
    <>
      {id === 0 ? (
        <>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              paddingVertical: 5,
            }}>
            <TouchableOpacity onPress={()=>navigation.push('EditProfile',{name:name,accountName:accountName,profileImage:profileImage})} style={{width:'100%'}}>
              <View
                style={{
                  width: '100%',
                  height: 35,
                  borderRadius: 5,
                  borderWidth: 1,
                  borderColor: '#DEDEDE',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: 'bold',
                    letterSpacing: 1,
                    opacity: 0.8,
                  }}>
                  Edit Profile
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}>
          <TouchableOpacity
            onPress={() => setfollow(!follow)}
            style={{width: '40%'}}>
            <View
              style={{
                width: '100%',
                height: 35,
                backgroundColor: follow ? null : '#0095F6',
                borderRadius: 5,
                borderWidth: follow ? 1 : 0,
                borderColor: '#DEDEDE',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: follow ? 'black' : 'white'}}>
                {follow ? 'Following' : 'Follow'}
              </Text>
            </View>
          </TouchableOpacity>
          <View
            style={{
              width: '42%',
              height: 35,
              borderWidth: 1,
              borderColor: '#DEDEDE	',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
            }}>
            <Text>Message</Text>
          </View>
          <View
            style={{
              width: '12%',
              height: 35,
              borderWidth: 1,
              borderColor: '#DEDEDE	',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
            }}>
            <Feather name="chevron-down" size={20} color="black" />
          </View>
        </View>
      )}
    </>
  );
};
