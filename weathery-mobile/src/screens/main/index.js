import { View, Alert } from 'react-native';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import List from './components/List';
import Spinner from '../../common/components/Spinner';

import secrets from '../../mobileKeys.secret';

const numberOfCitiesShown = 5;

const MainScreen = () => {
  const [loading, setLoading] = useState(false);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    getCities();
  }, []);

  const getCities = () => {
    setLoading(true);
    axios
      .get(
        `https://dataservice.accuweather.com/locations/v1/topcities?apikey=${secrets.accuweatherApiKey}`,
      )
      .then((res) => {
        const citiesObjects = res.data;
        const citiesObjectsSliced = citiesObjects
          .sort((first, second) => first.Rank - second.Rank)
          .slice(0, numberOfCitiesShown);
        const thinCityObjects = citiesObjectsSliced.map((city) => ({
          key: city.Key,
          name: `${city.EnglishName}, ${(city.Country &&
            city.Country.EnglishName) ||
            ''}`,
        }));
        setCities(thinCityObjects);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const getCityTemp = (cityKey) => {
    if (loading) {
      return;
    }
    setLoading(true);
    const selectedCity = cities.find((city) => city.key === cityKey);
    axios
      .get(
        `https://dataservice.accuweather.com/forecasts/v1/daily/1day/28143?apikey=${secrets.accuweatherApiKey}`,
      )
      .then((res) => {
        const tempObject = res.data;
        const minTemp = tempObject.DailyForecasts[0].Temperature.Minimum.Value;
        const minTempUnit =
          tempObject.DailyForecasts[0].Temperature.Minimum.Unit;
        const maxTemp = tempObject.DailyForecasts[0].Temperature.Maximum.Value;
        const maxTempUnit =
          tempObject.DailyForecasts[0].Temperature.Maximum.Unit;

        Alert.alert(
          selectedCity.name,
          `Temperature: Min: ${minTemp}${minTempUnit}, Max: ${maxTemp}${maxTempUnit}`,
          [{ text: 'Ok', onPress: () => null }],
          { cancelable: false },
        );
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <View>
      {loading && <Spinner />}
      <Header />
      <List cities={cities} getCityTemp={getCityTemp} />
    </View>
  );
};

export default MainScreen;
