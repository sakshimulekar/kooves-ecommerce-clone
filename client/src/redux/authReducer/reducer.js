import { LOGIN_FAIL, LOGIN_REQ, LOGIN_SUCCESS, SIGN_SUCCESS } from "./actiontype";

const initial={
    isLoad:false,
    isErr:false,
    isAuth:false,
    token:""
}

export const reducer=(state=initial,{type,payload})=>{
    switch(type){
        case LOGIN_REQ:
            return {...state,isLoad:true}
        case SIGN_SUCCESS:
            return {...state,isLoad:false,isAuth:true}
        case LOGIN_SUCCESS:
            return {...state,isLoad:false,isAuth:true,token:payload}
        case LOGIN_FAIL:
            return {...state,isErr:true}
        default:
            return state;
    }
}