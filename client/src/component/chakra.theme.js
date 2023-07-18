// chakra.theme.js

import { extendTheme } from '@chakra-ui/react';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    light: {
      // Define your light theme colors here
      // Example:
      bg: 'white',
      text: 'black',
    },
    dark: {
      // Define your dark theme colors here
      // Example:
      bg: 'black',
      text: 'white',
    },
  },
});

export default theme;
