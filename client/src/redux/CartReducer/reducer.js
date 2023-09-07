import { CART_ADD, CART_DEL, CART_GET } from "./actionType";

const initial = {
    isLoad: false,
    isErr: false,
    cart: [],
    msg: ""
}

export const reducer = (state = initial, { type, payload }) => {
    switch (type) {
        case CART_GET:
            return { ...state, isLoad: false, cart: payload.cart, msg: payload.msg };
        case CART_ADD:
            return { ...state, isLoad: false,  msg: payload.msg };
        case CART_DEL:
            return {...state,isLoad: false,  msg: payload.msg}
        default:
            return state;
    }
}
