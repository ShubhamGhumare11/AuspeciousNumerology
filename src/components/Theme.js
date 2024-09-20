import React from 'react';
  // src/theme.js
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    primary: '#914f1e',
    secondary: '#deac80',
    tertiary: '#f7dcb9',
    accent: '#b5c18e',
    black:'#2F3645',
    grayish:'#867070',

    backgroundLight: "#fffbda",  // Lightest shade for backgrounds
    backgroundDark: "#ffec9e",   // Light shade for secondary backgrounds
    backgroundprimary: "#ffbb70",          // Base shade for primary elements like buttons
    backgroundaccent: "#FFDFDF",   
  },
});

export default theme;
