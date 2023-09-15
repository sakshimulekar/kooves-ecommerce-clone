import React from 'react';
import {Image} from "@chakra-ui/react"
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Caroselimage = ({ arr }) => {
    if (!arr || arr.length === 0) {
      return <div>No images found!</div>;
    }
  
    return (
      <Carousel interval={1000}  border={'1px solid'} >
        {arr.map((e, i) => (
          <div key={i}>
            <Image src={e} alt='img' />
          </div>
        ))}
      </Carousel>
    );
  };
  

export default Caroselimage;
