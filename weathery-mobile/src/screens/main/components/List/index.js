import React from 'react';
import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  Icon,
  Right,
  View,
} from 'native-base';
import Proptypes from 'prop-types';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { colors } from '../../../../assets/styles/base';

const List = ({ cities, getCityTemp }) => {
  return (
    <View>
      {cities.map((city) => (
        <Card style={{ marginTop: 10 }} key={city.name}>
          <CardItem
            style={{ justifyContent: 'space-between', flexDirection: 'column' }}
          >
            <View style={{ flexDirection: 'row', marginBottom: 10 }}>
              <Text style={{ marginRight: 10 }}>🌎</Text>
              <Text>{city.name}</Text>
            </View>
            <TouchableOpacity
              style={{ flexDirection: 'row' }}
              onPress={() => getCityTemp(city.key)}
            >
              <Text style={{ color: colors.darkGray }}>Get Temperature</Text>
            </TouchableOpacity>
          </CardItem>
        </Card>
      ))}
    </View>
  );
};

List.propTypes = {
  cities: Proptypes.arrayOf(Proptypes.shape({})),
  getCityTemp: Proptypes.func,
};

List.defaultProps = {
  cities: [],
  getCityTemp: () => null,
};

export default List;
