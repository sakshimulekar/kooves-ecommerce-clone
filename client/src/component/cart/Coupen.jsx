import { Box,Text,Flex } from '@chakra-ui/react'
import React from 'react'

const Coupen = ({len,total,cart}) => {
    console.log(len,total)
  return (
    <Box>
      <Text >PRICE DETAIL ({len} Item)</Text>
      <Flex justifyContent={'space-between'} alignItems={'center'} width={'80%'}>
        <Box>Subtotal MRP : </Box>
        <Box>₹ {total}/-</Box>
      </Flex>
      <Flex justifyContent={'space-between'} alignItems={'center'} width={'75%'}>
        <Box>CONVINENCE FEE : </Box>
        <Box color={'green'} as='p'>FREE</Box>
      </Flex>
      <Flex justifyContent={'space-between'} alignItems={'center'} width={'80%'} borderBottom={'1px'}>
        <Box>Total Amount : </Box>
        <Box>₹ {total}/-</Box>
      </Flex>
      <Flex justifyContent={'space-between'} alignItems={'center'} width={'80%'}>
        <Box as='b'>Total Amount : </Box>
        <Box as='b'>₹ {total}/-</Box>
      </Flex>
    </Box>
  )
}

export default Coupen
