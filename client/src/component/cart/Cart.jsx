import { Box, Card, CardBody, Stack, Heading, Image, Text, Button, CardFooter, useToast, Grid, GridItem,Divider,Badge} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItemfromCart, getCartItem } from '../../redux/CartReducer/action';
import { useNavigate } from 'react-router-dom';
import TotalCartCalculate from './TotalCartCalculate';





const Cart = () => {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cartReducer.cart);
  const [itemCounts, setItemCounts] = useState({});
  const toast = useToast({position:'top'})
  useEffect(() => {
    dispatch(getCartItem());
  }, []);

  useEffect(() => {
    const initialCounts = {};
    cart.forEach((item) => {
      initialCounts[item.product._id] = 1;
    });
    setItemCounts(initialCounts);
  }, [cart]);

  const handleIncrement = (itemId) => {
    setItemCounts((prevCounts) => ({
      ...prevCounts,
      [itemId]: (prevCounts[itemId] || 0) + 1,
    }));
  };

  const handleDecrement = (itemId) => {
    if (itemCounts[itemId] && itemCounts[itemId] > 0) {
      setItemCounts((prevCounts) => ({
        ...prevCounts,
        [itemId]: prevCounts[itemId] - 1,
      }));
    }
  };

  const calculateItemTotal = (productId) => {
    const quantity = itemCounts[productId] || 0;
    const item = cart.find((item) => item.product._id === productId);
    if (item) {
      return quantity * item.product.off_price;
    }
    return 0;
  };

  const calculateTotal = () => {
    let total = 0;
    cart.forEach((item) => {
      const quantity = itemCounts[item.product._id] || 0;
      total += quantity * item.product.off_price;
    });
    localStorage.setItem('totalCart', JSON.stringify(total));
    return total;
  };

  const handleDelete = (id) => {
    console.log(id)
    dispatch(deleteItemfromCart(id))
    .then(()=>{
      toast({
        title:'Item Deleted successfully!!',
        status:'success',
        duration:3000,
        isClosable:true
      })
      dispatch(getCartItem());
    })
    .catch((error)=>alert("item not deleted",error.message))
  }
  return (
    <Box mt={'20px'} paddingTop={'5%'} pl={20} >
      {cart.length===0?(<Box w={'100%c'}>
        <Heading textAlign={'center'}>Hey, It feels so Light!</Heading>
      <Image margin={'auto'} w={"60%"} src='https://constant.myntassets.com/checkout/assets/img/empty-bag.png'/>
      
      </Box>):
      (<Grid templateColumns='repeat(2, 1fr)'  margin={'auto'} >
      <GridItem >
     
      {cart?.map((e) => (
        <Card w={"100%"}
          
          key={e._id}
          m={10}
          direction={{ base: 'column', sm: 'row' }}
          overflow='hidden'
          variant='outline'
        >
          <Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '300px' }}
            src={e.product.images.image1}
            alt='Caffe Latte'
          />
          <Stack>
            <CardBody>
              <Heading size='md'>{e.product.title}</Heading>
              <Text py='2'>{e.product.brand}</Text>
              
              <Text py='2' textDecor='line-through'>₹ {e.product.price}</Text>
              
              <Box >
                  <Text fontSize='2xl' as={'i'}>₹ {e.product.off_price} /-
                  <Badge ml='1' mb={'10'} colorScheme='green'>
                    {e.product.discount}
                  </Badge>
                  </Text>
                </Box>
              
              <Box py='2'>
                <Button
                  onClick={() => handleIncrement(e.product._id)}
                  isDisabled={e.product.count ? itemCounts[e.product._id] === e.product.count : itemCounts[e.product._id] === 10}
                >
                  +
                </Button>
                <Text display='inline-block' p='2'>
                  {itemCounts[e.product._id] || 1}
                </Text>
                <Button onClick={() => handleDecrement(e.product._id)} isDisabled={itemCounts[e.product._id] === 1}>
                  -
                </Button>
              </Box>
              <Box mt={10}>
              <Text as={'b'}>Total:  ₹ {calculateItemTotal(e.product._id)}</Text>
              </Box>
            </CardBody>
            <CardFooter>
              <Button variant='solid' colorScheme='blue' onClick={() =>handleDelete(e.product._id)}>
                Delete
              </Button>
            </CardFooter>
          </Stack>
        </Card>
      ))}
      </GridItem>
    
      {/* <Divider orientation='vertical' /> */}
      
      <GridItem><TotalCartCalculate len={cart.length} total={calculateTotal()}/></GridItem>
      </Grid>)}
    </Box>
  );
};

export default Cart;
