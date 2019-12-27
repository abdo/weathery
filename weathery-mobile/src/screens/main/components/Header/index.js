import React from 'react';
import {
  Container,
  Header as NativeBaseHeader,
  Body,
  Right,
  Title,
  View,
} from 'native-base';
import { Image, ActivityIndicator } from 'react-native';
import Proptypes from 'prop-types';

import { colors } from '../../../../assets/styles/base';
const logo = require('../../../../assets/images/logo192.png');

const Header = ({ loading }) => {
  return (
    <NativeBaseHeader style={{ height: 80, backgroundColor: colors.secondary }}>
      <Body
        style={{
          alignItems: 'center',
          paddingTop: 20,
        }}
      >
        {loading ? (
          <ActivityIndicator size='large' />
        ) : (
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
            }}
          >
            <Image style={{ width: 30, height: 30 }} source={logo} />
            <Title style={{ marginLeft: 20 }}>Weathery</Title>
          </View>
        )}
      </Body>
    </NativeBaseHeader>
  );
};

Header.propTypes = {
  loading: Proptypes.bool,
};

Header.defaultProps = {
  loading: false,
};

export default Header;
