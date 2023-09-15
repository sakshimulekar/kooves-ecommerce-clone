import React from 'react'
import SingleHomeCard from './SingleHomeCard'
import { Box, Button, Center, Heading } from '@chakra-ui/react'
import Logos from './Logos'
import ImageCarousel from './ImageCarousel'
import { homewomendata } from '../../utils/Homewomendata'
import Products from '../../pages/Products'
import carosel1 from "../../Assest/carosel1.gif"
import carosel2 from "../../Assest/carosel2.webp"
import carosel3 from "../../Assest/carosel3.avif"
import carosel4 from "../../Assest/carosel4.avif"
import carosel5 from "../../Assest/carosel5.avif"
import carosel6 from "../../Assest/carosel6.avif"
import carosel7 from "../../Assest/carosel7.avif"
import bankstrip1 from "../../Assest/bankstrip1.avif"
import bankstip2 from "../../Assest/bankstip2.avif"
import bankstrip3 from "../../Assest/bankstrip3.avif"
import carosel9 from "../../Assest/carosel9.avif"
import carosel10 from "../../Assest/carosel10.avif"
import carosel11 from "../../Assest/carosel11.avif"
import carosel12 from "../../Assest/carosel12.avif"
import carosel13 from "../../Assest/carosel13.avif"
import banner1 from "../../Assest/banner1.avif"
import { Footer } from '../Footer/Footer'
const videos=[carosel1,carosel2,carosel3,carosel4,carosel5,carosel6,carosel7]
const bankstrip=[bankstrip1,bankstip2,bankstrip3]
const caroselArr=[carosel9,carosel10,carosel11,carosel12,carosel13]


const Home = () => {
  
  return (
    <Box mt={20} >
        {/* this imagecarsosel we use for single product page */}
        <ImageCarousel videos={videos}/>
        <ImageCarousel videos={bankstrip}/>
        <Box bgColor={'gold'} p={2} mt={2}>
        <center as='b' >Shop Women's</center>
        </Box>
       
        <Box  >
        <SingleHomeCard data={homewomendata}/>
        </Box>
        <ImageCarousel videos={caroselArr}/>
        <Box backgroundColor={'gold'} mt={2}>
        
        <Center as='b' p={1}><Button backgroundColor={'transparent'}>View More</Button></Center>
        </Box>
        <Box>
        <SingleHomeCard data={homewomendata}/>
        </Box>
        <img src={banner1} alt='banner' width={'100%'}/>
        <Box m={5}>
          <Center m={2}><Heading>Our Popular Brand</Heading></Center>
          <Logos/>
        </Box>
      
        
        

      </Box>
  )
}

export default Home
