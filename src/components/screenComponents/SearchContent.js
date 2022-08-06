/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import searchData from '../../../assets/data/search_data';

const SearchContent = ({data}) => {
  return (
    <View>
      {searchData.map((data1, index1) => {
        return (
          <View key={index1}>
            {/* id 1 images */}
            {data1.id === 0 ? (
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                }}>
                {data1.images.map((data2, index2) => {
                  return (
                    <TouchableOpacity
                      onPressIn={() => data(data2)}
                      onPressOut={() => data(null)}
                      key={index2}
                      style={{paddingBottom: 2}}>
                      <Image
                        source={data2}
                        style={{
                          width: wp('33%'),
                          height: hp('20%'),
                          resizeMode: 'cover',
                        }}
                      />
                    </TouchableOpacity>
                  );
                })}
              </View>
            ) : null}
            {/* id 2 images */}
            {data1.id === 1 ? (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    width: wp('67%'),
                  }}>
                  {data1.images.slice(0, 4).map((data3, index3) => {
                    return (
                      <TouchableOpacity
                        onPressIn={() => data(data3)}
                        onPressOut={() => data(null)}
                        key={index3}
                        style={{paddingBotom: 2}}>
                        <Image
                          source={data3}
                          style={{
                            width: wp('33%'),
                            height: hp('21%'),
                          }}
                        />
                      </TouchableOpacity>
                    );
                  })}
                </View>
                <TouchableOpacity
                  onPressIn={() => data(data1.images[5])}
                  onPressOut={() => data(null)}>
                  <Image
                    source={data1.images[5]}
                    style={{
                      width: wp('33%'),
                      height: hp('41%'),
                      resizeMode: 'cover',
                    }}
                  />
                </TouchableOpacity>
              </View>
            ) : null}
            {/* id 3 images */}
            {data1.id === 2 ? (
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <TouchableOpacity
                  onPressIn={() => data(data1.images[2])}
                  onPressOut={() => data(null)}>
                  <Image
                    source={data1.images[2]}
                    style={{
                      width: 260,
                      height: 300,
                    }}
                  />
                </TouchableOpacity>
                <View
                  style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    width: 130,
                  }}>
                  {data1.images.slice(0, 2).map((data4, index4) => {
                    return (
                      <TouchableOpacity
                        onPressIn={() => data(data4)}
                        onPressOut={() => data(null)}
                        style={{paddingBottom: 2}}
                        key={index4}>
                        <Image
                          source={data4}
                          style={{width: 129, height: 150}}
                        />
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>
            ) : null}
          </View>
        );
      })}
    </View>
  );
};

export default SearchContent;

const styles = StyleSheet.create({});
