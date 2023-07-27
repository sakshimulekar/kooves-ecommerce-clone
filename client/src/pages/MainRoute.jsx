import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Home from '../component/Home/Home'
import Products from '../pages/Products'

import ProductPage from '../component/product/ProductPageCard'
import ProductPageCard from '../component/product/ProductPageCard'
import Wishlist from '../component/Wishlist/Wishlist'




const MainRoute = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<Products/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
      </Routes>
    </>
  )
}

export default MainRoute
