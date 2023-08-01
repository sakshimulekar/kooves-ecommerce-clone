// ModalComponent.js
import React from 'react';
import {Button,Grid,Badge, Box,Flex, Modal, ModalOverlay,Heading, ModalContent, ModalHeader, ModalCloseButton, ModalBody,Image,Text } from '@chakra-ui/react';
import Caroselimage from './Caroselimage';
import RatingStars from './RatingStars';

// Inside the ModalComponent component

const ModalComponent = ({ closeModal, product }) => {
  // You can now use the 'product' prop to access the relevant product details
  let ans = product.images
  let a = Object.values(ans)
  //console.log(a)
  console.log(product)
  const handleCart=(id)=>{
    console.log(id)
  }
  return (
    <Modal isOpen={true} onClose={closeModal} size={'5xl'} isCentered='true' >
      <ModalOverlay />
      <ModalContent mt={'5rem'}>
        
        <ModalCloseButton rounded='true'/>
        <ModalBody>
          <Box >
            <Flex justifyContent={'space-between'} gap={10} >
              <Box >
                <Caroselimage arr={a}/>
              </Box>
              <Box  w={'90'} >
                <Box m={5}>
                  <Heading as={'h1'}>{product.title}</Heading>
                </Box>
                <Box m={5}>
                  <Text as={'b'}>Brand : {product.brand}</Text>
                </Box>
                <Box m={5}>
                  <Text fontSize='2xl' as={'b'}>{product.off_price} /-
                  <Badge ml='1' mb={'10'} colorScheme='green'>
                    {product.discount}
                  </Badge>
                  </Text>
                </Box>
                <Box m={5}>
                  <Text fontSize={'xl'} textDecor='line-through' as={'i'}>
                    {product.price} /- Rs.
                  </Text>
                </Box>
                <Box m={5}>
                  <Text fontSize={'xl'}>{product.description}</Text>
                </Box>
                <Box m={5}>
                  <RatingStars rating={product.rating} />
                </Box>  
                <Button m={5} onClick={()=>handleCart(product._id)}>Add to Cart</Button>
              </Box>
            </Flex>
            {/* Add other product details here */}
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalComponent;

