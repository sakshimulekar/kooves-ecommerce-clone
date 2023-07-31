import React from 'react'
import Footer from "../component/Footer"
import ProductContainer from '../component/product/ProductContainer'
import Checkout from '../component/Checkout'
const Products = () => {
  return (
    <div style={{marginTop:"5%"}}>
      
      <ProductContainer/>
      <Checkout/>
      <Footer/>
    </div>
  )
}

export default Products
