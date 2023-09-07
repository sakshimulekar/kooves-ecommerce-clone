import Cookies from "js-cookie";
import { GOOGLE_LOGIN_SUCCESS, LOGIN_FAIL, LOGIN_REQ, LOGIN_SUCCESS, LOGOUT, SIGN_SUCCESS } from "./actiontype";

//const cookieValue = document.cookie.split('; ').find(row => row.startsWith('jsonCookie=')).split('=')[1];

const initial = {
    isLoad: false,
    isErr: false,
    isAuth: !!Cookies.get('token')|| !!localStorage.getItem('token'),
    token: Cookies.get('token') || JSON.parse(localStorage.getItem('token')) || null,
    user: Cookies.get('user') || JSON.parse(localStorage.getItem('user'))|| {},
  };
  
  
export const reducer=(state=initial,{type,payload})=>{
    switch(type){
        case LOGIN_REQ:
            return {...state,isLoad:true}
        case SIGN_SUCCESS:
            return {...state,isLoad:false,isAuth:true}
        case LOGIN_SUCCESS:
            //let info = JSON.parse(localStorage.getItem('token'))
            //console.log(info)
            return {...state,isLoad:false,isAuth:true,token:payload.token,user:payload.userData}
        case LOGIN_FAIL:
            return {...state,isErr:true}
        case GOOGLE_LOGIN_SUCCESS:
            
            let info = initial.token
            console.log(info,'22 reducer')
            return {
                  ...state,
                  user: payload.userData,
                  token: payload.token,
                  isAuth: true,
                };

        case LOGOUT:
            return {...state,user:{},token:null,isAuth:false}
        default:
            return state;
    }
}