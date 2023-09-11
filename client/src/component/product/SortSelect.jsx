import React, { useEffect, useState } from 'react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import {useSearchParams} from "react-router-dom";
import { Button, Drawer, DrawerCloseButton, Tooltip,RadioGroup,Divider,Text,
    IconButton,FormLabel,Stack,Checkbox,DrawerOverlay, Flex, useDisclosure,DrawerContent,DrawerHeader,DrawerBody, Box, Input, Radio } from '@chakra-ui/react'


const SortSelect = ({handleSort,order,handleRating,rating}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    
     const buttonStyle = {
        border: 'none',
        background: 'none',
        boxShadow: 'none',
        cursor: 'pointer', // Optionally set cursor to pointer to indicate it's clickable
    };
    const handlesort = (e) => {
        const val = e.target.value
        //console.log(val,'19 sortpage')
        handleSort(val)
    }
    const handlerating = (e) => {
        const val = e.target.value
        //console.log(val,"24 rating")
        handleRating(val)
    }
  return (
    <div>
      <Button style={buttonStyle} onClick={onOpen} >Sorting {<ChevronDownIcon/>}</Button>
        <Drawer
           
            isOpen={isOpen}
            onClose={onClose}
            placement='left'
        >
            <DrawerOverlay/>
            <DrawerContent >
                <DrawerCloseButton mt={20}/>
                <DrawerHeader   mt={20}>
                    Sorting
                </DrawerHeader>
                <DrawerBody>
                <Text as={'b'}>sort by price</Text>
                    <Box onChange={(e)=>handlesort(e)} m={5}>
                        <input 
                        type="radio" 
                        name='ItsPrice' 
                        value={"price_asc"} 
                        defaultChecked={order==="price_asc"} />
                        <label style={{marginLeft:'10px'}}> High to Low</label>

                        <br />
                        <input 
                        type="radio" 
                        name="ItsPrice" 
                        value={"price_desc"} 
                        defaultChecked={order==="price_desc"}
                        />
                        <label style={{marginLeft:'10px'}}>Low to High</label>
                    </Box>

                <Divider mb={5}/>
                <Text as={'b'} >sort by Rating</Text>
                    <Box onChange={(e)=>handlerating(e)} m={5}>
                        <input 
                        type="radio" 
                        name='Rating' 
                        value={"high"} 
                        defaultChecked={rating==="rating_asc"} />
                        <label style={{marginLeft:'10px'}}>High to Low</label>

                        <br />
                        <input 
                        type="radio" 
                        name="Rating" 
                        value={"low"} 
                        defaultChecked={rating==="rating_desc"}
                        />
                        <label style={{marginLeft:'10px'}}>Low to High</label>
                    </Box>
                    <Divider/>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    </div>
  )
}

export default SortSelect
