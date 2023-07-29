import axios from "axios"
import { WISHLIST_FAIL, WISHLIST_REQ, WISHLIST_SUCCESS } from "./actiontype"

export const wishListAction=(obj)=>(dispatch)=>{
    console.log(obj)
    dispatch({type:WISHLIST_REQ})
    axios.post('http://localhost:8000/wishlist/addtowishlist',obj)
    .then((res)=>{
        console.log(res.data.card,"wishlist action")
        console.log(res.data.msg,'wishlist msg')
        dispatch({type:WISHLIST_SUCCESS,payload:res.data.card})
    })
    .catch((err)=>{
        dispatch({type:WISHLIST_FAIL})
    })
}