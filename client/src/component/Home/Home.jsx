import React from 'react'



import SingleHomeCard from './SingleHomeCard'
import { Button, Center, Heading } from '@chakra-ui/react'
import Logos from './Logos'
import ImageCarousel from './ImageCarousel'
import Footer from '../Footer'
import { homewomendata } from '../../utils/Homewomendata'



const Home = () => {
  
  return (
    <div>
        {/* this imagecarsosel we use for single product page */}
        <ImageCarousel/>
        <Heading>Shop Women's</Heading>
        <SingleHomeCard data={homewomendata}/>
        <Heading>Shop Men's</Heading>
        {/* <SingleHomeCard/>
        <Center>Varsity Jackets</Center>
        <SingleHomeCard/> */}
        <center><Button>View More</Button></center>
        <Logos/>
        <Footer/>

      </div>
  )
}

export default Home
