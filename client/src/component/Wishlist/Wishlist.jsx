import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getWishList, removeWishlist } from '../../redux/WishlistReducer/action'
import { Box,Card,CardBody,Stack,Heading,Image,Text,Button,CardFooter, Center,Badge} from '@chakra-ui/react'
import LoadingwishList from '../LottieAnimation/LoadingwishLish'
import EmptyWishlist from '../LottieAnimation/EmptyWishlist'



const Wishlist = () => {
  const dispatch = useDispatch()
  const {isLoad,isErr,wishlist} = useSelector(store=>store.wishlistReducer)
  const [count,setCount] = useState(1)
  ///const [update,setUpdate] = useState(false)

  const handleDelete = (id) => {
    
    const quantity = count
    console.log(quantity)
    console.log(id)
    const obj = {id,quantity}
    console.log(obj,"wishlist 20")
    dispatch(removeWishlist(obj))
    
  }
  
  useEffect(()=>{
    dispatch(getWishList())
    //setUpdate(true)
  },[])

  console.log(wishlist,'wishlist 14')
  return (
    <>
   
      {isLoad && <Box  mt={'20%'} ><LoadingwishList/></Box>}

      {!isLoad && wishlist?.length==0 && <>
        
        <Box pl={'50px'}>
          <EmptyWishlist/>
        </Box>
        <Center>
          <Heading fontSize={'5xl'} fontWeight={'bold'} color={'orange'} >Oops!!</Heading>
        </Center>
        <Center>
          <Heading m={10} fontSize={'3xl'} fontWeight={'bold'} fontFamily={'revert'} >Your Wishlist currently Empty !</Heading>
        </Center>
        </>}
  
    <Box mt={'100px'} ml={30}  w={'50%'} >
      {!isLoad && wishlist?.map((e)=>{
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
              <Text py='2'>{e.brand}</Text>
              
              <Text py='2' textDecor='line-through'>₹ {e.price}</Text>
              
              <Box >
                  <Text fontSize='2xl' as={'i'}>₹ {e.off_price} /-
                  <Badge ml='1' mb={'10'} colorScheme='green'>
                    {e.discount}
                  </Badge>
                  </Text>
                </Box>
              
      <Box>
        <Button onClick={()=>setCount(count+1)} isDisabled={e.count?count === e.count:count===10} mr={2}>+</Button>
        {count}
        <Button onClick={()=>setCount(count-1)} isDisabled={count === 1} ml={2}>-</Button>
      </Box>
    </CardBody>

    <CardFooter>
      <Button variant='solid' colorScheme='blue' onClick={()=>handleDelete(e._id)}>
        Move to Wishlist
      </Button>
    </CardFooter>
  </Stack>
    </Card>
        )
      })}
    
</Box>
</>
  )
}

export default Wishlist
