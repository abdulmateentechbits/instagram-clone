/* eslint-disable prettier/prettier */
import {StatusBar} from 'react-native';
import React from 'react';

const CustomStatusBar = ({backgroundColor, barStyle}) => {
  return (
    <StatusBar backgroundColor={backgroundColor} barStyle={barStyle} animated={true} />
  );
};

export default CustomStatusBar;
