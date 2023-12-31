import { WISHLIST_DELETE, WISHLIST_FAIL, WISHLIST_GET, WISHLIST_REQ, WISHLIST_SUCCESS } from "./actiontype"

const initial={
    isLoad:false,
    isErr : false,
    wishlist : []
}
export const reducer=(state=initial,{type,payload})=>{
    switch(type){
        case WISHLIST_REQ:
            return {...state,isLoad:true}
        case WISHLIST_FAIL:
            return {...state,isErr:true,isLoad:false}
        case WISHLIST_GET:
            return {...state,wishlist:payload,isLoad:false}
        case WISHLIST_SUCCESS:
            return {...state,isLoad:false}
        case WISHLIST_DELETE:
            return {...state,isLoad:false,wishlist:payload}
        default :
        return state
    }
}