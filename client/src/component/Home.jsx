import React from 'react'
import NavBar from './Navbar'


import SingleHomeCard from './SingleHomeCard'
import { Button, Center, Heading } from '@chakra-ui/react'
import Logos from './Logos'
import ImageCarousel from './ImageCarousel'
import Footer from './Footer'



const Home = () => {
  
  return (
    <div>
      <NavBar/>
      <div>
        {/* this imagecarsosel we use for single product page */}
        <ImageCarousel/>
        <Heading>Shop Women's</Heading>
        <SingleHomeCard/>
        <Heading>Shop Men's</Heading>
        <SingleHomeCard/>
        <Center>Varsity Jackets</Center>
        <SingleHomeCard/>
        <center><Button>View More</Button></center>
        <Logos/>
        <Footer/>

      </div>
    </div>
  )
}

export default Home
