import React from 'react';
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
  ButtonGroup,
  Button,
  VisuallyHidden,
  useColorModeValue,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

const SingleHomeCard = () => {
    const bgColor = useColorModeValue('gray.200', 'gray.700');
  const textColor = useColorModeValue('black', 'white');
  return (
    <div>
      <Card maxW="sm" height="400px" overflow="hidden" 
       transition="transform 0.3s ease-out"
       _hover={{ transform: 'scale(0.95)',cursor:'pointer' }}>
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
            <Text>sweatShirts</Text>
            <Button
              rounded="full"
              rightIcon={<ArrowForwardIcon />}
              bgColor="gray.700"
              color={textColor}
              _hover={{ bgColor: {bgColor}}}
            >
              <VisuallyHidden>Right arrow</VisuallyHidden>
            </Button>
          </Flex>
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
        </CardBody>
      </Card>
    </div>
  );
};

export default SingleHomeCard;
