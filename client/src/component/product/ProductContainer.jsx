import React, { useEffect, useState } from 'react';
import ProductCard from './CardWithHover';
import ModalComponent from './ModalComponent';
import FilterSelect from './FilterSelect';
import { useDispatch, useSelector } from 'react-redux';
import { menProducts } from '../../redux/productReducer/action';
import { Box, Grid, Center } from '@chakra-ui/react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { wishListAction } from '../../redux/WishlistReducer/action';
import LoadingCart from '../LottieAnimation/LoadingCart';
import Pagination from './Pagination';
import { Footer } from '../Footer/Footer';
import SingleProduct from './SingleProduct';

const ProductContainer = () => {
  const navigate = useNavigate();
  const isAuth = useSelector((store) => store.authReducer.isAuth);
  const { products, isLoad } = useSelector((store) => store.productReducer);
  const wishlist = useSelector((store) => store.wishlistReducer.wishlist);
  const product = products?.products || []; // Initialize as an empty array
  const totalPages = products?.totalPages || 0; // Initialize as 0
  const [selectedProduct, setSelectedProduct] = useState(null);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const [openPage, setOpenPage] = useState(false);
  const [productSelect, setProductSelect] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isTablet, setIsTablet] = useState(window.innerWidth >= 768 && window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      setIsMobile(windowWidth < 768);
      setIsTablet(windowWidth >= 768 && windowWidth < 1024);
    };
    window.addEventListener('resize', handleResize);
    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures the effect runs only once

  const toggleModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen((prevState) => !prevState);
  };

  let obj = {
    params: {
      brand: searchParams.getAll('brand'),
      categories: searchParams.getAll('category'),
      sizes: searchParams.getAll('size'),
      color: searchParams.getAll('colour'),
      _sort: searchParams.get('order') && 'price',
      _order: searchParams.get('order'),
      _rating: searchParams.get('rating'),
    },
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

  useEffect(() => {
    dispatch(menProducts(obj, page));
  }, [location.search, page]);

  return (
    <Box >
      {(isMobile && !isTablet) && (
      <Box m={'auto'}  w={'-webkit-max-content'} >
        <Box>
          {isLoad && <Box mt={'10%'}>{<LoadingCart />}</Box>}
        </Box>
      
        <Box  m={'auto'}>
          {!isLoad && (
            <>
              <FilterSelect />
              <Grid
                templateColumns='repeat(1, 1fr)'
                templateRows='repeat(2, 1fr)'
                gap={10}
                w={'-webkit-fit-content'}
                margin={'auto'}
                pt={10}
              >
                {product?.map((e) => {
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
              <Grid>
                <Center m={10} p={10}>
                  {<Pagination page={page} setPage={setPage} totalPages={totalPages} />}
                </Center>
              </Grid>
              {isModalOpen && selectedProduct && (
                <ModalComponent
                  closeModal={toggleModal}
                  product={selectedProduct}
                />
              )}
              
            </>
          )}
        </Box>
      </Box>
      )}

      {(!isMobile && isTablet) && (
      <>
        <Box>
          {isLoad && <Box mt={'10%'}>{<LoadingCart />}</Box>}
        </Box>
      
        <Box border={'1px'}>
          {!isLoad && (
            <>
              <FilterSelect />
              <Grid
                templateColumns='repeat(2, 1fr)'
                templateRows='repeat(2, 1fr)'
                gap={10}
                w={'80%'}
                margin={'auto'}
                pt={10}
              >
                {product?.map((e) => {
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
              <Grid>
                <Center m={10} p={10}>
                  {<Pagination page={page} setPage={setPage} totalPages={totalPages} />}
                </Center>
              </Grid>
              {isModalOpen && selectedProduct && (
                <ModalComponent
                  closeModal={toggleModal}
                  product={selectedProduct}
                />
              )}
              
            </>
          )}
        </Box>
      </>
      )}

      {/* {---------------------for windows responsiveness----------------------} */}
      {(!isMobile && !isTablet) && (
            <>
              <Box>
                {isLoad && <Box mt={'10%'}>{<LoadingCart />}</Box>}
              </Box>
            
              <Box>
                {!isLoad && (
                  <>
                    <FilterSelect />
                    <Grid
                      templateColumns='repeat(4, 1fr)'
                      templateRows='repeat(2, 1fr)'
                      gap={10}
                      w={'80%'}
                      margin={'auto'}
                      pt={10}
                    >
                      {product?.map((e) => {
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
                    <Grid>
                      <Center m={10} p={10}>
                        {<Pagination page={page} setPage={setPage} totalPages={totalPages} />}
                      </Center>
                    </Grid>
                    {isModalOpen && selectedProduct && (
                      <ModalComponent
                        closeModal={toggleModal}
                        product={selectedProduct}
                      />
                    )}
                   
                  </>
                )}
              </Box>
              
            </>
            )}
    </Box>
  );
};

export default ProductContainer;

