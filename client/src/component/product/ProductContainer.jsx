// ProductContainer.js
import React, { useEffect, useState } from 'react';
import ProductCard from './CardWithHover';
import ModalComponent from './ModalComponent';
import FilterSelect from './FilterSelect';
import {useDispatch, useSelector} from "react-redux"
import { menProducts } from '../../redux/productReducer/action';
import { Box, Grid,Center } from '@chakra-ui/react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { wishListAction } from '../../redux/WishlistReducer/action';
import LoadingCart from '../LottieAnimation/LoadingCart'
import Pagination from './Pagination';
import { Footer } from '../Footer/Footer';

const ProductContainer = () => {

  const navigate = useNavigate()
  const isAuth = useSelector(store=>store.authReducer.isAuth)
  const {products,isLoad} = useSelector(store=>store.productReducer)
  const wishlist=useSelector(store=>store.wishlistReducer.wishlist)
  const product = products.products
  console.log(product,'22')
  const totalPages = products.totalPages
  console.log(products,17)
  const [selectedProduct, setSelectedProduct] = useState(null);
  const dispatch=useDispatch()
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [page,setPage] = useState(1)
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
      color:searchParams.getAll("colour"),
      _sort : searchParams.get("order") && "price",
      _order:searchParams.get("order"),
      _rating : searchParams.get("rating"),
      // _limit : 8,
      // _page : searchParams.get("page"),
    }
  }

  const handleIcon=(id)=>{
    //console.log(id)
  }
  const handleClick=(obj)=>{
    //console.log(obj,'add to wishlist 44')
    if(isAuth){
      
      dispatch(wishListAction(obj))
    }
    else{
      navigate('/login')
    }
  }
  //console.log(isLoad)
  useEffect(()=>{
    //console.log(page,52)
    dispatch(menProducts(obj,page))
  },[location.search,page])

  return (
    <Box>
     
        {isLoad && <Box  mt={'10%'}>{<LoadingCart/>}</Box>}
      
      {!isLoad && <>
      <FilterSelect/>
      <Grid templateColumns='repeat(4, 1fr)' templateRows='repeat(2, 1fr)' gap={10}  w={"80%"} margin={'auto'} pt={10}>
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
      <Grid>
        <Center m={10} p={10}> 
          {<Pagination page={page} setPage={setPage} totalPages={totalPages}/>}
        </Center>
      </Grid>
        {isModalOpen && selectedProduct && (
        <ModalComponent
          closeModal={toggleModal}
          product={selectedProduct} // Pass the selected product to the ModalComponent
        />
      )}
      <Footer/>
      </>}


    </Box>
  );
};

export default ProductContainer;
