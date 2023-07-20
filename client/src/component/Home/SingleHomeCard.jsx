import React from 'react';
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
  
  useColorModeValue,
  Skeleton
} from '@chakra-ui/react';
import { ArrowForwardIcon, ChevronRightIcon } from '@chakra-ui/icons';



const SingleHomeCard = ({data}) => {
  const navigation = useNavigate();
  const bgColor = useColorModeValue('gray.200', 'gray.700');
  const textColor = useColorModeValue('black', 'white');

  const handleRedirect = (link) => {
    // Replace '/another-page' with the actual path you want to redirect to
    navigation(link)
  };
//console.log(data)
  return (
    <>
    <Flex columnGap={5}>
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
              onClick={()=>handleRedirect(e.link)}
              aria-label='Done'
              fontSize='20px'
              icon={<ArrowForwardIcon />}
            />
          </Flex>
          <Image
            src={e.image}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
        </CardBody>
      </Card>
      
      )
      })}
    </Flex>
    </>
  );
};

export default SingleHomeCard;

