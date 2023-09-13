import { ChevronDownIcon } from '@chakra-ui/icons'
import { Button, Drawer, DrawerCloseButton, Tooltip,
    IconButton,FormLabel,Text,Stack,Checkbox,DrawerOverlay, Flex, useDisclosure,DrawerContent,DrawerHeader,DrawerBody, Box, Input } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import SortSelect from './SortSelect'
import Pagination from './Pagination'

const FilterSelect = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    
    const [searchParams,setsearchparams]=useSearchParams()
    const initialbrand=searchParams.getAll("brand")
    const initialcategory=searchParams.getAll("category")
    const initialsize=searchParams.getAll("size")
    const initialcolor=searchParams.getAll("colour")
    const initialorder = searchParams.get("order")
    const initialRating = searchParams.get("rating")
    const [page, setPage] = useState(1)
    const [order, setorder] = useState(initialorder || "")
    
    const [brand,setbrand]=useState(initialbrand||[])
    const [category,setcategory]=useState(initialcategory||[])
    const [size,setsize]=useState(initialsize || [])
    const [colour,setcolour]=useState([])
    const [rating,setRating] = useState(initialRating || "")

    const handleclick=(e)=>{
        let val=(e.target.value)
        let newbrand=[...brand]
        if(newbrand.includes(val)){
            newbrand=newbrand.filter((e)=>e!=val)
        }
        else{
            newbrand.push(val)
        }
        setbrand(newbrand)
        console.log(brand)
    }

    const handleCategory=(e)=>{
        let val=(e.target.value)
        let newcategory=[...category]
        if(newcategory.includes(val)){
            newcategory=newcategory.filter((e)=>e!=val)
        }
        else{
            newcategory.push(val)
        }
        setcategory(newcategory)
        console.log(category)
    }

    const handlecolor=(e)=>{
        let val=(e.target.value)
        let newcolour=[...colour]
        if(newcolour.includes(val)){
            newcolour=newcolour.filter((e)=>e!=val)
        }
        else{
            newcolour.push(val)
        }
        setcolour(newcolour)
        console.log(colour)
    }

    const handlesize=(e)=>{
        let val=(e.target.value)
        let newsize=[...size]
        if(newsize.includes(val)){
            newsize=newsize.filter((e)=>e!=val)
        }
        else{
            newsize.push(val)
        }
        setsize(newsize)
        console.log(size)
    }

    const handleSort = (val) => {
        //const {value} = val
        setorder(val)
        console.log(val)
    }

    const handleRating = (val) =>{
        setRating(val)
        console.log(val)
    }

    useEffect(()=>{
        let params={
            brand,
            category,
            size,
            colour,
           
        }
        order && (params.order = order)
        rating && (params.rating = rating)
        setsearchparams(params)
    },[brand,category,size,colour,order,rating])

    const buttonStyle = {
        border: 'none',
        background: 'none',
        boxShadow: 'none',
        cursor: 'pointer', // Optionally set cursor to pointer to indicate it's clickable
    };
    
    
  return (
    <>
      <Flex  pt={10} justifyContent={'space-between'} w={"90%"} m='auto'>
        <Button style={buttonStyle} onClick={onOpen}>Filter <ChevronDownIcon/></Button>
        <Drawer 
            isOpen={isOpen}
            onClose={onClose}
            placement='left'
           
        >
            <DrawerOverlay/>
            <DrawerContent>
                <DrawerCloseButton mt={20}/>
                <DrawerHeader mt={20}>
                    Filters
                </DrawerHeader>

                <DrawerBody>
                    <FormLabel>Select Category</FormLabel>
                        <Box mb={'10'}>
                            <Box>
                                <Checkbox onChange={handleCategory} value={'shoes'} defaultChecked={category.includes('shoes')}>
                                    shoes
                                </Checkbox>
                            </Box>
                        
                            <Box>
                                <Checkbox onChange={handleCategory} value={'tshirt'} defaultChecked={category.includes('tshirt')}>
                                    tshirt
                                </Checkbox>
                            </Box>
                            
                            <Box>
                                <Checkbox onChange={handleCategory} value={'shirt'} defaultChecked={category.includes('shirt')}>
                                    shirt
                                </Checkbox>
                            </Box>

                            <Box>
                                <Checkbox onChange={handleCategory} value={'short'} defaultChecked={category.includes('short')}>
                                    short
                                </Checkbox>
                            </Box>

                            <Box>
                                <Checkbox onChange={handleCategory} value={'kurta'} defaultChecked={category.includes('kurta')}>
                                    kurta
                                </Checkbox>
                            </Box>
                        </Box>
                    <FormLabel>Popular Brand</FormLabel>
                    <Box mb={10}>
                        <Box>
                            <Checkbox onChange={handleclick} value={'Roadster'} defaultChecked={brand.includes('Roadster')}>
                                Roadster
                            </Checkbox>
                        </Box>

                        <Box>
                            <Checkbox onChange={handleclick} value={'HRX'} defaultChecked={brand.includes('HRX')}>
                                HRX
                            </Checkbox>
                        </Box>
                        
                        <Box>
                            <Checkbox onChange={handleclick} value={'Technosport'} defaultChecked={brand.includes('Technosport')}>
                                Technosport
                            </Checkbox>
                        </Box>
                        
                        <Box>
                            <Checkbox onChange={handleclick} value={'Huetrap'} defaultChecked={brand.includes('Huetrap')}>
                                Huetrap
                            </Checkbox>
                        </Box>

                        <Box>
                            <Checkbox onChange={handleclick} value={'Puma'} defaultChecked={brand.includes('Puma')}>
                                Puma
                            </Checkbox>
                        </Box>

                        <Box>
                            <Checkbox onChange={handleclick} value={'Dressberry'} defaultChecked={brand.includes('Dressberry')}>
                                Dressberry
                            </Checkbox>
                        </Box>

                        <Box>
                            <Checkbox onChange={handleclick} value={'KALINI'} defaultChecked={brand.includes('KALINI')}>
                                KALINI
                            </Checkbox>
                        </Box>
                        
                    </Box>
                    <FormLabel>Sizes</FormLabel>
                    <Box mb={10}>
                        <Box>
                            <Checkbox onChange={handlesize} value={'S'} defaultChecked={size.includes('S')}>
                                S
                            </Checkbox>
                        </Box>
                        
                        <Box>
                            <Checkbox onChange={handlesize} value={'L'} defaultChecked={size.includes('L')}>
                                L
                            </Checkbox>
                        </Box>
                        
                        <Box>
                            <Checkbox onChange={handlesize} value={'M'} defaultChecked={size.includes('M')}>
                                M
                            </Checkbox>
                        </Box>
                        
                        <Box>
                            <Checkbox onChange={handlesize} value={'XL'} defaultChecked={size.includes('XL')}>
                                XL
                            </Checkbox>
                        </Box>

                        <Box>
                            <Checkbox onChange={handlesize} value={'XXL'} defaultChecked={size.includes('XXL')}>
                                XXL
                            </Checkbox>
                        </Box>
                    </Box>

                    <Box mb={10}>
                       
                    <FormLabel>Colour</FormLabel>
                    <Flex>
                     
                    <Tooltip hasArrow label='blue'>
                    <IconButton
                        isRound={true}
                        bgColor='blue'
                        fontSize='20px'  
                        value={'blue'}
                        onClick={handlecolor}
                        defaultChecked={colour.includes("blue")}
                        m={2}
                    />
                    </Tooltip>
                    <Tooltip hasArrow label='black'>
                    <IconButton
                        isRound={true}
                        bgColor="black"
                        fontSize='20px' 
                        value={'black'}
                        defaultChecked={colour.includes('black')}
                        onClick={handlecolor} 
                        m={2}
                        
                    />
                    </Tooltip>
                    <Tooltip hasArrow label='pink'>
                    <IconButton
                        isRound={true}
                        bgColor="pink"
                        fontSize='20px' 
                        value={'pink'}
                        onClick={handlecolor} 
                        m={2}
                    />
                    </Tooltip>
                    <Tooltip hasArrow label='grey'>
                    <IconButton
                        variant={'outline'}
                        isRound={true}
                        bgColor='Gray' // Use a specific shade of gray (e.g., gray.50)
                        fontSize='20px' 
                        value={'grey'}
                        onClick={handlecolor} 
                        m={2}
                        />
                    </Tooltip>
                    <Tooltip hasArrow label='white'>
                    <IconButton
                        isRound={true}
                        bgColor='white' // Use a specific shade of gray (e.g., gray.50)
                        fontSize='20px' 
                        value={'white'}
                        onClick={handlecolor} 
                        m={2}
                        />
                    </Tooltip>
                    </Flex>
                    <Flex>
                    <Tooltip hasArrow label='red'>
                    <IconButton
                        isRound={true}
                        bgColor='red' // Use a specific shade of gray (e.g., gray.50)
                        fontSize='20px' 
                        value={'red'}
                        onClick={handlecolor} 
                        m={2}
                        />
                    </Tooltip>
                    <Tooltip hasArrow label='green'>
                    <IconButton
                        isRound={true}
                        bgColor='green' // Use a specific shade of gray (e.g., gray.50)
                        fontSize='20px' 
                        value={'green'}
                        onClick={handlecolor} 
                        m={2}
                        />
                    </Tooltip>
                    <Tooltip hasArrow label='yellow'>
                    <IconButton
                        isRound={true}
                        bgColor='yellow' // Use a specific shade of gray (e.g., gray.50)
                        fontSize='20px' 
                        value={'yellow'}
                        onClick={handlecolor} 
                        m={2}
                        />
                    </Tooltip>
                    <Tooltip hasArrow label='purple'>
                    <IconButton
                        isRound={true}
                        bgColor='purple' // Use a specific shade of gray (e.g., gray.50)
                        fontSize='20px' 
                        value={'purple'}
                        onClick={handlecolor} 
                        m={2}
                        />
                    </Tooltip>
                    <Tooltip hasArrow label='brown'>
                    <IconButton
                        isRound={true}
                        bgColor='brown' // Use a specific shade of gray (e.g., gray.50)
                        fontSize='20px' 
                        value={'brown'}
                        onClick={handlecolor} 
                        m={2}
                        />
                    </Tooltip>
                    
                    </Flex>
                    </Box>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
       <SortSelect handleSort={handleSort} order = {order} handleRating={handleRating} rating={rating}/>
       
      </Flex>
    
    </>
  )
}

export default FilterSelect
