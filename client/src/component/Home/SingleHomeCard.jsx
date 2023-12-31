import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Flex,
  Heading,
  Text,
  Divider,
  IconButton,
  Button,
  Box,
  useColorModeValue,
  Skeleton,
  Center
} from '@chakra-ui/react';
import { ArrowForwardIcon, ChevronRightIcon } from '@chakra-ui/icons';



const SingleHomeCard = ({data}) => {
  const navigate = useNavigate();
  const bgColor = useColorModeValue('gray.100', 'gray.700');
  const textColor = useColorModeValue('black', 'white');

  const handleRedirect = (id) => {
    // Replace '/another-page' with the actual path you want to redirect to
    //console.log(id,'31')
    navigate(`/Product/${id}`)
  };
  //console.log(data.id)
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

  return (
    <Box >
    {(isMobile && !isTablet) && (
      <Flex  m={'auto'} gap={2} p={2}>
      {data?.map((e,i)=>{
        return (
        <Card
          key={i}
          w={'100%'}
          height="130px"
          overflow="hidden"
          transition="transform 0.3s ease-out"
          _hover={{ transform: 'scale(0.95)', cursor: 'pointer' }}
        >
            <CardBody >
                <Box  w={"100%"}>
              <Image
                src={e.image}
                alt="Green double couch with wooden legs"
                w={'250%'}
                mr={10}
              />
              </Box>
              <Box  m={'auto'}>
                <Button backgroundColor={'transparent'} onClick={()=>handleRedirect(e.link)}><Center fontSize={8} >{e.text}</Center></Button>
              </Box>  {/* </Flex> */}
            </CardBody>
        </Card>
        )
        })}
      </Flex>
    )}

    {(!isMobile && isTablet) && (
          <Flex  m={'auto'} gap={2} p={2}>
          {data?.map((e,i)=>{
            return (
            <Card
              key={i}
              w={'100%'}
              height="280px"
              overflow="hidden"
              transition="transform 0.3s ease-out"
              _hover={{ transform: 'scale(0.95)', cursor: 'pointer' }}
            >
                <CardBody >
                    <Box  w={"100%"}>
                  <Image
                    src={e.image}
                    alt="Green double couch with wooden legs"
                    w={'250%'}
                    mr={10}
                  />
                  </Box>
                  <Box  m={'auto'}>
                    <Button backgroundColor={'transparent'} onClick={()=>handleRedirect(e.link)}><Center fontSize={8} >{e.text}</Center></Button>
                  </Box>  {/* </Flex> */}
                </CardBody>
            </Card>
            )
            })}
          </Flex>
        )}

    {(!isMobile && !isTablet) && (
      <Flex columnGap={5} p={10}>
      {data?.map((e,i)=>{
        return (
        <Card
        key={i}
        maxW="sm"
        height="500px"
        overflow="hidden"
        transition="transform 0.3s ease-out"
        _hover={{ transform: 'scale(0.95)', cursor: 'pointer' }}
        >
        <CardBody position="relative">
          <Flex
            alignItems="center"
            justify="space-between"
            mb="4"
            position="absolute"
            bottom="0"
            left="0"
            right="0"
            p="4"
            color={textColor}
            bgColor={bgColor}
            backdropFilter="blur(8px)"
          >
            <Text>{e.text}</Text>
            <IconButton
              isRound={true}
              color={textColor}
              _hover={{ bgColor: "gray.500" }}
              onClick={()=>handleRedirect(e.id)}
              aria-label='Done'
              fontSize='20px'
              icon={<ArrowForwardIcon />}
            />
          </Flex>
          <Image
            src={e.image}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
            w={'lg'}
          />
        </CardBody>
      </Card>
      
      )
      })}
    </Flex>
    )}
    
    </Box>
  );
};

export default SingleHomeCard;

