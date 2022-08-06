/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {ProfileBody, ProfileBottons} from './ProfileBody';
import friendsData from '../../../assets/data/friends_profile_data';

const FriendProfile = ({route, navigation}) => {
  const {
    id,
    name,
    profileImage,
    follow,
    post,
    followers,
    followings,
    accountName,
  } = route.params;
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        padding: 10,
      }}>
      {/* Top header Icon */}
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Ionicons name="arrow-back" style={{color: 'black', fontSize: 20}} />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '92%',
          }}>
          <Text style={{fontSize: 15, fontWeight: 'bold', marginLeft: 10}}>
            {name}
          </Text>
          <Feather name="more-vertical" size={12} color="black" />
        </View>
      </View>
      {/* Top header Icon end */}
      {/* Profile Body Start */}
      <ProfileBody
        id={id}
        name={name}
        profileImage={profileImage}
        follow={follow}
        post={post}
        followers={followers}
        followings={followings}
        accountName={accountName}
      />
      <ProfileBottons id={id} />
      {/* Profile Body End */}
      <View>
        <Text style={{paddingVertical: 10, fontSize: 15, fontWeight: 'bold'}}>
          Suggested for you
        </Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{
            paddingTop: 10,
          }}>
          {name === friendsData.name
            ? null
            : friendsData.map((item, index) => {
                const [follow, setfollow] = useState(false);
                const [close, setclose] = useState(false);

                return (
                  <View key={item.id}>
                    {item.name === name || close ? null : (
                      <View
                        style={{
                          width: 160,
                          height: 200,
                          borderWidth: 0.5,
                          borderRadius: 2,
                          margin: 3,
                          justifyContent: 'center',
                          alignItems: 'center',
                          borderColor: '#DEDEDE',
                          position: 'relative',
                        }}>
                        <TouchableOpacity
                          style={{position: 'absolute', top: 10, right: 10}}>
                          <AntDesign
                            name="close"
                            style={{color: 'black', fontSize: 20, opacity: 0.6}}
                          />
                        </TouchableOpacity>
                        <Image
                          source={item.profileImage}
                          style={{
                            width: 80,
                            height: 80,
                            borderRadius: 100,
                            margin: 10,
                          }}
                        />
                        <Text
                          style={{
                            fontWeight: 'bold',
                            fontSize: 16,
                            color: 'black',
                          }}>
                          {item.name}
                        </Text>
                        <Text
                          style={{
                            fontSize: 12,
                            color: 'black',
                          }}>
                          {item.accountName}
                        </Text>
                        <TouchableOpacity
                        onPress={()=>setfollow(!follow)}
                          style={{width: '80%', paddingVertical: 10}}>
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
                      </View>
                    )}
                  </View>
                );
              })}
        </ScrollView>
      </View>
    </View>
  );
};

export default FriendProfile;

const styles = StyleSheet.create({});
