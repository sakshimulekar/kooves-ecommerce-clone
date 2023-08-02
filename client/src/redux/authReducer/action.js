import { GOOGLE_LOGIN_SUCCESS, LOGIN_FAIL, LOGIN_REQ, LOGIN_SUCCESS, SIGN_SUCCESS, STORE_TOKEN } from "./actiontype"
import axios from "axios";

export const signup=(obj)=>(dispatch)=>{
    dispatch({type:LOGIN_REQ})
    axios.post("http://localhost:8000/users/register",obj)
    .then((res)=>{
        //console.log(res.data)
        dispatch({type:SIGN_SUCCESS,payload:res})
    })
    .catch((err)=>{
        dispatch({type:LOGIN_FAIL})
    })
}

export const login=(obj)=>(dispatch)=>{
    dispatch({type:LOGIN_REQ})
    axios.post("http://localhost:8000/users/login",obj)
    .then((res)=>{
        const token=res.data.token
        localStorage.setItem('token',token)
        dispatch({type:LOGIN_SUCCESS,payload:token})
    })
    .catch((err)=>{
        dispatch({type:LOGIN_FAIL})
    })
}

export const googlelogin = () => () => {
  window.open('http://localhost:8000/auth/google', '_self');
};

export const googleLoginSuccess = (userData, token) =>(dispatch)=> {
//  console.log(userData)
  return dispatch({
    type: GOOGLE_LOGIN_SUCCESS,
    payload: {
      userData,
      token,
    },
  });
};



