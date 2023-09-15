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
      {(isMobile && !isTablet) && (
        <>
        <Box   m={'auto'} w={"100%"}>
        <Box mt={'10%'} boxShadow={'md'} mb={'5%'} >
            {/* <Flex justifyContent={'space-between'} gap={10} border={'1px'} borderColor={'red'}> */}
              <Box >
                <Caroselimage arr={a}/>
              </Box>
              <Box  w={'100%'} mr={10} mt={5}>
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
            {/* </Flex> */}
            
        </Box>
        
      </Box>
      <Footer/>
        </>
      )}

      {(!isMobile && isTablet) && (
        <>
        <Box  w={'100%'} m={'auto'}>
        <Box mt={'10%'} boxShadow={'md'} mb={'5%'}>
            {/* <Flex justifyContent={'space-between'} gap={10} > */}
              <Box  >
                <Caroselimage arr={a} />
              </Box>
              <Box  w={'90%'} mr={10} mt={5}>
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
            {/* </Flex> */}
            
        </Box>
        
      </Box>
      <Footer/>
        </>
              
      )}

      {(!isMobile && !isTablet) && (
        <>
        <Box  w={'80%'} m={'auto'}>
        <Box mt={'10%'} boxShadow={'md'} mb={'5%'}>
            <Flex justifyContent={'space-between'} gap={10} >
              <Box w={'lg'} ml={10} mt={10}>
                <Caroselimage arr={a} />
              </Box>
              <Box  w={'50%'} mr={10} mt={5}>
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
      )}
      
    </>
  )
}

export default SingleProduct
