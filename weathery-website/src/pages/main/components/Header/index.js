import Proptypes from 'prop-types';
import React from 'react';

import logo from '../../../../assets/images/logo.png';

import {
  Container,
  HeadingContainer,
  HeaderImage,
  Heading,
  Subheader,
  StatusIndicator,
} from './stylesComponents';
import getSubheader from './utils';

const Header = ({ status }) => {
  return (
    <Container>
      <HeadingContainer>
        <HeaderImage src={logo} />
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
