import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getWishList } from '../../redux/WishlistReducer/action'

const Wishlist = () => {
  const dispatch = useDispatch()
  const wishlist = useSelector(store=>store.wishlistReducer.wishlist)
  
  
  useEffect(()=>{
    dispatch(getWishList())
  },[])

  console.log(wishlist,'wishlist 14')
  return (
    <div>
      
    </div>
  )
}

export default Wishlist
