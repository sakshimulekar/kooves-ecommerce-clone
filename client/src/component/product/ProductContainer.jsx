// ProductContainer.js
import React, { useEffect, useState } from 'react';
import ProductCard from './CardWithHover';
import ModalComponent from './ModalComponent';
import FilterSelect from './FilterSelect';
import {useDispatch, useSelector} from "react-redux"
import { menProducts } from '../../redux/productReducer/action';
import { Grid } from '@chakra-ui/react';

const ProductContainer = () => {
  const product=useSelector(store=>store.productReducer.products)
  console.log(product)
  const dispatch=useDispatch()
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(prevState => !prevState);
  };

  useEffect(()=>{
    dispatch(menProducts())
  },[])
  return (
    <div>
      <FilterSelect/>
      <Grid templateColumns='repeat(3, 1fr)' templateRows='repeat(2, 1fr)' gap={5}>
      {product?.map((e)=>{
        return (
          <ProductCard handleIconClick={toggleModal} handleSecClick={toggleModal} {...e} key={e._id}/>
        )
      })}
      </Grid>
      {isModalOpen && <ModalComponent closeModal={toggleModal} />}
    </div>
  );
};

export default ProductContainer;
