import styled from 'styled-components';
import { colors } from '../../../../assets/styles/base';

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  filter: ${(props) => (props.idLoading ? 'blur(4px)' : '')};
`;

export const ListItem = styled.div`
  width: 200px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  border-radius: 20px;
  background-color: ${colors.secondary};
  color: white;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
  user-select: none;
  box-shadow: 2px 6px ${colors.darkGray};

  &:hover {
    box-shadow: 5px 10px ${colors.darkGray};
  }
  &:active {
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`;

export const ListItemContainer = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const TempContainer = styled.span`
  background-color: ${colors.primary};
  padding: 10px;
  border-radius: 5px;
`;
