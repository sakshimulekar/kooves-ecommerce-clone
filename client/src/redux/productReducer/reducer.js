import { PRODUCT_FAIL, PRODUCT_REQ, PRODUCT_SUCCESS, SEARCH_FAILURE, SEARCH_REQ, SEARCH_SUCCESS } from "./actionType"

const initial={
    isLoad:false,
    isErr:false,
    products:[],
    searchResults : []
}

export const reducer=(state=initial,{type,payload})=>{
    switch(type){
        case PRODUCT_REQ:
            return {...state,isLoad:true}
        case PRODUCT_SUCCESS:
            return {...state,products:payload,isLoad:false}
        case PRODUCT_FAIL:
            return {...state,isErr:true}
        case SEARCH_REQ:
            return {...state,isLoad:true}
        case SEARCH_SUCCESS:
            return {...state,searchResults:payload,isLoad:false}
        case SEARCH_FAILURE:
            return {...state,isErr:true,isLoad:false}
        default :
        return state
    }
}