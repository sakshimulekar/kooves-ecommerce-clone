import { Box,Text,Button, Flex, Heading, Center } from '@chakra-ui/react'
import React, { useState } from 'react'
import { AiTwotoneTags } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import ModalAddress from '../checkout/ModalAddress';


const TotalCartCalculate = ({total,len}) => {
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick =() =>{
    openModal()
    
  }

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const navigate = useNavigate()
  console.log(len,'5')
  return (
    <Box borderWidth={'0.5px'} borderColor={'grey.200'} borderRadius={'5'} ml={"150px"} pt={5} pb={5} w={'61%'} pl={5} mt={'35PX'}  lineHeight={2}>
      <Text as={'b'}>COUPONS</Text>
      <Flex  justifyContent={'space-between'} alignItems={'center'}  width={'80%'}>
        <Flex alignItems={'center'}>
          <AiTwotoneTags />
          <Text>APPLY COUPON</Text>
        </Flex>
        <Button>APPLY</Button>
      </Flex>
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
      <Center w={'80%'} m={10}>
      {/* <Button as={'b'} 
        color={'white'} 
        backgroundColor={'#FF0080'} 
        onClick={()=>navigate("/address")}>PLACE ORDER</Button> */}
        <Button backgroundColor={'#FF0080'}  onClick={()=>handleClick()} as={'b'} 
        color={'white'}>
            PLACE ORDER
      </Button>
        <ModalAddress isOpen={isModalOpen} onClose={closeModal} />
      </Center>
    </Box>
  )
}

export default TotalCartCalculate
