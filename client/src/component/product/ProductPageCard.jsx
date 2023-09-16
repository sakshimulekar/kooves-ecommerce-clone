import React, { useState } from 'react'
import CardWithHover from './CardWithHover'
import ProductCard from './CardWithHover'
import { Box, Grid } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { wishListAction } from '../../redux/WishlistReducer/action'
import ModalComponent from './ModalComponent'


const ProductPageCard = ({data}) => {
  const [openPage, setOpenPage] = useState(false);
  const [productSelect, setProductSelect] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isAuth = useSelector((store) => store.authReducer.isAuth);
  const navigate = useNavigate()
  const toggleModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen((prevState) => !prevState);
  };

  const handleIcon = (id) => {
    setProductSelect(id);
    setOpenPage((p) => !p);
    navigate(`/Product/${id}`);
  };

  const handleClick = (obj) => {
    if (isAuth) {
      dispatch(wishListAction(obj));
    } else {
      navigate('/tablogin');
    }
  };
  console.log(data)
  return (
    <Box p={10}>
      <Grid
        templateColumns='repeat(4, 1fr)'
        templateRows='repeat(2, 1fr)'
        gap={10}
        w={'-webkit-fit-content'}
        margin={'auto'}
        pt={10}
        // border={'1px'}
        // borderColor={'red'}
      >
        {data?.map((e) => {
          return (
            <ProductCard
              handleIcon={() => handleIcon(e._id)}
              handleIconClick={() => toggleModal(e)}
               handleSecClick={()=>handleClick(e)} // You can remove this line if not needed.
              {...e}
              key={e._id}
            />
          );
        })}
      </Grid>
      {isModalOpen && selectedProduct && (
        <ModalComponent
          closeModal={toggleModal}
                  product={selectedProduct}
                />
      )}
    </Box>
  )
}

export default ProductPageCard
