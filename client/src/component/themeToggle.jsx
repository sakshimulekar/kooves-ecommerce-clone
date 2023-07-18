import React from 'react';
import { useColorMode, Button } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button
      size="sm"
      onClick={toggleColorMode}
      leftIcon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
    >
      {colorMode === 'light' ? 'Dark' : 'Light'}
    </Button>
  );
};

export default ThemeToggle;
