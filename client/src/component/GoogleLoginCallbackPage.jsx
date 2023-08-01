import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { googleLoginSuccess } from '../redux/authReducer/action';

const GoogleLoginCallbackPage = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((store) => store.authReducer.token);
    console.log(isAuth,'8')
  useEffect(() => {
    // Get the token from local storage
    const token = localStorage.getItem('token');

    // Assuming you have received the user data in the URL as well (modify the code accordingly)
    const searchParams = new URLSearchParams(window.location.search);
    const userData = {
      id: searchParams.get('id'),
      email: searchParams.get('email'),
      firstName: searchParams.get('firstName'),
      lastName: searchParams.get('lastName'),
      picture: searchParams.get('picture'),
    };

    // Dispatch the action to update the Redux state with user data and token
    dispatch(googleLoginSuccess(userData, token));

    // Redirect the user to the desired page after successful login
    // window.location.href = '/dashboard'; // Replace with the desired page
  }, [dispatch]);

  // The 'isAuth' state will now reflect the token value from 'localStorage'
  // It will be 'true' if the token exists in 'localStorage', otherwise 'false'
  console.log(isAuth);

  return <div>Logging in...</div>; // Or you can show a loading spinner
};

export default GoogleLoginCallbackPage;
