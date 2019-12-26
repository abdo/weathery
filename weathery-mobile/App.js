import { Root } from 'native-base';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';

import loadFonts from './src/assets/fonts/loadFonts';
import LoadingScreen from './src/common/screens/Loading';
import MainScreen from './src/screens/main';

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    loadAssetsAsync();
  }, []);

  const loadAssetsAsync = async () => {
    await Promise.all(loadFonts);

    setFontLoaded(true);
  };

  if (!fontLoaded) {
    return <LoadingScreen />;
  }

  return (
    <Root>
      <MainScreen />
    </Root>
  );
};

export default App;
