import axios from 'axios'
import { CART_ADD, CART_DEL, CART_GET } from './actionType';
import Cookies from 'js-cookie';



export const addCart = (obj) => async(dispatch) => {
  console.log(obj.id)
    const token = Cookies.get('token') || JSON.parse(localStorage.getItem('token')); // Get the token from the cookie
    console.log(token,'30')
  const headers = {
    Authorization: `Bearer ${token}`,
  };
    try {
        let response = await axios.post('http://localhost:8000/cart/addToCart',obj,{headers})
        console.log(response)
        console.log(response.data.cart,response.data.message)
        let cart = response.data.cart
        let msg = response.data.massage
        Cookies.set('user',cart)
        dispatch({type:CART_ADD,payload:{cart,msg}})
    } catch (error) {
        console.log(error.message)
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
      const response = await axios.get('http://localhost:8000/cart', { headers });
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
  }
};

export const deleteItemfromCart = (id) => async (dispatch) => {
  const token = Cookies.get('token') || JSON.parse(localStorage.getItem('token')); // Get the token from the cookie
  console.log(token, '30');
  const headers = {
      Authorization: `Bearer ${token}`,
  };
  try {
      const response = await axios.delete(`http://localhost:8000/cart/delete/${id}`, { headers });
      console.log(response.data.message);
      const msg = response.data.message;
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
  }
};