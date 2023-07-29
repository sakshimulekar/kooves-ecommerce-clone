import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Home from '../component/Home/Home'
import Products from '../pages/Products'
import Login from '../component/Login'
import SignUp from '../component/SignUp'
import Wishlist from '../component/Wishlist/Wishlist'


const MainRoute = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<SignUp/>}/>
        <Route path='/product' element={<Products/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
      </Routes>
    </>
  )
}

export default MainRoute
