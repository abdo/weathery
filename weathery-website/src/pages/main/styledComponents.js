import styled, { keyframes } from 'styled-components';
import { colors } from '../../assets/styles/base';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Spinner = styled.div`
  border: 16px solid #f3f3f3;
  border-top: 16px solid ${colors.primary};
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: ${spin} 2s linear infinite;
  position: absolute;
  top: calc(50% - 60px);
  left: calc(50% - 60px);
  z-index: 3;
  display: ${(props) => (props.isLoading ? 'block' : 'none')};
`;
