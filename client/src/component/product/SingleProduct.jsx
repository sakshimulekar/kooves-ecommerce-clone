import { Badge, Box,Button,Flex,Heading,Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { menProducts } from '../../redux/productReducer/action';
import axios from 'axios';
import Caroselimage from './Caroselimage';
import RatingStars from './RatingStars';
import { useToast } from 'react-toastify';
import { addCart } from '../../redux/CartReducer/action';
import { Footer } from '../Footer/Footer';

const SingleProduct = () => {
  const {id} = useParams()
  console.log(id,'14')
  const [product, setProduct] = useState({
    title: '',
    brand: '',
    off_price: 0,
    discount: 0,
    price: 0,
    description: '',
    images:[]
    // Add other properties as needed
  });
  
  
  console.log(product.title,'28')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const toast = useToast({position:'top'})
  const isAuth = useSelector(store=>store.authReducer.isAuth)
  const {msg,isLoad} = useSelector(store=>store.cartReducer)
  const [count,setCount] = useState(1)
  const [isToastMsg,setIsToastMsg] = useState(false)
  
  
  const handleFetch = async() =>{
    try {
      const res = await axios.get(`http://localhost:8000/men/top/${id}`)
      console.log(res,'fetchproduct 17')
      const info = res.data.product
      console.log(info,'31')
      setProduct(info)
      console.log(product,'9 singleproduct')
    } catch (error) {
      console.log(error.message)
    }
  }
  useEffect(()=>{
    console.log('render')
    handleFetch()
  },[])

  let ans = product.images
  //console.log(ans)
  let a = Object.values(ans)

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
      <Box  w={'70%'} m={'auto'}>
        <Box mt={'10%'} boxShadow={'md'} mb={'5%'}>
            <Flex justifyContent={'space-between'} gap={10} >
              <Box w={'50%'} ml={10} mt={10}>
                <Caroselimage arr={a} />
              </Box>
              <Box  w={'60%'} mr={10} mt={5}>
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
                  <Button mr={5} onClick={()=>setCount(count+1)} isDisabled={product.count?count === product.count:count===10}>+</Button>
                  {count}
                  <Button ml={5} onClick={()=>setCount(count-1)} isDisabled={count === 1} >-</Button>
                </Box>
                <Box m={5}>
                  <RatingStars rating={product.rating} />
                </Box>  
                <Button m={5} onClick={()=>handleCart(product._id)}>Add to Cart</Button>
              </Box>
            </Flex>
            
        </Box>
        
      </Box>
      <Footer/>
    </>
  )
}

export default SingleProduct
