import React, { useEffect } from 'react'
import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux'
import { getCartItem } from '../../redux/CartReducer/action'


const CheckoutForm = () => {
  const auth = useSelector(store=>store.authReducer.user.id)
  const cart = useSelector(store=>store.cartReducer.cart)
  const dispatch = useDispatch()
  console.log(cart,'checkout form',auth)
  const handlecl = async() => {
    console.log('clicked')
    await axios.post('http://localhost:8000/checkout/create-checkout-session',{
      cart,
      userId:auth
    }).then((res)=>{
      console.log(res)
      if(res.data.url){
        window.location.href = res.data.url
      }
    })
    .catch(error=>console.log(error.message))
  }
  useEffect(()=>{
    dispatch(getCartItem())
  },[])
  return (
    <div style={{marginTop:'150px'}}>
      
      <button onClick={()=>handlecl()}>check out</button>
    </div>
  )
}

export default CheckoutForm
