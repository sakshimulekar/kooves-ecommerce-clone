import React, { useEffect, useState } from 'react';
import { Box, Image, Heading, Text, Icon, Card,Tooltip,Grid,IconButton,Flex } from '@chakra-ui/react';
import { ViewIcon,StarIcon } from '@chakra-ui/icons';
import { Link, useNavigate } from 'react-router-dom';

import { IoHeartCircleSharp } from "react-icons/io5";
const ProductCard = ({e,_id,images,color,title,price,rating,brand,handleIconClick,handleSecClick,handleIcon}) => {
  const [isCardHovered, setIsCardHovered] = useState(false);
  const [isIconHovered, setIsIconHovered] = useState(false);
  const navigate = useNavigate()
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isTablet, setIsTablet] = useState(window.innerWidth >= 768 && window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      setIsMobile(windowWidth < 768);
      setIsTablet(windowWidth >= 768 && windowWidth < 1024);
    };
    window.addEventListener('resize', handleResize);
    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures the effect runs only once

  
  const handleCardMouseEnter = () => {
    setIsCardHovered(true);
  };

  const handleCardMouseLeave = () => {
    setIsCardHovered(false);
  };

  const handleTextClick = (id) => {
    // Add your logic for handling the icon click here
    console.log(id,"id")
  };
  //console.log(title.length)
  
  return (

    <>
    {(isMobile && !isTablet)&& (
      <Card boxShadow={'md'} margin={'auto'}   h={650}>
      <Box
        minHeight={200}
        maxW={'lg'}
       // w={'100%'}
        overflow="hidden"
        position="relative"
        onMouseEnter={handleCardMouseEnter}
        onMouseLeave={handleCardMouseLeave}
      > 
  
        <Image 
        src={isCardHovered?(images['image2']):(images['image1'])}
        alt={title}
        w={'lg'}
        
        minHeight={200}
        
        />
        {isCardHovered && (
          <Box
            fontSize="20px"
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
            onClick={()=>handleSecClick()}
          >
            <Tooltip label='Add to wishlist' fontSize='sm' placement='left' m={2}>
              <Box  ml={2} mt={1} p={1}><IoHeartCircleSharp/></Box>
            {/* <Icon as={StarIcon} color={isIconHovered ? 'grey' : 'white'} /> */}
            </Tooltip>
        
          </Box>
        )}
          {/* <Link to={`/Product/${_id}`}> */}
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
            onClick={()=>handleIcon()}
          >
            <Tooltip label='view more' fontSize='lg'>
              Select option
            </Tooltip>
          </Box>
          {/* </Link> */}
  
      </Box>
      <Heading fontSize="18px" fontWeight="bold" m="3" pl={3}>
      {title}
      </Heading>
      <Flex fontSize="15px" m="2" pl={5} pr={5} justifyContent={'space-between'} alignItems={'center'}>
      <Text>{`Brand ${brand}`}</Text>
      <Text>{`₹${price}`}</Text>
      </Flex>
      <Flex fontSize="15px" m="2" pl={5} pr={3}  justifyContent={'space-between'} alignItems={'center'}>
      <Text as={'b'}>{`Rating ${rating}`}</Text>
      <IconButton
          isRound={true}
          bgColor={color} 
          borderWidth={'0.5px'}
          borderColor={'black'}// Use a specific shade of gray (e.g., gray.50)
          width={10}
          m={2}
      />
      </Flex>
    </Card>
    )}

    {(!isMobile && isTablet)&& (
          <Card boxShadow={'md'} margin={'auto'}  h={600} border={'1px'} borderColor={'red'}>
          <Box
            minHeight={200}
            maxW="lg"
            overflow="hidden"
            position="relative"
            onMouseEnter={handleCardMouseEnter}
            onMouseLeave={handleCardMouseLeave}
          > 
      
            <Image 
            src={isCardHovered?(images['image2']):(images['image1'])}
            alt={title}
            w={'lg'}
            minHeight={100}
            
            />
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
                onClick={()=>handleSecClick()}
              >
                <Tooltip label='Add to wishlist' fontSize='sm' placement='left' m={2}>
                  <Box  ml={2} mt={1} p={1}><IoHeartCircleSharp/></Box>
                {/* <Icon as={StarIcon} color={isIconHovered ? 'grey' : 'white'} /> */}
                </Tooltip>
            
              </Box>
            )}
              {/* <Link to={`/Product/${_id}`}> */}
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
                onClick={()=>handleIcon()}
              >
                <Tooltip label='view more' fontSize='md'>
                  Select option
                </Tooltip>
              </Box>
              {/* </Link> */}
      
          </Box>
      <Heading fontSize="18px" fontWeight="bold" m="2" pl={3}>
      {title}
      </Heading>
      <Flex fontSize="15px" m="2" pl={3} pr={5} justifyContent={'space-between'} alignItems={'center'}>
      <Text>{`Brand ${brand}`}</Text>
      <Text>{`₹${price}`}</Text>
      </Flex>
      <Flex fontSize="15px" m="2" pl={3} pr={3}  justifyContent={'space-between'} alignItems={'center'}>
      <Text as={'b'}>{`Rating ${rating}`}</Text>
      <IconButton
          isRound={true}
          bgColor={color} 
          borderWidth={'0.5px'}
          borderColor={'black'}// Use a specific shade of gray (e.g., gray.50)
          width={10}
          m={2}
      />
          </Flex>
        </Card>
    )}

    {(!isMobile && !isTablet)&& (
          <Card boxShadow={'md'} margin={'auto'}  minHeighth={'xl'}
          maxHeight={'2xl'} h={'lg'} w={'full'} >
          <Box
            minHeight={200}
            maxW="lg"
            overflow="hidden"
            position="relative"
            h={'lg'}
            onMouseEnter={handleCardMouseEnter}
            onMouseLeave={handleCardMouseLeave}
          > 
      
            <Image 
            src={isCardHovered?(images['image2']):(images['image1'])}
            alt={title}
            w={'lg'}
            h={'md'}
            minHeighth={'xl'}
            maxHeight={'2xl'}
            />
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
                onClick={()=>handleSecClick()}
              >
                <Tooltip label='Add to wishlist' fontSize='sm' placement='left' m={2}>
                  <Box  ml={2} mt={1} p={1}><IoHeartCircleSharp/></Box>
                {/* <Icon as={StarIcon} color={isIconHovered ? 'grey' : 'white'} /> */}
                </Tooltip>
            
              </Box>
            )}
              {/* <Link to={`/Product/${_id}`}> */}
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
                onClick={()=>handleIcon()}
              >
                <Tooltip label='view more' fontSize='md'>
                  Select option
                </Tooltip>
              </Box>
              {/* </Link> */}
      
          </Box>
          <Heading fontSize="18px" fontWeight="bold" m="2" pl={3}>
      {title}
      </Heading>
      <Flex fontSize="15px" m="2" pl={3} pr={5} justifyContent={'space-between'} alignItems={'center'}>
      <Text>{`Brand ${brand}`}</Text>
      <Text>{`₹${price}`}</Text>
      </Flex>
      <Flex fontSize="15px" m="1" pl={3} pr={3}  justifyContent={'space-between'} alignItems={'center'}>
      <Text as={'b'}>{`Rating ${rating}`}</Text>
      <IconButton
          isRound={true}
          bgColor={color} 
          borderWidth={'0.5px'}
          borderColor={'black'}// Use a specific shade of gray (e.g., gray.50)
          width={10}
          m={2}
      />
          </Flex>
        </Card>
    )}

  </>
  );
};

export default ProductCard;

