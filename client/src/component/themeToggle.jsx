import React from 'react';
import { useColorMode, Button,Center } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Center>
      <Button
        size="sm"
        onClick={toggleColorMode}
        leftIcon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      >
        {/* {colorMode === 'light' ? 'Dark' : 'Light'} */}
      </Button>
    </Center>
  );
};

export default ThemeToggle;
