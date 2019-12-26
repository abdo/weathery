import * as Font from 'expo-font';

const loadAllFonts = (fonts) => fonts.map((font) => Font.loadAsync(font));

export default loadFonts = loadAllFonts([
  // Native Base Fonts
  {
    Roboto: require('../../../node_modules/native-base/Fonts/Roboto.ttf'),
  },
  {
    Roboto_medium: require('../../../node_modules/native-base/Fonts/Roboto_medium.ttf'),
  },
]);
