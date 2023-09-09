import { CART_ADD, CART_DEL, CART_FAIL, CART_GET, CART_REQ } from "./actionType";

const initial = {
    isLoad: false,
    isErr: false,
    cart: [],
    msg: ""
}

export const reducer = (state = initial, { type, payload }) => {
    switch (type) {
        case CART_REQ:
            return {...state, isLoad:true,isErr:false}
        case CART_GET:
            return { ...state, isLoad: false, cart: payload.cart, msg: payload.msg };
        case CART_ADD:
            //console.log(payload.msg,'15 reducer msg')
            return { ...state, isLoad: false,isErr:false,  msg: payload.msg };
        case CART_DEL:
            return {...state,isLoad: false,  msg: payload.msg}
        case CART_FAIL:
            return {...state,isErr:true,isLoad:false}
        default:
            return state;
    }
}
