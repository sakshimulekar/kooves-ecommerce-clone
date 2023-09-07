import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { googleLoginSuccess } from '../redux/authReducer/action';

const GoogleLoginCallbackPage = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((store) => store.authReducer.token);
    console.log(isAuth,'8')
  useEffect(() => {
    // Get the token from local storage
    const token = JSON.parse(localStorage.getItem('token'))
    console.log(token,'12')
    // Assuming you have received the user data in the URL as well (modify the code accordingly)
    const searchParams = new URLSearchParams(window.location.search);
    const tokenfromurl=searchParams.get('token')
    console.log(tokenfromurl,'16')
    const userData = {
      firstName: searchParams.get('firstName'),
      picture: searchParams.get('picture'),
      id:searchParams.get('id')
    };
    console.log(userData)
    localStorage.setItem('token',JSON.stringify(tokenfromurl))
    localStorage.setItem('user',JSON.stringify(userData))
    
    // Dispatch the action to update the Redux state with user data and token
    dispatch(googleLoginSuccess(userData, tokenfromurl));

    // Redirect the user to the desired page after successful login
    // window.location.href = '/dashboard'; // Replace with the desired page
  }, [dispatch]);

  console.log(isAuth);

  return <div>Logging in...</div>; // Or you can show a loading spinner
};

export default GoogleLoginCallbackPage;


