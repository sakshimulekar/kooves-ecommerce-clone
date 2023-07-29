import React, { useState } from 'react';
import { Button, Input, Stack, Heading, useToast } from '@chakra-ui/react';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/authReducer/action';

const obj = {
  email: "",
  password: ""
};

const Login = () => {
  const [state, setState] = useState(obj);
  const isAuth = useSelector((store) => store.authReducer.token);
  const toast = useToast({
    position:"top"
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
        isClosable: true
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
    // Handle Google login logic here
    window.location.href='http://localhost:8000/auth/google'
  };

  return (
    <Stack spacing={4} maxW="md" m="auto" p={4}>
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
