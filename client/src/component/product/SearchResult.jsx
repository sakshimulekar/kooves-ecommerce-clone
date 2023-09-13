import { Box, Grid, Heading,Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import LoadingCart from '../LottieAnimation/LoadingCart'
import {
  
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@chakra-ui/react'
import {ChevronRightIcon} from '@chakra-ui/icons'
import ProductCard from './CardWithHover'

const SearchResult = () => {
  const [result,setResult] = useState([])
  const {searchResults,isLoad} = useSelector(store=>store.productReducer)
  console.log(searchResults,' : 6 from searchResult page')
  const handleChange = () =>{
    setResult(searchResults)
  }
  useEffect(()=>{
    handleChange()
  },[searchResults])
  return (
    <Box mt={'5%'} >
      <Box m={'auto'} w={'100%'}>
      {/* <Breadcrumb fontWeight='bold' fontSize='lg' ml={10}>
        <BreadcrumbItem>
          <BreadcrumbLink href='/'>Home </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href='#'>Search by Product</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb> */}

      {isLoad && <><LoadingCart/></>}
      
      {!isLoad && !searchResults?.length  && <Box m={'auto'}  h={'80vh'} >
        <Heading textAlign={'center'} mt={'15%'}  color={'gray.400'}> No result found</Heading>
        </Box>
      }
      {!isLoad && searchResults?.length && searchResults?.map((e)=>{
        return (
        <Grid templateColumns='repeat(4, 1fr)'  gap={10}  w={"80%"} margin={'auto'} pt={10} border={'1px'}>
            <Box>
            <ProductCard {...e}/>
            </Box>
        </Grid>
      )})}
      </Box>
    </Box>
  )
}

export default SearchResult
