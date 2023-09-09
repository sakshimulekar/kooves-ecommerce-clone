import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { deleteItemfromCart } from '../../redux/CartReducer/action'

const DeleteCartItem = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(deleteItemfromCart(id))
    })
    console.log(id,': deletecartitem check id')
  return (
    <div>
      
    </div>
  )
}

export default DeleteCartItem
