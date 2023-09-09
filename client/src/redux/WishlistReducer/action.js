import axios from "axios"
import { WISHLIST_DELETE, WISHLIST_FAIL, WISHLIST_GET, WISHLIST_REQ, WISHLIST_SUCCESS } from "./actiontype"
import Cookies from 'js-cookie'
import { toast } from "react-toastify"

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
        let msg = res.data.message
        console.log(res.data.message,'wishlist msg')
        if(msg =='Product added to wishlist successfully'){
          toast('🥳 Product added to wishlist successfully',{ style: { fontWeight: 'bold', fontSize: '15px', color: 'black' } })
        }
        else if(msg === 'Product is already in the wishlist'){
          toast('Product is already in the wishlist',{ style: { fontWeight: 'bold', fontSize: '15px', color: 'black' } })
        }
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

export const removeWishlist = (obj) => async (dispatch) => {
    const id = obj.id;
    const token = Cookies.get('token') || JSON.parse(localStorage.getItem('token'));
  
    const headers = {
      Authorization: `Bearer ${token}`,
    };
  
    try {
      dispatch({ type: WISHLIST_REQ });
  
      // Add the product to the cart
      await axios.post('http://localhost:8000/cart/addToCart', obj, { headers });
  
      // Delete the product from the wishlist
      const deleteResponse = await axios.delete(`http://localhost:8000/wishlist/delete/${id}`, { headers });
  
      const deleteMessage = deleteResponse.data.message;
  
      if (deleteMessage === 'Product removed from wishlist successfully') {
        toast('🎊 Product moved to cart successfully', { style: { fontWeight: 'bold', fontSize: '15px', color: 'black' } });
      }
  
      // Fetch the updated wishlist data
      const wishlistResponse = await axios.get('http://localhost:8000/wishlist', { headers });
      const updatedWishlist = wishlistResponse.data.product;
  
      // Update the Redux store with the updated wishlist
      dispatch({ type: WISHLIST_DELETE, payload: updatedWishlist });
    } catch (error) {
      console.log(error.message);
    }
  };
  