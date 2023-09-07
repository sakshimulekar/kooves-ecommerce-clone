// import React, { useState, useEffect } from 'react';
// import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
// import {
//   Box,
//   Heading,
//   Stack,
//   Input,
//   Button,
//   FormControl,
//   FormLabel,
//   FormHelperText,
//   VStack,
// } from '@chakra-ui/react';

// const PaymentForm = ({ total }) => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [clientSecret, setClientSecret] = useState('');
//   const [deliveryInfo, setDeliveryInfo] = useState({
//     name: '',
//     address: '',
//     city: '',
//     state: '',
//     postalCode: '',
//   });
//   console.log(total)
//   useEffect(() => {
//     // Replace this with your actual API endpoint to fetch the client secret
//     fetch('http://localhost:8000/checkout/create-payment-intent', {
//       method: 'POST',
//       //body: JSON.stringify({ cartItems }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         setClientSecret(data.clientSecret);
//       })
//       .catch((error) => console.error('Error fetching client secret:', error));
//   }, []);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!stripe || !elements || !clientSecret) {
//       return;
//     }

//     const result = await stripe.confirmCardPayment(clientSecret, {
//       payment_method: {
//         card: elements.getElement(CardElement),
//         billing_details: {
//           name: deliveryInfo.name,
//           address: {
//             line1: deliveryInfo.address,
//             city: deliveryInfo.city,
//             state: deliveryInfo.state,
//             postal_code: deliveryInfo.postalCode,
//           },
//         },
//       },
//     });

//     if (result.error) {
//       console.log('Payment error:', result.error);
//     } else {
//       console.log('Payment succeeded:', result.paymentIntent);
//       window.location.href = '/successpayment';
//     }
//   };

//   return (
//     <VStack spacing={6} align="center" mt={'1%'}>
//       <Heading>Order Summary</Heading>
//       {/* Display cart items and total amount */}
      
//       <Box w="70%">
//         <Heading size="md">Delivery Information</Heading>
//         <form onSubmit={handleSubmit}>
//           <Stack spacing={4}>
//             <FormControl id="name">
//               <FormLabel>Name</FormLabel>
//               <Input
//                 type="text"
//                 value={deliveryInfo.name}
//                 onChange={(e) =>
//                   setDeliveryInfo({ ...deliveryInfo, name: e.target.value })
//                 }
//                 required
//               />
//             </FormControl>
//             <FormControl id="address">
//               <FormLabel>Address</FormLabel>
//               <Input
//                 type="text"
//                 value={deliveryInfo.address}
//                 onChange={(e) =>
//                   setDeliveryInfo({ ...deliveryInfo, address: e.target.value })
//                 }
//                 required
//               />
//             </FormControl>
//             <FormControl id="city">
//               <FormLabel>City</FormLabel>
//               <Input
//                 type="text"
//                 value={deliveryInfo.city}
//                 onChange={(e) =>
//                   setDeliveryInfo({ ...deliveryInfo, city: e.target.value })
//                 }
//                 required
//               />
//             </FormControl>
//             <FormControl id="state">
//               <FormLabel>State</FormLabel>
//               <Input
//                 type="text"
//                 value={deliveryInfo.state}
//                 onChange={(e) =>
//                   setDeliveryInfo({ ...deliveryInfo, state: e.target.value })
//                 }
//                 required
//               />
//             </FormControl>
//             <FormControl id="postalCode">
//               <FormLabel>Postal Code</FormLabel>
//               <Input
//                 type="text"
//                 value={deliveryInfo.postalCode}
//                 onChange={(e) =>
//                   setDeliveryInfo({ ...deliveryInfo, postalCode: e.target.value })
//                 }
//                 required
//               />
//             </FormControl>
//             <Heading size="md">Card Details</Heading>
//             <CardElement className="card-element" />
//             <Button
//               type="submit"
//               colorScheme="blue"
//               size="lg"
//               isLoading={!stripe}
//               loadingText="Processing"
//             >
//               Pay
//             </Button>
//           </Stack>
//         </form>
//       </Box>
//     </VStack>
//   );
// };

// export default PaymentForm;

import React, { useState, useEffect } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import {
  Box,
  Heading,
  Stack,
  Button,
  Text,
  useToast,
  Image,
  Flex,
  Center,
  Input
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import bankLogo from '../../Assest/checkout_bank.png'

const PaymentForm = () => {
  const navigation = useNavigate();
  const toast = useToast({position:'top'})
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    // Replace this with your actual API endpoint to fetch the client secret
    fetch('http://localhost:8000/checkout/create-payment-intent', {
      method: 'POST',
      //body: JSON.stringify({ cartItems }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
      })
      .catch((error) => console.error('Error fetching client secret:', error));
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements || !clientSecret) {
      return;
    }

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (result.error) {
      console.log('Payment error:', result.error);
    } else {
      console.log('Payment succeeded:', result.paymentIntent);
      //window.location.href = '/successpayment';
      // toast({
      //   title:'Item Deleted successfully!!',
      //   status:'success',
      //   duration:3000,
      //   isClosable:true
      // })
      navigation('/successpay')
    }
  };

  return (
    <Center>
    <Box p={4} borderWidth={1} borderRadius="md" mt={'10%'} w={'35%'}>
      <Heading as="h2" size="lg" mb={4} textAlign="center">
        Payment Details
      </Heading>
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <Input placeholder={'Cardholder name'}/>
          <Flex justifyContent={'space-between'}> 
            <Text fontWeight={'bold'}>Card Details</Text>
            <Image src={bankLogo} w={75} mr={10}/>
          </Flex>
        
          <Box borderWidth="1px" p={4}>  
            <CardElement />
          </Box>
          <Text color={'red'}>please use 4242 4242 4242 4242 as card no. for stripe testmode</Text>
          <Button
            type="submit"
            colorScheme="blue"
            size="lg"
            isLoading={!stripe}
            loadingText="Processing"
          >
            Pay
          </Button>
        </Stack>
      </form>
    </Box>
    </Center>
  );
};

export default PaymentForm;

