import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Home from '../component/Home/Home'
import ProductPage from '../component/product/ProductPage'



const MainRoute = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<ProductPage/>}/>
      </Routes>
    </>
  )
}

export default MainRoute
