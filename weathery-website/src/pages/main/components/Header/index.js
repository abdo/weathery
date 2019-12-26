import Proptypes from 'prop-types';
import React from 'react';

import logo from '../../../../assets/images/logo.png';

import {
  Container,
  HeadingContainer,
  LogoImage,
  Heading,
  Subheader,
  StatusIndicator,
} from './styledComponents';
import getSubheader from './utils';

const Header = ({ status }) => {
  return (
    <Container>
      <HeadingContainer>
        <LogoImage src={logo} />
        <Heading>Weathery</Heading>
      </HeadingContainer>
      {status ? (
        <StatusIndicator>{status}</StatusIndicator>
      ) : (
        <Subheader>{getSubheader()}</Subheader>
      )}
    </Container>
  );
};

Header.propTypes = {
  status: Proptypes.string,
};

Header.defaultProps = {
  status: '',
};

export default Header;
