import { Dimensions } from 'react-native';
import Color from 'color';

// DIMENTIONS

export const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width,
};

Dimensions.addEventListener('change', (dims) => {
  dimensions.fullHeight = dims.window.height;
  dimensions.fullWidth = dims.window.width;
});

export const sizes = {
  bottomTabHeight: 65,
  headerHeight: 60,
  mainContentWidth: '90%',
  mainContentWidthWithoutPercent: 90,
};

// GAPS

export const gaps = {
  xxsm: 3,
  xsm: 5,
  sm: 10,
  msm: 15,
  md: 20,
  lg: 30,
  xl: 40,
  xxl: 50,
  xxxl: 80,
  filler: 120,
};

// FONT SIZES

export const fontSizes = {
  xs: 10,
  sm: 12,
  msm: 16,
  md: 20,
  lg: 28,
  xlg: 30,
  xxlg: 40,
  huge: 50,
};

// COLORS

const primary = '#ff9d76';
const secondary = '#333366';
const black = '#232323';
const white = '#FFFFFF';
const red = '#FC4445';
const gray = '#d3cece';
const lightGray = '#d3cece78';
const darkGray = '#888';
const transparent = '#00FFFF00';

export const colors = {
  primary,
  secondary,
  black,
  white,
  red,
  gray,
  lightGray,
  darkGray,
  transparent,
};
