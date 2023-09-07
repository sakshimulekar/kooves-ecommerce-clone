import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Home from '../component/Home/Home'
import Products from '../pages/Products'
import Login from '../component/Login'
import SignUp from '../component/SignUp'
import Wishlist from '../component/Wishlist/Wishlist'

import PrivateRoute from './PrivateRoute'
import Cart from '../component/cart/Cart'
import GoogleLoginCallbackPage from '../component/GoogleLoginCallbackPage'
import PaymentForm from '../component/checkout/PaymentForm'
// import Checkout from '../component/checkout/Checkout'

import DeleteCartItem from '../component/DeleteCartItem'
import AddressForm from '../component/checkout/AddressForm'
import { UnderConstruction } from '../component/maintainance/UnderConstruction'
import Successpayment from '../component/checkout/Successpayment'


const MainRoute = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<SignUp/>}/>
        <Route path='/product' element={<Products/>}/>
        <Route path='/wishlist' element={<PrivateRoute><Wishlist/></PrivateRoute>}/>
        <Route path='/success' element={<GoogleLoginCallbackPage/>}/>
        <Route path='/maintainance' element={<UnderConstruction/>}/>
        <Route path='/successpay' element={<Successpayment/>}/>
        <Route path='/cart' element={<PrivateRoute>
          <Cart/>
        </PrivateRoute>}/>
        <Route path='/address' element={<AddressForm/>}/>
        {/* <Route path='/checkout-success' element={<Checkout/>}/> */}
        <Route path='/checkout' element={<PaymentForm/>}/>
        <Route path='/deleteCartItem/:id' element={<DeleteCartItem/>}/>
      </Routes>
    </>
  )
}

export default MainRoute
