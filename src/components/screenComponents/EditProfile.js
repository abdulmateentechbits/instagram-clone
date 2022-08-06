/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ToastAndroid,
  Image,
  TextInput,
  Dimensions,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

const EditProfile = ({route, navigation}) => {
  const {height,width} = Dimensions.get('screen');
  const ToastMessage = () => {
    ToastAndroid.show('Updated Successfully!', ToastAndroid.SHORT);
  };
  const {name, accountName, profileImage} = route.params;
  return (
    <View style={{width:width,height:height, backgroundColor: 'white'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 10,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="close-outline" size={35} color="black" />
        </TouchableOpacity>
        <Text>Edit Profile</Text>
        <TouchableOpacity
          onPress={() => {
            ToastMessage();
            navigation.goBack();
          }}>
          <Ionicons name="checkmark" size={35} color="#3493D9" />
        </TouchableOpacity>
      </View>
      <View style={{alignItems: 'center', padding: 20}}>
        <Image
          source={profileImage}
          style={{width: 80, height: 80, borderRadius: 100}}
        />
        <Text style={{color: '#3490D9', marginTop: 2}}>
          Change profile photo
        </Text>
      </View>
      <View style={{padding: 10}}>
        <View>
          <Text style={{opacity: 0.5}}>Name</Text>
          <TextInput
            placeholder="name"
            defaultValue={name}
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderBottomColor: '#CDCDCD',
            }}
          />
        </View>
        <View style={{padding: 10}}>
          <Text style={{opacity: 0.5}}>Account Name</Text>
          <TextInput
            placeholder="name"
            defaultValue={accountName}
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderBottomColor: '#CDCDCD',
            }}
          />
        </View>
        <View style={{padding: 10}}>
          <TextInput
            placeholder="Website"
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderBottomColor: '#CDCDCD',
            }}
          />
        </View>
        <View style={{padding: 10}}>
          <TextInput
            placeholder="Bio"
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderBottomColor: '#CDCDCD',
            }}
          />
        </View>
      </View>
      <View style={{paddingHorizontal:20}}>
        <Text
          style={{
            padding: 5,
            marginVertical: 5,
            color: '#3493D9',
            borderBottomWidth: 1,
            borderColor: '#EFEFEF',
          }}>
          Switch to professional accounts
        </Text>
      </View>
      <View style={{padding: 10}}>
        <Text
          style={{
            padding: 10,
            color: '#3493D9',
            borderBottomWidth: 1,
            borderColor: '#EFEFEF',
          }}>
          Personal information setting
        </Text>
      </View>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({});
