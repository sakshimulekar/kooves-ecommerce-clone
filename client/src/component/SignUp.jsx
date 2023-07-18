import React, { useState } from 'react';
import { Input, Button, VStack } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../redux/authReducer/action';

const dataobj = {
  name: "",
  last: "",
  email: "",
  password: ""
};

const SignUp = () => {
  const [state, setState] = useState(dataobj);
  const isAuth = useSelector(store => store.authReducer.isAuth);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    let obj = {
      firstName: state.name,
      lastName: state.last,
      email: state.email,
      password: state.password
    };

    dispatch(signup(obj));

    setState(dataobj);
  };

  return (
    <VStack spacing={4} maxW="md" m="auto" p={4}>
      <Input type="text" placeholder="Name" name="name" value={state.name} onChange={handleClick} />
      <Input type="text" placeholder="Last Name" name="last" value={state.last} onChange={handleClick} />
      <Input type="email" placeholder="Email" name="email" value={state.email} onChange={handleClick} />
      <Input type="password" placeholder="Password" name="password" value={state.password} onChange={handleClick} />
      <Button colorScheme="blue" onClick={handleSubmit}>
        Sign Up
      </Button>
    </VStack>
  );
};

export default SignUp;
