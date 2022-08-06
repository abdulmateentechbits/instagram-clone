/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState, useRef} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import friendsData from '../../../assets/data/friends_profile_data';

const Activity = () => {
  const navigation = useNavigation();
  return (
    <View style={{backgroundColor: 'white', width: '100%', height: '100%'}}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: '700',
          borderBottomWidth: 0.5,
          borderBottomColor: '#DEDEDE',
          padding: 10,
        }}>
        Activity
      </Text>
      <ScrollView style={{margin: 10}} showsVerticalScrollIndicator={false}>
        <Text style={{fontWeight: 'bold'}}>This Week</Text>
        <View style={{flexDirection: 'row', paddingVertical: 10}}>
          {friendsData.slice(0, 3).map((item, index) => {
            return (
              <TouchableOpacity
                key={item.id}
                onPress={() => {
                  navigation.push('FriendProfile', {
                    id: item.id,
                    name: item.name,
                    accountName: item.accountName,
                    profileImage: item.profileImage,
                    follow: item.follow,
                    post: item.post,
                    followers: item.followers,
                    followings: item.followings,
                  });
                }}>
                <Text>{item.name}</Text>
              </TouchableOpacity>
            );
          })}
          <Text>Started following you</Text>
        </View>
        <Text style={{fontWeight: 'bold'}}>Earlier</Text>
        {friendsData.slice(3, 6).map((item, index) => {
          const [follow, setfollow] = useState(item.follow);
          return (
            <View style={{width: '100%'}} key={item.id}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingVertical: 10,
                  width: '100%',
                }}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.push('FriendProfile', {
                      id: item.id,
                      name: item.name,
                      accountName: item.accountName,
                      profileImage: item.profileImage,
                      follow: follow,
                      post: item.post,
                      followers: item.followers,
                      followings: item.followings,
                    });
                  }}
                  key={item.id}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    maxWidth: '60%',
                  }}>
                  <Image
                    source={item.profileImage}
                    style={{
                      width: 45,
                      height: 45,
                      borderRadius: 100,
                      marginRight: 10,
                    }}
                  />
                  <Text style={{fontSize: 15}}>
                    <Text style={{fontWeight: 'bold'}}>{item.name}</Text>, who
                    you might known, is on instagram
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setfollow(!follow)}
                  style={{width: follow ? 72 : 68}}>
                  <View
                    style={{
                      backgroundColor: follow ? '#F3F2F1' : '#3493D9',
                      height: 30,
                      width: '100%',
                      borderRadius: 5,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderWidth: follow ? 1 : 0,
                      borderColor: follow ? '#C6BFBE' : null,
                    }}>
                    <Text
                      style={{
                        color: follow ? 'black' : 'white',
                        fontWeight: '500',
                      }}>
                      {follow ? 'Following' : 'Follow'}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
        <Text style={{fontWeight: 'bold', paddingVertical: 10}}>
          Suggestions for you
        </Text>
        {friendsData.slice(6, 12).map((item, index) => {
          const [follow, setfollow] = useState(item.follow);
          const [close, setclose] = useState(false);

          return (
            <View key={item.id}>
              {close ? null : (
                <View
                  style={{
                    paddingVertical: 10,
                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.push('FriendProfile', {
                          id: item.id,
                          name: item.name,
                          accountName: item.accountName,
                          profileImage: item.profileImage,
                          follow: follow,
                          post: item.post,
                          followers: item.followers,
                          followings: item.followings,
                        });
                      }}
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        maxWidth: '64%',
                      }}>
                      <Image
                        source={item.profileImage}
                        style={{
                          width: 45,
                          height: 45,
                          marginRight: 10,
                          borderRadius: 100,
                        }}
                      />

                      <View style={{width: '100%'}}>
                        <Text style={{fontSize: 14, fontWeight: 'bold'}}>
                          {item.name}
                        </Text>
                        <Text style={{fontSize: 12, opacity: 0.5}}>
                          {item.accountName}
                        </Text>
                        <Text style={{fontSize: 12, opacity: 0.5}}>
                          Suggested for you
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  {/* Right side */}
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    {follow ? (
                      <TouchableOpacity
                        onPress={() => setfollow(!follow)}
                        style={{width: follow ? 82 : 68}}>
                        <View
                          style={{
                            backgroundColor: follow ? '#F3F2F1' : '#3493D9',
                            height: 30,
                            width: '100%',
                            borderRadius: 5,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderWidth: follow ? 1 : 0,
                            borderColor: follow ? '#C6BFBE' : null,
                          }}>
                          <Text style={{color: follow ? 'black' : 'white'}}>
                            {follow ? 'Following' : 'Follow'}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    ) : (
                      <>
                        <TouchableOpacity
                          onPress={() => setfollow(!follow)}
                          style={{width: follow ? 72 : 68}}>
                          <View
                            style={{
                              backgroundColor: follow ? '#F3F2F1' : '#3493D9',
                              height: 30,
                              width: '100%',
                              borderRadius: 5,
                              justifyContent: 'center',
                              alignItems: 'center',
                              borderWidth: follow ? 1 : 0,
                              borderColor: follow ? '#C6BFBE' : null,
                            }}>
                            <Text style={{color: follow ? 'black' : 'white'}}>
                              {follow ? 'Following' : 'Follow'}
                            </Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() => setclose(true)}
                          style={{paddingHorizontal: 10}}>
                          <Ionicons name="ios-close-outline" size={25} />
                        </TouchableOpacity>
                      </>
                    )}
                  </View>
                  {/* Right side end */}
                </View>
              )}
            </View>
          );
        })}
        <Text style={{fontWeight: 'bold', paddingVertical: 10}}>
          See all suggestions
        </Text>
      </ScrollView>
    </View>
  );
};

export default Activity;

const styles = StyleSheet.create({});
