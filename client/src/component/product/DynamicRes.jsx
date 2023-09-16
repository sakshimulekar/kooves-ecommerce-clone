import { Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ProductPageCard from './ProductPageCard'

const DynamicRes = () => {
    const {val} = useParams()
    const [data,setData] = useState([])
    const {selected} = useSelector(store=>store.productReducer)
    const handleRes = () =>{
        setData(selected)
        console.log(data)
    }
    useEffect(()=>{
        handleRes()
    },[])
    const filtered = data?.filter(e=>e.categories===val)
    //console.log(filtered)
    console.log(data)
  return (
    <Box mt={'5%'}>
    <Box  w={'80%'} m={'auto'}>
      <ProductPageCard data={filtered}/>
    </Box>
    </Box>
  )
}

export default DynamicRes
