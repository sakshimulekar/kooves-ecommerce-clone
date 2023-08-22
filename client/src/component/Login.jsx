import React, { useState } from 'react';
import { Button, Input, Stack, Heading, useToast } from '@chakra-ui/react';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { googlelogin, login } from '../redux/authReducer/action';

const obj = {
  email: "",
  password: ""
};

const Login = () => {
  const [state, setState] = useState(obj);
  const isAuth = useSelector((store) => store.authReducer.isAuth);
  
  console.log(isAuth)
  const toast = useToast({
    position:"top",
    
  });
  const dispatch = useDispatch();

  const handleClick = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = () => {
    // Handle login logic here
    let dataObj = {
      email: state.email,
      password: state.password
    };
    
    // Dispatch the login action
    dispatch(login(dataObj));

    // Show toast notification based on authentication status
    if (isAuth) {
      toast({
        title: 'Login Successful',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    } else {
      toast({
        title: 'Login Failed',
        status: 'error',
        duration: 5000,
        isClosable: true
      });
    }
  };

  const handleFacebookLogin = () => {
    // Handle Facebook login logic here
  };

  const handleGoogleLogin = () => {
    dispatch(googlelogin())
  };

  return (
    <Stack spacing={4} maxW="md" m="auto" p={4} mt={100}>
      <Heading>Log In</Heading>
      <Input type="email" placeholder="Email" name="email" value={state.email} onChange={handleClick} />
      <Input type="password" placeholder="Password" name="password" value={state.password} onChange={handleClick} />
      <Button
        size="lg"
        colorScheme="black"
        backgroundColor="black"
        color="white"
        _hover={{ backgroundColor: 'gray.700' }}
        _active={{ backgroundColor: 'gray.800' }}
        onClick={handleLogin}
      >
        Log In
      </Button>
      <Button
        colorScheme="facebook"
        leftIcon={<FaFacebook />}
        size="lg"
        onClick={handleFacebookLogin}
      >
        Log in with Facebook
      </Button>
      <Button
        colorScheme="red"
        leftIcon={<FaGoogle />}
        size="lg"
        onClick={handleGoogleLogin}
      >
        Log in with Google
      </Button>
    </Stack>
  );
};

export default Login;


// import React, { useState } from 'react';

// import { Button, Input, Stack, Heading, useToast } from '@chakra-ui/react';
// import { FaFacebook, FaGoogle } from 'react-icons/fa';
// import { useDispatch, useSelector } from 'react-redux';
// import { googlelogin, loginSuccessWithToken } from '../redux/authReducer/action'; // Import loginSuccessWithToken action
// import GoogleLogin from 'react-google-login'
// const obj = {
//   email: "",
//   password: ""
// };

// const Login = () => {
//   const [state, setState] = useState(obj);
//   const isAuth = useSelector((store) => store.authReducer.isAuth);
  
//   const googleClientId = process.env.GOOGLE_CLIENT_ID;
// const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;
// const secretKey = process.env.SECRET_KEY;

// // Use the variables in your code
// console.log('Google Client ID:', googleClientId);
// console.log('Google Client Secret:', googleClientSecret);
// console.log('Secret Key:', secretKey);

  
//   const toast = useToast({
//     position: "top",
//   });
//   const dispatch = useDispatch();

//   const handleClick = (e) => {
//     const { name, value } = e.target;
//     setState((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleLogin = () => {
//     let dataObj = {
//       email: state.email,
//       password: state.password
//     };

//     // Dispatch the loginSuccessWithToken action
//     dispatch(loginSuccessWithToken(dataObj)); // This action sets the token in Redux
//     console.log(isAuth);
//     // Show toast notification based on authentication status
//     if (isAuth) {
//       toast({
//         title: 'Login Successful',
//         status: 'success',
//         duration: 5000,
//         isClosable: true,
//       });
//     } else {
//       toast({
//         title: 'Login Failed',
//         status: 'error',
//         duration: 5000,
//         isClosable: true
//       });
//     }
//   };

//   const handleFacebookLogin = () => {
//     // Handle Facebook login logic here
//   };

//   // const handleGoogleLogin = () => {
//   //   dispatch(googlelogin());
//   // };
//   const handleGoogleLoginSuccess = (response) => {
//     // Send the response.accessToken to your server for verification
//     console.log('Google login success', response);
// };

//   return (
//     <Stack spacing={4} maxW="md" m="auto" p={4} mt={100}>
//       <Heading>Log In</Heading>
//       <Input type="email" placeholder="Email" name="email" value={state.email} onChange={handleClick} />
//       <Input type="password" placeholder="Password" name="password" value={state.password} onChange={handleClick} />
//       <Button
//         size="lg"
//         colorScheme="black"
//         backgroundColor="black"
//         color="white"
//         _hover={{ backgroundColor: 'gray.700' }}
//         _active={{ backgroundColor: 'gray.800' }}
//         onClick={handleLogin}
//       >
//         Log In
//       </Button>
//       <Button
//         colorScheme="facebook"
//         leftIcon={<FaFacebook />}
//         size="lg"
//         onClick={handleFacebookLogin}
//       >
//         Log in with Facebook
//       </Button>
//       {/* <Button
//         colorScheme="red"
//         leftIcon={<FaGoogle />}
//         size="lg"
//         onClick={handleGoogleLogin}
//       >
//         Log in with Google
//       </Button> */}

//       <GoogleLogin
//                 clientId="googleClientId"
//                 buttonText="Log in with Google"
//                 onSuccess={handleGoogleLoginSuccess}
//                 onFailure={(error) => console.log('Google login failed', error)}
//             />
//     </Stack>
//   );
// };

// export default Login;
