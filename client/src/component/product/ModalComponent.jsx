// ModalComponent.js
import React, { useEffect, useRef, useState } from 'react';
import {Button,Grid,Badge, Box,Flex, Modal, ModalOverlay,Heading, ModalContent, ModalHeader, ModalCloseButton, ModalBody,Image,Text, useToast } from '@chakra-ui/react';
import Caroselimage from './Caroselimage';
import RatingStars from './RatingStars';
import {useDispatch, useSelector} from 'react-redux'
import { addCart } from '../../redux/CartReducer/action';
// Inside the ModalComponent component
import {useNavigate} from 'react-router-dom'


const ModalComponent = ({ closeModal, product }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const toast = useToast({position:'top'})
  const isAuth = useSelector(store=>store.authReducer.isAuth)
  const {msg,isLoad} = useSelector(store=>store.cartReducer)
  const [count,setCount] = useState(1)
  const [isToastMsg,setIsToastMsg] = useState(false)
  let [message,setMessage] = useState(msg)
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
  let ans = product.images
  let a = Object.values(ans)
  // console.log(product)

  const handleCart=async(id)=>{
    const quantity = count
    console.log(quantity)
    console.log(id)
    const obj = {id,quantity}
    console.log(obj)
    if(isAuth){
      await dispatch(addCart(obj))
    }
    else{
      navigate('/tablogin')
    }
    setIsToastMsg(true)
  }


  return (
    <>

    {(!isMobile && isTablet) && (
      <Modal isOpen={true} onClose={closeModal} size={'xl'} isCentered='true' >
      <ModalOverlay />
      <ModalContent mt={'5rem'}>
        
        <ModalCloseButton rounded='true'/>
        <ModalBody>
          <Box >

            {/* <Flex justifyContent={'space-between'} gap={10} > */}
              <Box >
                <Caroselimage arr={a}/>
              </Box>
              <Box  >
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
                <Box ml={2}>
                  <Button onClick={()=>setCount(count+1)} isDisabled={product.count?count === product.count:count===10}>+</Button>
                  {count}
                  <Button onClick={()=>setCount(count-1)} isDisabled={count === 1} >-</Button>
                </Box>
                <Box m={5}>
                  <RatingStars rating={product.rating} />
                </Box>  
                <Button m={5} onClick={()=>handleCart(product._id)}>Add to Cart</Button>
              </Box>
            {/* </Flex> */}
            {/* Add other product details here */}
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
    )}

    {(isMobile && !isTablet) && (
      <Modal isOpen={true} onClose={closeModal} size={'md'} isCentered='true' >
      <ModalOverlay />
      <ModalContent mt={'5rem'}>
        
        <ModalCloseButton rounded='true'/>
        <ModalBody>
          <Box >

            {/* <Flex justifyContent={'space-between'} gap={10} > */}
              <Box >
                <Caroselimage arr={a}/>
              </Box>
              <Box >
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
                <Box ml={2}>
                  <Button onClick={()=>setCount(count+1)} isDisabled={product.count?count === product.count:count===10}>+</Button>
                  {count}
                  <Button onClick={()=>setCount(count-1)} isDisabled={count === 1} >-</Button>
                </Box>
                <Box m={5}>
                  <RatingStars rating={product.rating} />
                </Box>  
                <Button m={5} onClick={()=>handleCart(product._id)}>Add to Cart</Button>
              </Box>
            {/* </Flex> */}
            {/* Add other product details here */}
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
    )}

    {(!isMobile && !isTablet) && (
      <Modal isOpen={true} onClose={closeModal} size={'4xl'} isCentered='true' >
      <ModalOverlay />
      <ModalContent mt={'5rem'}>
        
        <ModalCloseButton rounded='true'/>
        <ModalBody>
          <Box >

            <Flex justifyContent={'space-between'} gap={10} >
              <Box w={'50%'} mt={5}>
                <Caroselimage arr={a}/>
              </Box>
              <Box  w={"50%"}>
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
                <Box>
                  <Button onClick={()=>setCount(count+1)} isDisabled={product.count?count === product.count:count===10}>+</Button>
                  {count}
                  <Button onClick={()=>setCount(count-1)} isDisabled={count === 1} >-</Button>
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
    )}
    
    </>
  );
};

export default ModalComponent;

