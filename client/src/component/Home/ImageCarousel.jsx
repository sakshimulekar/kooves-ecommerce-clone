import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import carosel1 from "../../Assest/carosel1.gif"
import carosel2 from "../../Assest/carosel2.webp"
import carosel3 from "../../Assest/carosel3.avif"
import carosel4 from "../../Assest/carosel4.avif"
import carosel5 from "../../Assest/carosel5.avif"
import carosel6 from "../../Assest/carosel6.avif"
import carosel7 from "../../Assest/carosel7.avif"
const videos=[carosel1,carosel2,carosel3,carosel4,carosel5,carosel6,carosel7]
const VideoCarousel = () => {
  return (
    
    <Carousel 
    autoPlay={true}
    interval={3000}
    showIndicators={true}
    infiniteLoop={true}
    showThumbs={false}
    stopOnHover={false}
    transitionTime={500}
    swipeable={true}
    dynamicHeight={false}
    >
        {videos?.map((e,i)=>{
          return (
          <div key={i}>
            <img src={e} alt='img' autoPlay />
          </div>
        )
        })}
    </Carousel>
  )
};

export default VideoCarousel;
