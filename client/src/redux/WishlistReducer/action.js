import axios from "axios"
import { WISHLIST_FAIL, WISHLIST_GET, WISHLIST_REQ, WISHLIST_SUCCESS } from "./actiontype"
import Cookies from 'js-cookie'

export const wishListAction=(obj)=>(dispatch)=>{
    console.log(obj)
    const token = Cookies.get('token') || JSON.parse(localStorage.getItem('token')); // Get the token from the cookie
    console.log(token,'30')
    const headers = {
        Authorization: `Bearer ${token}`,
    };
    dispatch({type:WISHLIST_REQ})
    axios.post('http://localhost:8000/wishlist/addtowishlist',obj,{headers})
    .then((res)=>{
        console.log(res.data.msg,"wishlist action")
        console.log(res.data.message,'wishlist msg')
        dispatch({type:WISHLIST_SUCCESS,payload:res.data.msg})
    })
    .catch((err)=>{
        dispatch({type:WISHLIST_FAIL})
    })
}

export const getWishList = () => async(dispatch) => {
    const token = Cookies.get('token') || JSON.parse(localStorage.getItem('token')); // Get the token from the cookie
    console.log(token,'30')
    const headers = {
        Authorization: `Bearer ${token}`,
    };
    try {
        dispatch({type:WISHLIST_REQ})
        const response = await axios.get('http://localhost:8000/wishlist',{headers})
        console.log(response)
        dispatch({type:WISHLIST_GET,payload:response.data.product})
    } catch (error) {
        console.log(error.message)
    }
}