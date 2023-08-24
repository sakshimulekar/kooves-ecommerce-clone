import { Box,Card,CardBody,Stack,Heading,Image,Text,Button,CardFooter } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getCartItem } from '../redux/CartReducer/action';
import Caroselimage from './product/Caroselimage';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

const Cart = () => {

  const [count,setCount] = useState(1)
  const dispatch = useDispatch()
  const cart = useSelector(store=>store.cartReducer.cart)
  console.log(cart,'cart.jsx 14')
  //let cartfromcookie = Cookies.get('user')
  //console.log(cartfromcookie)
  
    
    useEffect(()=>{
      dispatch(getCartItem())
    },[])
  return (

    <Box mt={'100px'} ml={30}  w={'50%'}>
      {cart?.map((e)=>{
        return (
          <Card
          key={e._id}
          m={10}
      direction={{ base: 'column', sm: 'row' }}
      overflow='hidden'
      variant='outline'
      
    >
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src={e.product.images.image1}
    alt='Caffe Latte'
  />
  
  <Stack>
    <CardBody>
      <Heading size='md'>{e.product.title}</Heading>

      <Text py='2'>
        {e.product.brand}
      </Text>
      <Text py='2'>
        {e.product.price}
      </Text>
      <Text py='2'>
        {e.product.discount}
      </Text>
      <Text py='2'>
        {e.product.off_price}
      </Text>
      <Box py='2'>
        <Button onClick={()=>setCount(count+1)} isDisabled={e.product.count?count === e.product.count:count===10}>+</Button>
          {count}
        <Button onClick={()=>setCount(count-1)} isDisabled={count === 1} >-</Button>
      </Box>
    </CardBody>

    <CardFooter>
      <Link to='/checkout'>
      <Button variant='solid' colorScheme='blue' >
        place order
      </Button>
      </Link>
    </CardFooter>
  </Stack>
    </Card>
        )
      })}
    
</Box>
  )
}

export default Cart
