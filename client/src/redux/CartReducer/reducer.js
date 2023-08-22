import { CART_ADD, CART_GET } from "./actionType";

const initial = {
    isLoad : false,
    isErr : false,
    cart : [],
    msg : ""
}

export const reducer = (state=initial,{type,payload})=>{
    switch (type) {
        case CART_GET:
            return {...state,isLoad:false,cart:payload.cart,msg:payload.msg}
            break;
        case CART_ADD:
            return {...state,isload:false,cart:[...state.payload.cart],msg:payload.msg}
        default:
            return state;
            break;
    }
}