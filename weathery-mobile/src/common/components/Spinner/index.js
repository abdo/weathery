import React from 'react';
import { dimensions } from '../../../assets/styles/base';
import { ActivityIndicator, View, Text } from 'react-native';

const Spinner = () => {
  return (
    <View
      style={{
        width: dimensions.fullWidth,
        height: dimensions.fullHeight,
        backgroundColor: 'rgba(79,76,73,0.68)',
        position: 'absolute',
        justifyContent: 'center',
      }}
    >
      <ActivityIndicator size='large' />
    </View>
  );
};

export default Spinner;
