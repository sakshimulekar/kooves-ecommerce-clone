import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { login } from '../redux/authReducer/action';

const PrivateRoute = ({ children }) => {
  const auth = useSelector((store) => store.authReducer.isAuth);
  console.log(auth);
 // const navigate = useNavigate();

  return (
    <>
    {auth?children:(<Navigate to={'/login'}/>)}
    </>
  )
};

export default PrivateRoute;
