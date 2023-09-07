//import { GOOGLE_LOGIN_SUCCESS, LOGIN_FAIL, LOGIN_REQ, LOGIN_SUCCESS, SIGN_SUCCESS, STORE_TOKEN } from "./actiontype"
// import axios from "axios";

// export const signup=(obj)=>(dispatch)=>{
//     dispatch({type:LOGIN_REQ})
//     axios.post("http://localhost:8000/users/register",obj)
//     .then((res)=>{
//         //console.log(res.data)
//         dispatch({type:SIGN_SUCCESS,payload:res})
//     })
//     .catch((err)=>{
//         dispatch({type:LOGIN_FAIL})
//     })
// }

// export const login=(obj)=>(dispatch)=>{
//     dispatch({type:LOGIN_REQ})
//     axios.post("http://localhost:8000/users/login",obj)
//     .then((res)=>{
//         const token=res.data.token
        
//         dispatch({type:LOGIN_SUCCESS,payload:token})
//     })
//     .catch((err)=>{
//         dispatch({type:LOGIN_FAIL})
//     })
// }

// export const googlelogin = () => () => {
//   window.open('http://localhost:8000/auth/google', '_self');
// };

// export const googleLoginSuccess = (userData, token) =>(dispatch)=> {
// //  console.log(userData)
//   return dispatch({
//     type: GOOGLE_LOGIN_SUCCESS,
//     payload: {
//       userData,
//       token,
//     },
//   });
// };



//from chatgpt
import axios from "axios";
import Cookies from 'js-cookie'; // Import the js-cookie library
import {
  GOOGLE_LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGIN_REQ,
  LOGIN_SUCCESS,
  LOGOUT,
  SIGN_SUCCESS,
} from "./actiontype";

export const signup = (obj) => (dispatch) => {
  dispatch({ type: LOGIN_REQ });
  axios.post("http://localhost:8000/users/register", obj)
    .then((res) => {
      console.log(res,'signup 62')
      dispatch({ type: SIGN_SUCCESS, payload: res });
    })
    .catch((err) => {
      dispatch({ type: LOGIN_FAIL });
    });
};

export const login = (obj) => (dispatch) => {
  dispatch({ type: LOGIN_REQ });
  axios.post("http://localhost:8000/users/login", obj)
    .then((res) => {
      console.log(res)
      const token = res.data.token;
      const userId = res.data.user._id
      const user = res.data.user.firstName
      console.log(token,"|| 73 token and user || ",userId)
      if(token){
        Cookies.set('token',token)
      }
      if(userId){
        Cookies.set('userId',userId)
      }
      if(user){
        Cookies.set('user',user)
      }
      // Store the token in a cookie that expires in 7 days
      
      
      //document.cookie = `jsonCookie=${JSON.stringify(user)}`;

      dispatch(loginSuccessWithToken(userId,token));
    })
    .catch((err) => {
      console.log(err.message)
      dispatch({ type: LOGIN_FAIL });
    });
};

export const logout = async(dispatch) => {
  const token = Cookies.get('token') || JSON.parse(localStorage.getItem('token')); // Get the token from the cookie
    console.log(token,'30')
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  try {
    let res = await axios.post('http://localhost:8000/users/logout',null,{headers})
    console.log(res.data)
    Cookies.remove('token')
    localStorage.remove()
    dispatch({type:LOGOUT})
  } catch (error) {
    console.log(error.message)
  }
}
export const googlelogin = () => () => {
  window.open('http://localhost:8000/auth/google', '_self');
};

export const googleLoginSuccess = (userData, token) => (dispatch) => {
  console.log(token)
  dispatch(loginSuccessWithToken(token)); // Set the token in Redux
  dispatch({
    type: GOOGLE_LOGIN_SUCCESS,
    payload: {
      userData,
      token,
    },
  });
};

export const loginSuccessWithToken = (userData,token) => (dispatch) => {
  // You can add logic here to validate the token on the server-side if needed
  console.log(userData,'135')
  dispatch({ type: LOGIN_SUCCESS, payload: {userData,token} });
};