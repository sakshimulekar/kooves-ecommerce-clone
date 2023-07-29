import { WISHLIST_FAIL, WISHLIST_REQ, WISHLIST_SUCCESS } from "./actiontype"

const initial={
    isLoad:false,
    isErr : false,
    wishlist : []
}
export const reducer=(state=initial,{type,payload})=>{
    switch(type){
        case WISHLIST_REQ:
            return {...state,isLoad:true}
        case WISHLIST_SUCCESS:
            return {...state,wishlist:[...state.wishlist,payload],isLoad:false}
        case WISHLIST_FAIL:
            return {...state,isErr:true}
        default :
        return state
    }
}