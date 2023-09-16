import axios from 'axios'
import { CART_ADD, CART_DEL, CART_FAIL, CART_GET, CART_REQ } from './actionType';
import Cookies from 'js-cookie';
import {toast} from "react-toastify"


export const addCart = (obj) => async(dispatch) => {
  console.log(obj.id,": 8")
    const token = Cookies.get('token') || JSON.parse(localStorage.getItem('token')); // Get the token from the cookie
    console.log(token,'30')
  const headers = {
    Authorization: `Bearer ${token}`,
  };
    try {
        dispatch({type:CART_REQ})
        let response = await axios.post('https://stylehub-vb4k.onrender.com/cart/addToCart',obj,{headers})
        console.log(response)
       let message = await response.data.msg
        const cart = response.data.cart
        
        console.log(message,'20')
        if(message ==='Product added to cart successfully'){
            dispatch(toast('🎊 Product added to cart successfully',{style:{fontWeight:'bold',fontSize:'15px',color:"black"}}));
        }
        else if (message === 'Product already in cart') {
            dispatch(toast('⚠️ Product already in cart',{style:{fontWeight:'bold',fontSize:'15px',color:"black"}}));
        }
        Cookies.set('user',cart)
        dispatch({type:CART_ADD,payload:{cart,msg:response.data.msg}})
    } catch (error) {
        console.log(error.message)
        dispatch({type:CART_FAIL})
    }
}

// export const getCartItem = () => async(dispatch) => {
//   const token = Cookies.get('token') || JSON.parse(localStorage.getItem('token')); // Get the token from the cookie
//     console.log(token,'30')
//   const headers = {
//     Authorization: `Bearer ${token}`,
//   };
//   try {
//     const response = await axios.get('http://localhost:8000/cart',{headers})
//     console.log(response)
//     let cart = response.data.user.cart
//     let msg = response.data.msg
//     dispatch({type:CART_GET,payload:{cart,msg}})
//   } catch (error) {
//     console.log(error.message)
//   }
// }

export const getCartItem = () => async (dispatch) => {
  const token = Cookies.get('token') || JSON.parse(localStorage.getItem('token')); // Get the token from the cookie
  console.log(token, '30');
  const headers = {
      Authorization: `Bearer ${token}`,
  };
  try {
        dispatch({type:CART_REQ})
      const response = await axios.get('https://stylehub-vb4k.onrender.com/cart', { headers });
      console.log(response.data.user.cart);
      
      if (response.data && response.data.user && response.data.user.cart) {
          const cart = response.data.user.cart;
          const msg = response.data.msg;
          dispatch({ type: CART_GET, payload: { cart, msg } });
      } else {
          console.log("Cart data not found in response.");
      }
  } catch (error) {
      console.log(error.message);
      dispatch({type:CART_FAIL})
  }
};

export const deleteItemfromCart = (id) => async (dispatch) => {
  const token = Cookies.get('token') || JSON.parse(localStorage.getItem('token')); // Get the token from the cookie
  console.log(token, '30');
  const headers = {
      Authorization: `Bearer ${token}`,
  };
  try {
        dispatch({type:CART_REQ})
      const response = await axios.delete(`https://stylehub-vb4k.onrender.com/cart/delete/${id}`, { headers });
      //console.log(response.data.message);
      const msg = response.data.message;
      if(msg === "Cart item removed successfully"){
        toast('😞 Cart item removed successfully',{style:{fontWeight:'bold',fontSize:'15px',color:"black"}})
      }
      dispatch({type:CART_DEL,payload:msg})
      
      // if (response.data && response.data.user && response.data.user.cart) {
      //     const cart = response.data.user.cart;
      //     const msg = response.data.msg;
      //     dispatch({ type: CART_GET, payload: { cart, msg } });
      // } else {
      //     console.log("Cart data not found in response.");
      // }
  } catch (error) {
      console.log(error.message);
      dispatch({type:CART_FAIL})
  }
};
