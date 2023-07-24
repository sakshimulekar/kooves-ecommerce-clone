import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import theme from './component/chakra.theme';
import MainRoute from './pages/MainRoute';
import NavBar from './component/navbar/Navbar';

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeProvider options={{ initialColorMode: 'light', useSystemColorMode: false }}>
        <NavBar/>
        <MainRoute/>
      </ColorModeProvider>
    </ChakraProvider>
  );
};

export default App;
