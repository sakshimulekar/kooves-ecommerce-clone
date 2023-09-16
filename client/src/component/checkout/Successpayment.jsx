import React, { useState } from 'react';
import CheckBox from 'react-animated-checkbox';
import YourComponent from '../cart/YourComponent';
import TextToSpeech from '../LottieAnimation/TextToSpeech';
import { Box } from '@chakra-ui/react';
//import 'react-animated-checkbox/build/animate.css';

const Successpayment = () => {
  
  return (
    <Box m={'auto'} p={20}>
      <YourComponent/>
      <TextToSpeech/>
    </Box>
  );
};

export default Successpayment;
