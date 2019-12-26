import React from 'react';
import Proptypes from 'prop-types';

import {
  ListContainer,
  ListItemContainer,
  ListItem,
  TempContainer,
} from './styledComponents';

const List = ({ cities, getCityTemp, loading }) => {
  return (
    <ListContainer idLoading={loading}>
      {cities.map((city) => (
        <ListItemContainer key={city.fullName}>
          <ListItem onClick={() => getCityTemp(city.key)}>
            {city.fullName}
          </ListItem>
          {city.temp && <TempContainer>{city.temp}</TempContainer>}
        </ListItemContainer>
      ))}
    </ListContainer>
  );
};

List.propTypes = {
  cities: Proptypes.arrayOf(Proptypes.shape({})),
  getCityTemp: Proptypes.func,
  loading: Proptypes.bool,
};

List.defaultProps = {
  cities: [],
  getCityTemp: () => null,
  loading: false,
};

export default List;
