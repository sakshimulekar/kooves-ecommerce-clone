import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Home from '../component/Home/Home'
import Productlist from '../component/product/Productlist';

const MainRoute = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<Productlist/>}/>
      </Routes>
    </>
  )
}

export default MainRoute
