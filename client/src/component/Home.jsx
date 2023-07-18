import React from 'react'
import NavBar from './Navbar'

import VideoChanger from './VideoCarosel'
import SingleHomeCard from './SingleHomeCard'
import { Button, Center, Heading } from '@chakra-ui/react'
import Logos from './Logos'



const Home = () => {
  
  return (
    <div>
      <NavBar/>
      <div>
        
        <VideoChanger/>
        <Heading>Shop Women's</Heading>
        <SingleHomeCard/>
        <Heading>Shop Men's</Heading>
        <SingleHomeCard/>
        <Center>Varsity Jackets</Center>
        <SingleHomeCard/>
        <center><Button>View More</Button></center>
        <Logos/>
        

      </div>
    </div>
  )
}

export default Home
