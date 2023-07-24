import { PRODUCT_FAIL, PRODUCT_REQ, PRODUCT_SUCCESS } from "./actionType"

const initial={
    isLoad:false,
    isErr:false,
    products:[]
}

export const reducer=(state=initial,{type,payload})=>{
    switch(type){
        case PRODUCT_REQ:
            return {...state,isLoad:true}
        case PRODUCT_SUCCESS:
            return {...state,products:payload}
        case PRODUCT_FAIL:
            return {...state,isErr:true}
        default :
        return state
    }
}