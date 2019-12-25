import styled from 'styled-components';

import { colors, fontSizes } from '../../../../assets/styles/base';

export const Container = styled.div`
  background: ${colors.secondary};
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const HeadingContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Heading = styled.p`
  margin: 0;
  font-size: ${fontSizes.lg}px;
  color: ${colors.primary};
  margin-left: 20px;
`;

export const HeaderImage = styled.img`
  width: 42px;
`;

export const Subheader = styled.p`
  color: ${colors.white};
  font-size: ${fontSizes.sm};
`;

export const StatusIndicator = styled.p`
  color: ${colors.lightGray};
  font-weight: normal;
  text-transform: lowercase;
  font-size: ${fontSizes.sm};
`;
