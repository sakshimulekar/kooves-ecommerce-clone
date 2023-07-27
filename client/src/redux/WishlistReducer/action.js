import axios from "axios"
import { WISHLIST_REQ } from "./actiontype"

export const wishList=()=>(dispatch)=>{
    dispatch({type:WISHLIST_REQ})
    
}