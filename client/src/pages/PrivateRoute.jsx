import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { loginSuccessWithToken } from '../redux/authReducer/action';

const PrivateRoute = ({ children }) => {
  const dispatch = useDispatch()
  // let Token = JSON.parse(localStorage.getItem('token')) 
  //dispatch(loginSuccessWithToken(Token))
  let auth = useSelector((store) => store.authReducer.isAuth);
  console.log(auth);
 // const navigate = useNavigate();

  return (
    <>
    {auth?children:(<Navigate to={'/login'}/>)}
    </>
  )
};

export default PrivateRoute;
