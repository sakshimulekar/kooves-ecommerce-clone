import React, { useState } from 'react';
import { Box, Image, Heading, Text, Icon, Card,Tooltip,Grid } from '@chakra-ui/react';
import { ViewIcon,StarIcon } from '@chakra-ui/icons';

const ProductCard = ({ imageSrc, altImageSrc, title, brand, price,handleIconClick,handleSecClick}) => {
  const [isCardHovered, setIsCardHovered] = useState(false);
  const [isIconHovered, setIsIconHovered] = useState(false);

  const handleCardMouseEnter = () => {
    setIsCardHovered(true);
  };

  const handleCardMouseLeave = () => {
    setIsCardHovered(false);
  };

  const handleTextClick = () => {
    // Add your logic for handling the icon click here
    console.log("click")
  };

  return (
    <Grid templateColumns='repeat(3,1fr)' gap={5}>
    <Card boxShadow={'md'} margin={'auto'}>
    <Box
      maxW="sm"
      overflow="hidden"
      position="relative"
      onMouseEnter={handleCardMouseEnter}
      onMouseLeave={handleCardMouseLeave}
    >
      <Image 
      src={isCardHovered? 'https://www.koovs.com/cdn/shop/files/Beige-02_979f47e0-524e-463d-bf19-da5b9ef8de27.jpg?v=1687933542&width=360' : 'https://www.koovs.com/cdn/shop/files/Red-05_0c144b3a-e7eb-4a7c-8938-3526145337f4.jpg?v=1687933542&width=360'}
      alt={title}
      w={'100%'} />
      {isCardHovered && (
        <Box
          fontSize="18px"
          rounded={'50'}
          boxSize={10}
          mr={5}
          pt={1}
          fontWeight="bold"
          position="absolute"
          top="10" // Position at the top of the image
          right="0"
          bg="rgba(0, 0, 0, 0.6)"
          color="white"
          
          textAlign="center"
          transition="right 0.3s ease-in-out"
          transform="translateY(-50%)"
          cursor={'pointer'}
          onClick={handleIconClick}
          
        >
          
          <Tooltip label='Quick View' fontSize='sm' placement='left' m={2}>
          <Icon as={ViewIcon} color={isIconHovered ? 'grey' : 'white'} />
          </Tooltip>
        </Box>
      )}

      {isCardHovered && (
        <Box
        fontSize="18px"
        rounded={'50'}
        boxSize={10}
        mr={5}
        pt={1}
          fontWeight="bold"
          position="absolute"
          top="100" // Position at the top of the image
          right="0"
          bg="rgba(0, 0, 0, 0.6)"
          color="white"
          
          textAlign="center"
          transition="right 0.3s ease-in-out"
          transform="translateY(-50%)"
          cursor={'pointer'}
          onClick={handleSecClick}
        >
          <Tooltip label='Add to wishlist' fontSize='sm' placement='left' m={2}>
          <Icon as={StarIcon} color={isIconHovered ? 'grey' : 'white'} />
          </Tooltip>
      
        </Box>
      )}
        <Box
          fontSize="15px"
          fontWeight="bold"
          position="absolute"
          w={'100%'}
          bottom="25"
          //left="100"
          bg="rgba(0, 0, 0, 0.6)"
          color="white"
          p="6"
          textAlign="center"
          opacity={isCardHovered ? 1 : 0}
          transition="opacity 0.2s ease-in-out"
          cursor={'pointer'}
          onClick={handleTextClick}
        >
          <Tooltip label='Phone number' fontSize='md'>
            Select option
          </Tooltip>
        </Box>

    </Box>
    <Heading fontSize="20px" fontWeight="bold" mb="2">
    Tshirt
    </Heading>
    <Text fontSize="16px" mb="2">
      Puma
    </Text>
  </Card>
  </Grid>
  );
};

export default ProductCard;

