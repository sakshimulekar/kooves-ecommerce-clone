// App.js

import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import theme from './component/chakra.theme';
import Home from './component/Home';

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeProvider options={{ initialColorMode: 'light', useSystemColorMode: false }}>
        <Home/>
      </ColorModeProvider>
    </ChakraProvider>
  );
};

export default App;
