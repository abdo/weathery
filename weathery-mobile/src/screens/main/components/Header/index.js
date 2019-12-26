import React from 'react';
import {
  Container,
  Header as NativeBaseHeader,
  Left,
  Body,
  Right,
  Title,
} from 'native-base';
import { Image } from 'react-native';

import { colors } from '../../../../assets/styles/base';
const logo = require('../../../../assets/images/logo192.png');

const Header = () => {
  return (
    <NativeBaseHeader style={{ height: 80, backgroundColor: colors.secondary }}>
      <Body
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 20,
          flexDirection: 'row',
        }}
      >
        <Image style={{ width: 30, height: 30 }} source={logo} />
        <Title style={{ marginLeft: 20 }}>Weathery</Title>
      </Body>
    </NativeBaseHeader>
  );
};

export default Header;
