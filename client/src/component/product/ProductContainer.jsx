// ProductContainer.js
import React, { useEffect, useState } from 'react';
import ProductCard from './CardWithHover';
import ModalComponent from './ModalComponent';
import FilterSelect from './FilterSelect';
import {useDispatch, useSelector} from "react-redux"
import { menProducts } from '../../redux/productReducer/action';
import { Grid } from '@chakra-ui/react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { wishListAction } from '../../redux/WishlistReducer/action';

const ProductContainer = () => {
  const navigate = useNavigate()
  const isAuth = useSelector(store=>store.authReducer.isAuth)
  const product=useSelector(store=>store.productReducer.products)
  const wishlist=useSelector(store=>store.wishlistReducer.wishlist)
  console.log(wishlist)
  const [selectedProduct, setSelectedProduct] = useState(null);

  const dispatch=useDispatch()
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchParams]=useSearchParams()
  const location=useLocation()

  const toggleModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(prevState => !prevState);
  };
  let obj={
    params : {
      brand:searchParams.getAll("brand"),
      categories : searchParams.getAll("category"),
      sizes:searchParams.getAll("size"),
      color:searchParams.getAll("colour")
      // _sort : searchParams.get("order") && "price",
      // _order:searchParams.get("order"),
      // _limit : 3,
      // _page : searchParams.get("page"),
    }
  }

  const handleIcon=(id)=>{
    console.log(id)
  }
  const handleClick=(obj)=>{
    console.log(obj,'add to wishlist 44')
    if(isAuth){
      dispatch(wishListAction(obj))
    }
    else{
      navigate('/login')
    }
  }
  //console.log(obj)
  useEffect(()=>{
    dispatch(menProducts(obj))
    console.log(product)
    console.log(wishlist)
  },[location.search])
  return (
    <div>
      <FilterSelect/>
      <Grid templateColumns='repeat(3, 1fr)' templateRows='repeat(2, 1fr)' gap={10}  w={"70%"} margin={'auto'}>
      {product?.map((e)=>{
        return (
          <ProductCard 
          handleIcon={() => handleIcon(e._id)}
          handleIconClick={() => toggleModal(e)} // Pass the selected product to the toggleModal function
          handleSecClick={()=>handleClick(e)} // I noticed you are not using this prop in the ProductCard component, consider removing it if not needed.
          {...e}
          key={e._id}
          />
        )
      })}
      </Grid>
        {isModalOpen && selectedProduct && (
        <ModalComponent
          closeModal={toggleModal}
          product={selectedProduct} // Pass the selected product to the ModalComponent
        />
      )}
    </div>
  );
};

export default ProductContainer;
