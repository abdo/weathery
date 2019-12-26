import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Header from './components/Header';
import List from './components/List';
import secrets from '../../websiteKeys.secret';
import { Spinner } from './styledComponents';

const numberOfCitiesShown = 5;

const MainPage = () => {
  const [currentStatus, setCurrentStatus] = useState(''); // "getting Cairo weather"
  const [loading, setLoading] = useState(false);
  const [cities, setCities] = useState([]); // [{name:'Cairo', key: '23', temp: 'Min: 34F, Max: 28F' }]

  useEffect(() => {
    getCities();
  }, []);

  const getCities = () => {
    setLoading(true);
    setCurrentStatus('getting cities');
    axios
      .get(
        `http://dataservice.accuweather.com/locations/v1/topcities?apikey=${secrets.accuweatherApiKey}`,
      )
      .then((res) => {
        const citiesObjects = res.data;
        const citiesObjectsSliced = citiesObjects
          .sort((first, second) => first.Rank - second.Rank)
          .slice(0, numberOfCitiesShown);
        const thinCityObjects = citiesObjectsSliced.map((city) => ({
          key: city.Key,
          cityName: city.EnglishName,
          fullName: `${city.EnglishName}, ${(city.Country &&
            city.Country.EnglishName) ||
            ''}`,
        }));
        setCities(thinCityObjects);
      })
      .finally(() => {
        setLoading(false);
        setCurrentStatus('');
      });
  };

  const getCityTemp = (cityKey) => {
    if (loading) {
      return;
    }
    setLoading(true);
    const selectedCity = cities.find((city) => city.key === cityKey);
    setCurrentStatus(`getting temperature for ${selectedCity.cityName}`);
    axios
      .get(
        `http://dataservice.accuweather.com/forecasts/v1/daily/1day/28143?apikey=${secrets.accuweatherApiKey}`,
      )
      .then((res) => {
        const tempObject = res.data;
        const minTemp = tempObject.DailyForecasts[0].Temperature.Minimum.Value;
        const minTempUnit =
          tempObject.DailyForecasts[0].Temperature.Minimum.Unit;
        const maxTemp = tempObject.DailyForecasts[0].Temperature.Maximum.Value;
        const maxTempUnit =
          tempObject.DailyForecasts[0].Temperature.Maximum.Unit;

        const updatedCities = cities.map((city) => {
          if (city.key === cityKey) {
            return {
              ...city,
              temp: `Min: ${minTemp}${minTempUnit}, Max: ${maxTemp}${maxTempUnit}`,
            };
          } else {
            return city;
          }
        });
        setCities(updatedCities);
      })
      .finally(() => {
        setLoading(false);
        setCurrentStatus('');
      });
  };

  return (
    <div>
      <Spinner isLoading={loading} />
      <Header status={currentStatus} />
      <List cities={cities} getCityTemp={getCityTemp} loading={loading} />
    </div>
  );
};

export default MainPage;
