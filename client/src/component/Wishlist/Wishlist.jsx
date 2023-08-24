import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getWishList } from '../../redux/WishlistReducer/action'
import { Box,Card,CardBody,Stack,Heading,Image,Text,Button,CardFooter } from '@chakra-ui/react'
const Wishlist = () => {
  const dispatch = useDispatch()
  const wishlist = useSelector(store=>store.wishlistReducer.wishlist)
  
  
  useEffect(()=>{
    dispatch(getWishList())
  },[])

  console.log(wishlist,'wishlist 14')
  return (
    <Box mt={'100px'} ml={30}  w={'50%'}>
      {wishlist?.map((e)=>{
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
    src={e.images.image1}
    alt='Caffe Latte'
  />
  
  <Stack>
    <CardBody>
      <Heading size='md'>{e.title}</Heading>

      <Text py='2'>
        {e.brand}
      </Text>
      <Text py='2'>
        {e.price}
      </Text>
      <Text py='2'>
        {e.discount}
      </Text>
      <Text py='2'>
        {e.off_price}
      </Text>
      {/* <Box py='2'>
        <Button onClick={()=>setCount(count+1)} isDisabled={e.product.count?count === e.product.count:count===10}>+</Button>
          {count}
        <Button onClick={()=>setCount(count-1)} isDisabled={count === 1} >-</Button>
      </Box> */}
    </CardBody>

    <CardFooter>
      <Button variant='solid' colorScheme='blue'>
        Move to Wishlist
      </Button>
    </CardFooter>
  </Stack>
    </Card>
        )
      })}
    
</Box>
  )
}

export default Wishlist
